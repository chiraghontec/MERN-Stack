import React from 'react';

// Function to add one to a number
const addOne = (x) => x + 1;

// Increment component
const Increment = ({ number }) => {
    const newNumber = addOne(number); // Create a new number
    return <h1>New Number: {newNumber}</h1>; // Display new number
};

export default Increment;