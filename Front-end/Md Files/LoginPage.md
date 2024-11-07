### DAY ☀️: Login Page with JSON Data in ReactJS (L2)

```
Created by :
Name: Dhiraj Kr.
Profession: Data Scientist & GenAI Developer
```
---

### 1. Introduction
- This guide explains how to create a React.js login page where the username and password are fetched from a JSON file for authentication.

---

### 2. Sample JSON Data (`userData.json`)
- Create a JSON file named `userData.json` in the `public` folder or use an API endpoint for fetching data.

**JSON Content:**
```json
[
    {
        "username": "admin",
        "password": "admin"
    }
]
```

---

### 3. React Component Code (`LoginPage.js`)

**Code:**
```javascript
import React, { useState, useEffect } from 'react';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('/userData.json') // Replace with your API endpoint if necessary
            .then(response => response.json())
            .then(data => setUserData(data));
    }, []);

    const handleLogin = () => {
        const user = userData.find(user => user.username === username && user.password === password);
        if (user) {
            setMessage('Login successful! Welcome, admin.');
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
```

---

### 4. CSS Code (`LoginPage.css`)

**Code:**
```css
.login-container {
    max-width: 300px;
    margin: 50px auto;
    text-align: center;
}

.login-input {
    display: block;
    width: 100%;
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.login-button {
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.login-button:hover {
    background-color: #0056b3;
}

.login-message {
    margin-top: 20px;
}
```

---

### 5. Steps to Use
1. **Create `userData.json`**: Place it in the `public` folder or provide an API endpoint.
2. **Create `LoginPage.js`**: Add the React component code in the `src` folder.
3. **Create `LoginPage.css`**: Add the CSS code in the `src` folder.
4. **Import the Component**: Use `LoginPage` in `App.js` to display the login page.

---

**End of Document** ✨