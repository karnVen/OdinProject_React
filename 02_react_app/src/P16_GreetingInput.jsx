// src/GreetingInput.jsx
import { useState } from 'react';

export default function GreetingInput() {
  const [name, setName] = useState('');

  return (
    <div>
      {/* Good accessibility: The label is linked to the input via htmlFor/id */}
      <label htmlFor="name-input">Your Name:</label>
      <input
        id="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      {/* The text changes based on the state */}
      <p>Hello, {name || 'Stranger'}!</p>
    </div>
  );
}