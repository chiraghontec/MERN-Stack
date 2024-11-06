### DAY ☀️: JavaScript Arrow Functions in React.js

```
Created by :
Name: Dhiraj Kr.
Profession: Data Scientist & GenAI Developer
```
---

### 1. What is an Arrow Function?
- Arrow functions provide a concise way to write functions in JavaScript.
- They are often used in modern JavaScript, especially in React.js, for cleaner and shorter syntax.

---

### 2. Traditional vs. Arrow Functions

#### a) Example 1: Function to Add Two Numbers
**Traditional Function:**
```javascript
function add(a, b) {
    return a + b;
}
```

**Arrow Function:**
```javascript
const add = (a, b) => a + b;
```

---

#### b) Example 2: Function with No Parameters
**Traditional Function:**
```javascript
function greet() {
    return "Hello, World!";
}
```

**Arrow Function:**
```javascript
const greet = () => "Hello, World!";
```

---

#### c) Example 3: Function to Square a Number
**Traditional Function:**
```javascript
function square(x) {
    return x * x;
}
```

**Arrow Function:**
```javascript
const square = x => x * x;
```

---

### 3. Using in a React Component
- You can define and use both traditional and arrow functions in a React component to see how they work.

**Example in `arrow.js` Component:**
```javascript
import React from 'react';

const ArrowFunctionExamples = () => {
    // Example 1
    function addTraditional(a, b) {
        return a + b;
    }
    const addArrow = (a, b) => a + b;

    // Example 2
    function greetTraditional() {
        return "Hello, World!";
    }
    const greetArrow = () => "Hello, World!";

    // Example 3
    function squareTraditional(x) {
        return x * x;
    }
    const squareArrow = x => x * x;

    return (
        <div>
            <h2>JavaScript Function Examples</h2>
            <h3>Example 1: Add Two Numbers</h3>
            <p>Traditional: {addTraditional(5, 3)}</p>
            <p>Arrow: {addArrow(5, 3)}</p>

            <h3>Example 2: Greet Message</h3>
            <p>Traditional: {greetTraditional()}</p>
            <p>Arrow: {greetArrow()}</p>

            <h3>Example 3: Square a Number</h3>
            <p>Traditional: {squareTraditional(4)}</p>
            <p>Arrow: {squareArrow(4)}</p>
        </div>
    );
};

export default ArrowFunctionExamples;
```

---

**End of Document** ✨