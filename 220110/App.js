import React, { useState } from 'react';
import styles from './App.module.css';
import Dday from './Dday';


function App() {
  const [inputs, setInputs] = useState({
    hours : "",
    minutes : "",
    seconds : ""
  });

  const { hours, minutes, seconds } = inputs; 

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
        ...inputs,
        [name]:value
    });
  };

  return (
      <div className = {styles.Block}>
      <label className = {styles.InputForm}>
      <input name="hours" placeholder="시간" onChange={onChange} value={hours}/>
      <input name="minutes" placeholder="분" onChange={onChange} value={minutes}/>
      <input name="seconds" placeholder="초" onChange={onChange} value={seconds}/>
      </label>
      <Dday hours={hours} minutes={minutes} seconds={seconds} setInputs={setInputs}/>  
      </div>
  );
}

export default App;
