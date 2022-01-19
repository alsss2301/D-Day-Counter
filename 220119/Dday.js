import React, {useState} from 'react';
import styles from "./Dday.module.css";

function Dday() {

    const dday = '1 jan 2023';
    const [days, setDays] = useState("");
    const [hours, setHours] = useState("");
    const [minutes, setMinutes] = useState("");
    const [seconds, setSeconds] = useState("");
    
    const countdown = setInterval( () => {
        const newDate = new Date(dday); // 인수로 날짜(시간)을 나타내는 문자열을 전달하면 지정된 날짜와 시간을 나타내는 인스턴스를 리턴한다. "26 Mar 2020" 또는 "03 26 2020" 
        const currentDate = new Date(); // date함수는 아무런 인수를 전달하지 않으면 현재 날짜와 시간을 가지는 인스턴스를 리턴한다.

        const totalSeconds = (newDate - currentDate) / 1000; //밀리초(ms)를 초(s)로 변환, 1000ms = 1s
        setDays(Math.floor(totalSeconds / 3600 / 24)); //Math.floor함수는 소수값이 존재할 때 소수값을 버리는 역할을 하는 함수. 
        setHours(Math.floor(totalSeconds / 3600) % 24);
        setMinutes(Math.floor(totalSeconds / 60) % 60);
        setSeconds(Math.floor(totalSeconds) % 60);
    }, 1000);

    return (
        <div>
            <h1 className={styles.Font}>D-day CountDown</h1>
            <div>
                <h2 className={styles.Date}>
                {days < 10 ? `0${days}` : days} {hours < 10 ? `0${hours}` : hours} {minutes < 10 ? `0${minutes}` : minutes} {seconds < 10 ? `0${seconds}` : seconds}
                    <h3 className={styles.Text}>days  hours  minutes  seconds</h3> 
                </h2>
            </div>
        </div>
    );
}

export default Dday;