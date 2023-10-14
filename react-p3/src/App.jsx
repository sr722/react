import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('#fff');
  const [result, setResult] = useState('#fff');
  const [selected, setSelected] = useState(false);

  const colors = [
    "#FF5733",
    "#FF33FF",
    "#33FF57",
    "#3366FF",
    "#FF3333",
    "#33FFB5",
    "#B533FF",
    "#33B5FF",
    "#FFB533",
    "#B5FF33",
    "#FFFF33",
    "#FF33B5",
    "#FF5733",
    "#57FF33",
    "#3357FF"
  ];

  return (
    <div className="App">
      <div className='container'>
        <h3>Color Picker</h3>
        <div className='color-container' style={{ backgroundColor: result }}>

          <div className='colors'>
            {colors.map((color, index) => (
              <div
                key={index}
                className='color'
                style={{ backgroundColor: color, color: color }}
                onClick={() => setInput(color)}
              >
                " "
              </div>
            ))}
          </div>
          <div className='pick' onClick={() => {setResult(input)}}>Pick a color</div>
        </div>
      </div>
    </div>
  );
}

export default App;
