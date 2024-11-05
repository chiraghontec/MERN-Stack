### DAY ☀️ : State in React

```
Created by:
Name: Dhiraj Kr.
Profession: Data Scientist & GenAI Developer
```

---

### What is State?

**State** in React is a special object that allows components to store and manage their own data. It can change over time, usually in response to user actions.

---

### Key Points About State:

1. **Mutable**: 
   - State can change, allowing the component to update its display based on user actions.

2. **Local to Component**:
   - Each component can have its own state. Changes to a component’s state only affect that component.

3. **Using Hooks**:
   - In functional components, state is managed using the `useState` hook.

---

### Simple Example of State in a Functional Component:

Here’s a basic example of using state to perform a simple addition:

```javascript
import React, { useState } from 'react';

const App = () => {
    const [number, setNumber] = useState(0); // Initialize state with 0

    const addOne = () => {
        setNumber(number + 1); // Update state by adding 1
    };

    return (
        <div>
            <h1>Current Number: {number}</h1> {/* Display current number */}
            <button onClick={addOne}>Add One</button> {/* Button to add 1 */}
        </div>
    );
};

export default App;
```

### Explanation:

- **useState**: This hook initializes the state variable `number` to 0.
- **addOne**: This function updates the state by adding 1 to the current value of `number`.
- **Display**: The current number is shown on the screen, and clicking the button updates the number.

---

### Summary

- **State** allows React components to manage their own data.
- In this example, clicking the button increases the number displayed on the screen.

---

**End of Document** ✨