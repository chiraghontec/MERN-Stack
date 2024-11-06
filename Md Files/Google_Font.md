### DAY ☀️: Adding Google Fonts in React.js

```
Created by :
Name: Dhiraj Kr.
Profession: Data Scientist & GenAI Developer
```
---

### 1. What is Google Fonts?
- Google Fonts is a free service that provides an easy way to use various fonts on a website or in a web application.

---

### 2. How to Add Google Fonts in React.js
- You can add Google Fonts to your React.js project by including the font link in the `index.html` file, importing it in `App.js`, or using it in a CSS file.

---

### 3. Method 1: Using `index.html`
1. Go to the **Google Fonts** website and choose a font.
2. Copy the `<link>` tag provided for the font.
3. Paste the `<link>` tag in the `<head>` section of `public/index.html`.

**Example:**
```html
<!-- public/index.html -->
<head>
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
</head>
```

---

### 4. Method 2: Importing in `App.js`
1. Copy the `@import` URL provided on the Google Fonts website.
2. Import the font at the top of `src/App.js`.

**Example:**
```javascript
// src/App.js
import React from 'react';
import './App.css';
import '@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");';

const App = () => {
    return (
        <div style={{ fontFamily: 'Roboto, sans-serif' }}>
            <h1>Hello, Google Fonts in React!</h1>
        </div>
    );
};

export default App;
```

---

### 5. Method 3: Using in a CSS File
1. Copy the `@import` URL provided on the Google Fonts website.
2. Add the `@import` line at the top of your CSS file, such as `src/App.css`.
3. Use the `font-family` property in your CSS to apply the font.

**Example:**
```css
/* src/App.css */
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body {
    font-family: 'Roboto', sans-serif; /* Apply the font to the whole body */
}

h1 {
    font-family: 'Roboto', sans-serif; /* Apply the font to h1 elements */
}
```

---

### 6. Applying the Font in Your Components
- Use inline styles or class selectors to apply the font in your React components.

**Example (Using Inline Styles in `App.js`):**
```javascript
<div style={{ fontFamily: 'Roboto, sans-serif' }}>Your Text Here</div>
```

**Example (Using CSS Class in `App.js`):**
```javascript
<div className="my-font-class">Your Text Here</div>
```

**CSS (in `App.css`):**
```css
.my-font-class {
    font-family: 'Roboto', sans-serif;
}
```

---

**End of Document** ✨