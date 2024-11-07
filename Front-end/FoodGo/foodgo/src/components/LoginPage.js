import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState([]);

    const navigate = useNavigate();    
    useEffect(() => {
        fetch('/userData.json') // Replace with your API endpoint if necessary
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    const handleLogin = () => {
        const user = userData.find(user => user.username === username && user.password === password);
        if (user) {
            setMessage('Login successful! Welcome, admin.');
            navigate('/home');
        } else {
            setMessage('Invalid username or password.');
        }
    };

    return (
        <div className="login-container">
            <h2>Login Page</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="login-input"
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
            />
            <button onClick={handleLogin} className="login-button">Login</button>
            {message && <p className="login-message">{message}</p>}
        </div>
    );
};

export default LoginPage;