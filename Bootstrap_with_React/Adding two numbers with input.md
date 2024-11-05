### DAY ☀️: Adding Two Numbers in React.js (With Input)

```
Created by :
Name: Dhiraj Kr.
Profession: Data Scientist & GenAI Developer
```
---

### 1. Introduction
- This guide explains how to create a simple React.js application to add two numbers using functional components,hooks and user input.

---

### 2. Setting Up the States
- **useState Hook**: Used to manage the state of variables in a functional component.
- We initialize three state variables:
  - `number1`: Stores the first number (initially set to 0).
  - `number2`: Stores the second number (initially set to 0).
  - `sum`: Stores the calculated sum of `number1` and `number2` (initially set to 0).

**Code:**
```javascript
const [number1, setNumber1] = useState(0); // State for first number
const [number2, setNumber2] = useState(0); // State for second number
const [sum, setSum] = useState(0); // State for the sum
```

---

### 3. Handling Input Changes
- We use two input fields to allow the user to enter numbers.
- **onChange Event**: Updates the respective state when the user types in the input field.

**Code:**
```javascript
<input
    type="number"
    value={number1}
    onChange={(e) => setNumber1(Number(e.target.value))}
    placeholder="Enter first number"
/> // Input for the first number

<input
    type="number"
    value={number2}
    onChange={(e) => setNumber2(Number(e.target.value))}
    placeholder="Enter second number"
/> // Input for the second number
```

---

### 4. Calculating the Sum
- **handleAddition Function**: This function calculates the sum of `number1` and `number2` and updates the `sum` state.
- We call this function when the user clicks the "Add Numbers" button.

**Code:**
```javascript
const handleAddition = () => {
    setSum(number1 + number2); // Calculate and update the sum
};
```

---

### 5. Rendering the Output
- We display the result using an `h1` element.
- A button is provided to trigger the addition.

**Code:**
```javascript
<button onClick={handleAddition}>Add Numbers</button> // Button to add the numbers
<h1>Sum of Two Numbers: {sum}</h1> // Display the sum
```

---

### 6. Complete Code
- Here is the complete code for the React.js application:

**Code:**
```javascript
import React, { useState } from 'react';

const App = () => {
    const [number1, setNumber1] = useState(0); // State for first number
    const [number2, setNumber2] = useState(0); // State for second number
    const [sum, setSum] = useState(0); // State for the sum

    const handleAddition = () => {
        setSum(number1 + number2); // Calculate and update the sum
    };

    return (
        <div>
            <h1>Sum of Two Numbers: {sum}</h1> {/* Display the sum */}
            <input
                type="number"
                value={number1}
                onChange={(e) => setNumber1(Number(e.target.value))}
                placeholder="Enter first number"
            /> {/* Input for the first number */}
            <input
                type="number"
                value={number2}
                onChange={(e) => setNumber2(Number(e.target.value))}
                placeholder="Enter second number"
            /> {/* Input for the second number */}
            <button onClick={handleAddition}>Add Numbers</button> {/* Button to add the numbers */}
        </div>
    );
};

export default App;
```

---

**End of Document** ✨