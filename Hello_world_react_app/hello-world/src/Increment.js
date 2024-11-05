
import React, { useState } from 'react';

const AddTwoNum= () => {
    const [principle, setNumber1] = useState(); // State for first number
    const [rate, setNumber2] = useState();
    const [Time, setNumber3] = useState(); // State for second number
    const [sum, setSum] = useState(0);
    const handleAddition = () => {
        setSum((principle * rate * Time)/100); // Calculate and update the sum
    };
    return (
        <div>
            <input type="number" value={principle}
                onChange={(e) => setNumber1(Number(e.target.value))}
                placeholder="Enter Principle"
            />
            <input
                type="number"
                value={rate}
                onChange={(e) => setNumber2(Number(e.target.value))}
                placeholder="Enter Rate"
            />
            <input
                type="number"
                value={Time}
                onChange={(e) => setNumber3(Number(e.target.value))}
                placeholder="Enter Interest"
            />
            <button onClick={handleAddition}>Add Numbers</button>
            <h1>Finding the Interest: {principle+sum}</h1>
        </div>
    );
};

export default AddTwoNum;