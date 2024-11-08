import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [editFormData, setEditFormData] = useState({ id: '', name: '', description: '' });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/items').then((response) => {
      setItems(response.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/items', formData).then((response) => {
      setItems([...items, response.data]);
      setFormData({ name: '', description: '' });
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/items/${editFormData.id}`, editFormData).then((response) => {
      setItems(items.map(item => (item._id === editFormData.id ? response.data : item)));
      setEditFormData({ id: '', name: '', description: '' });
    });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/items/${id}`).then(() => {
      setItems(items.filter(item => item._id !== id));
    });
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
          className="input"
        />
        <input
          type="text"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          placeholder="Description"
          className="input"
        />
        <button type="submit" className="button">Add Item</button>
      </form>

      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
        className="input search"
      />

      <ul className="list">
        {filteredItems.map((item) => (
          <li key={item._id} className="list-item">
            {item.name}: {item.description}
            <button onClick={() => setEditFormData({ id: item._id, name: item.name, description: item.description })} className="button edit">Edit</button>
            <button onClick={() => handleDelete(item._id)} className="button delete">Delete</button>
          </li>
        ))}
      </ul>

      {editFormData.id && (
        <form onSubmit={handleEditSubmit} className="form">
          <input
            type="text"
            value={editFormData.name}
            onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
            placeholder="Name"
            className="input"
          />
          <input
            type="text"
            value={editFormData.description}
            onChange={(e) => setEditFormData({ ...editFormData, description: e.target.value })}
            placeholder="Description"
            className="input"
          />
          <button type="submit" className="button">Update Item</button>
        </form>
      )}
    </div>
  );
}

export default App;