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
      <div>
        <div className = {styles.Block} /*.css일때는 className="", module.css일때는 className={styles.~} */>
          <div className = {styles.InputForm}>
          <input className = {styles.Input} type="text" name="hours" placeholder="시간" onChange={onChange} value={hours}/>
          <input className = {styles.Input} type="text" name="minutes" placeholder="분" onChange={onChange} value={minutes}/>
          <input className = {styles.Input} type="text" name="seconds" placeholder="초" onChange={onChange} value={seconds}/>
          </div>
        <Dday hours={hours} minutes={minutes} seconds={seconds} setInputs={setInputs}/>  
        </div>
      </div>
  );
}

export default App;
