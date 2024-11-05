
import React, { useState } from 'react';

const AddTwoNum= () => {
    const [sum, setSum] = useState(0); // Initialize state with 0
    let a,b;
    a = 5;
    b = 10;
    return (
        <div>
            <h1>Sum:{sum}</h1> {/* Display current number */}
            <button onClick={()=>{setSum(a+b)}}>Add One</button> {/* Button to add 1 */}
        </div>
    );
};

export default AddTwoNum;