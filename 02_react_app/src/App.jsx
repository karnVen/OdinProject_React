import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './Ass.css'

const COLORS = ["pink", "green", "blue", "yellow", "black"];

export function Head() {
  return <h1>Color Switcher</h1>;
}

export function App() {
  // State 1: Tracks the background color
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0]);
  
  // State 2: Tracks the number of clicks (New!)
  const [count, setCount] = useState(0);

  const onButtonClick = (color) => () => {
    // Action 1: Change the color
    setBackgroundColor(color);
    // Action 2: Increase the count
    setCount(count + 1);
  };

  return (
    <div
      className="App"
      style={{
        backgroundColor,
      }}
    >
      <Head />
      
      {/* Display the Counter here */}
      <h2>Changes: {count}</h2>

      <div className="buttons">
        {COLORS.map((color) => (
          <button
            type="button"
            key={color}
            onClick={onButtonClick(color)}
            className={backgroundColor === color ? "selected" : ""}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}


// App.jsx

// src/App.jsx
// export function App2() { // <--- Notice the word "export" here
//   return <h1>Our First Test</h1>;
// }

// export default App2;
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export const App2 = () => {
  const [heading, setHeading] = useState("Magnificent Monkeys");

  const clickHandler = () => {
    setHeading("Radical Rhinos");
  };

  return (
    <>
      <button type="button" onClick={clickHandler}>
        Click Me
      </button>
      <h1>{heading}</h1>
    </>
  );
};

export default App2;
