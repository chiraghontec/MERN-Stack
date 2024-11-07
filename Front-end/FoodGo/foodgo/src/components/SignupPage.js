import React, { useState } from 'react';

const SignupPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        const userDetails = { username, email, password };

        try {
            const response = await fetch('http://localhost:5001/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userDetails)
            });
            const result = await response.json();
            setMessage(result.message);
        } catch (error) {
            console.error('Error:', error);
            setMessage('Failed to save data.');
        }

        setUsername('');
        setEmail('');
        setPassword('');
    };

    return (
        <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center' }}>
            <h2>Signup Page</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: 'block', width: '100%', marginBottom: '10px', padding: '8px' }}
            />
            <button onClick={handleSignup} style={{ padding: '8px 16px', marginTop: '10px' }}>
                Sign Up
            </button>
            {message && <p style={{ marginTop: '20px' }}>{message}</p>}
        </div>
    );
};

export default SignupPage;