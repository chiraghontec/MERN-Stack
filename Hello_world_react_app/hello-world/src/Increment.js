
import React, { useState } from 'react';

const AddTwoNum= () => {
    const [number1, setNumber1] = useState(); // State for first number
    const [number2, setNumber2] = useState(); // State for second number
    const [sum, setSum] = useState(0);
    const handleAddition = () => {
        setSum(number1 + number2); // Calculate and update the sum
    };
    return (
        <div>
            <input type="number" value={number1}
                onChange={(e) => setNumber1(Number(e.target.value))}
                placeholder="Enter first number"
            />
            <input
                type="number"
                value={number2}
                onChange={(e) => setNumber2(Number(e.target.value))}
                placeholder="Enter second number"
            />
            <button onClick={handleAddition}>Add Numbers</button>
            <h1>Sum of Two Numbers: {sum}</h1>
        </div>
    );
};

export default AddTwoNum;