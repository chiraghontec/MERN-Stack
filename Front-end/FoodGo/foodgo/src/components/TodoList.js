import React, { useState, useEffect } from 'react';
import './TodoList.css'; // Import CSS for styling

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editTask, setEditTask] = useState(null);
    const [editText, setEditText] = useState('');

    useEffect(() => {
        fetch('http://localhost:5001/tasks')
            .then(response => response.json())
            .then(data => setTasks(data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    const handleAddTask = async () => {
        if (!newTask) return;
        const task = { id: Date.now(), title: newTask };

        try {
            const response = await fetch('http://localhost:5001/tasks', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(task),
            });
            const addedTask = await response.json();
            setTasks([...tasks, addedTask]);
            setNewTask('');
        } catch (error) {
            console.error('Error adding task:', error);
        }
    };

    const handleUpdateTask = async (id) => {
        try {
            const response = await fetch(`http://localhost:5001/tasks/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title: editText }),
            });
            const updatedTask = await response.json();
            setTasks(tasks.map(task => (task.id === id ? updatedTask : task)));
            setEditTask(null);
            setEditText('');
        } catch (error) {
            console.error('Error updating task:', error);
        }
    };

    const handleDeleteTask = async (id) => {
        try {
            await fetch(`http://localhost:5001/tasks/${id}`, { method: 'DELETE' });
            setTasks(tasks.filter(task => task.id !== id));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="todo-container">
            <h2 className="todo-title">To-Do List</h2>
            <div className="todo-input-container">
                <input
                    type="text"
                    placeholder="New task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="todo-input"
                />
                <button onClick={handleAddTask} className="todo-add-button">
                    Add Task
                </button>
            </div>
            <ul className="todo-list">
                {tasks.map((task) => (
                    <li key={task.id} className="todo-item">
                        {editTask === task.id ? (
                            <div className="todo-edit-container">
                                <input
                                    type="text"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    className="todo-edit-input"
                                />
                                <button onClick={() => handleUpdateTask(task.id)} className="todo-save-button">
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div className="todo-text-container">
                                <span className="todo-text">{task.title}</span>
                                <button
                                    onClick={() => {
                                        setEditTask(task.id);
                                        setEditText(task.title);
                                    }}
                                    className="todo-edit-button"
                                >
                                    Edit
                                </button>
                                <button onClick={() => handleDeleteTask(task.id)} className="todo-delete-button">
                                    Delete
                                </button>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;