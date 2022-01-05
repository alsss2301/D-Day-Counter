import React, { useState } from 'react';

function Input({hours, minutes, seconds}) {

    const [inputs, setInputs] = useState({
        hours : '',
        minutes : '',
        seconds : ''
    });

    const { hours, minutes, seconds } = inputs; 

    const onChange = (e) => {
        const { value, time } = e.target;
        setInputs({
            ...inputs,
            [time]:value
        });
    };

    return (
        <div>
            <input time="hours" placeholder="시" onChange={onChange} value={hours}/>
            <input time="minutes" placeholder="분" onChange={onChange} value={minutes}/>
            <input time="seconds" placeholder="초" onChange={onChange} value={seconds}/>
        </div>
        
    );
}

export default Input;