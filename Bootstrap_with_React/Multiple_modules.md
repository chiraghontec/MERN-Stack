### DAY ☀️ : Functional Programming with Multiple Components

```
Created by:
Name: Dhiraj Kr.
Profession: Data Scientist & GenAI Developer
```

---

### What is Functional Programming?

**Functional Programming** is a way of writing code that focuses on using functions to perform tasks and emphasizes creating new data instead of changing existing data.

---

### Key Concepts:

1. **Functions are Important**:
   - Functions take inputs and return outputs.

2. **No Side Effects**:
   - A good function does not change anything outside of itself.

3. **Creating New Data**:
   - Instead of changing a value, you create a new value.

---

### Simple Example with Two Components in React

Here’s a basic example that demonstrates functional programming with two components:

**1. Increment Component**: This component adds one to a number.
**2. Display Component**: This component shows the original and new number.

#### Increment.js
```javascript
import React from 'react';

// Function to add one to a number
const addOne = (x) => x + 1;

// Increment component
const Increment = ({ number }) => {
    const newNumber = addOne(number); // Create a new number
    return <h1>New Number: {newNumber}</h1>; // Display new number
};

export default Increment;
```

#### Display.js
```javascript
import React from 'react';

// Display component
const Display = ({ number }) => {
    return <h1>Original Number: {number}</h1>; // Display original number
};

export default Display;
```

#### App.js
```javascript
import React from 'react';
import Display from './Display'; // Import Display component
import Increment from './Increment'; // Import Increment component

const App = () => {
    const number = 5; // Original number

    return (
        <div>
            <Display number={number} /> {/* Call Display component */}
            <Increment number={number} /> {/* Call Increment component */}
        </div>
    );
};

export default App;
```

### Summary

- This example uses two functional components: **Display** shows the original number, and **Increment** shows the new number after adding one.
- This demonstrates how functional programming can be applied with components in React, making the code modular and easier to understand.

---

**End of Document** ✨