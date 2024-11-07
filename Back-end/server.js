const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const dataFilePath = 'userData.json';

// GET route to fetch all tasks
app.get('/tasks', (req, res) => {
    fs.readFile(dataFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ message: 'Error reading data.' });
        }

        const tasks = data ? JSON.parse(data) : [];
        res.json(tasks);
    });
});

// POST route to add a new task
app.post('/tasks', (req, res) => {
    const newTask = req.body;

    fs.readFile(dataFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ message: 'Error reading data.' });
        }

        const tasks = data ? JSON.parse(data) : [];
        tasks.push(newTask);

        fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ message: 'Error saving data.' });
            }

            res.status(201).json(newTask);
        });
    });
});

// PUT route to update a task
app.put('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);
    const updatedTask = req.body;

    fs.readFile(dataFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ message: 'Error reading data.' });
        }

        let tasks = data ? JSON.parse(data) : [];
        tasks = tasks.map(task => (task.id === taskId ? { ...task, ...updatedTask } : task));

        fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ message: 'Error saving data.' });
            }

            res.status(200).json({ id: taskId, ...updatedTask });
        });
    });
});

// DELETE route to delete a task
app.delete('/tasks/:id', (req, res) => {
    const taskId = parseInt(req.params.id, 10);

    fs.readFile(dataFilePath, 'utf-8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).json({ message: 'Error reading data.' });
        }

        let tasks = data ? JSON.parse(data) : [];
        tasks = tasks.filter(task => task.id !== taskId);

        fs.writeFile(dataFilePath, JSON.stringify(tasks, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return res.status(500).json({ message: 'Error saving data.' });
            }

            res.status(200).json({ message: 'Task deleted' });
        });
    });
});

app.listen(5001, () => {
    console.log('Server is running on http://localhost:5001');
});