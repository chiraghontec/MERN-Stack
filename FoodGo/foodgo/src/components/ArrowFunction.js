import React from 'react';
import { useState, useEffect } from "react";

const ArrowFunction = () => {
    const greetArrow = () => "This is a text message";
    const arr=['is this a joke?','he fell for it','question your existence'];
    const randomItem = (arr) => {
        console.log(arr[randomItem]);
    }
    const handleClick = () => console.log("Button was clicked!");
    const add = (a, b) => a + b;

    const emojis = ["😀", "🎉", "💻", "🚀", "🌟"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

        const [count, setCount] = useState(10);
      
        useEffect(() => {
          if (count > 0) {
            const timer = setTimeout(() => setCount(count - 1), 1000);
            return () => clearTimeout(timer);
          }
        },[count]); 
        
        const MotivationalQuote = () => "Believe you can, and you're halfway there.";

    const randomHex = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const color = randomHex();

    const roll = () => Math.floor(Math.random() * 6) + 1;
    const diceResult = roll();
    return (
        <div>
            <h2>JavaScript Function Examples</h2>
            <h3>Example 1: Simple Text</h3>
            <p>Arrow: {greetArrow()}</p>

            <h3>Example 3: Random Item from array</h3>
            <p>Arrow: {randomItem(arr)}</p>

            <h3>Example 4: Handle a Button Click Event</h3>
            <p><button onClick={handleClick}>Click Me</button>;</p>

            <h3>Example 5: Simple math operation</h3>
            <p>{add(5,3)}</p>

            <h3>Example 6: Random Emoji</h3>
            <p>{randomEmoji}</p>

            <h3>Example 7: countdown</h3>
            <p>Countdown: {count}</p>

            <h3>Example 8: Motivational Quote</h3>
            <p>{MotivationalQuote()}</p>

            <h3>Example 9: Displaying Random Hex color</h3>
            <p style={{ backgroundColor: color, padding: "20px", color: "#fff" }}>Random Color: {color}</p>
            
            <h3>Example 10: Dice</h3>
            <p>{diceResult}</p>


        </div>

    );
}
export default ArrowFunction;