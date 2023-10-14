import React, { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState([])
  const [age, setAge] = useState(-1)

  const calculate_age = (dob) => {
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  const handleDobChange = (e) => {
    setDob(e.target.value);
    setAge(-1);   //reset age
  }

  return (
    <div className="App">
      <div className="container">
        <p><b>Enter your date of birth</b></p>
        <input type="date" onChange={handleDobChange} />
        <button onClick={() => {setAge(calculate_age(new Date(dob)))}}>Calculate Your Age</button>
        {age >= 0 && <p>Your age is {age}</p>}
      </div>
    </div>
  );
}

export default App;
