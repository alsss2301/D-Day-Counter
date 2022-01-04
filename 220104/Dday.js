import React, { useState, useEffect } from 'react';
import styles from './Dday.module.css';


function Dday() {
    const [minutes, setMinutes] = useState(2); //분 시작값
    const [seconds, setSeconds] = useState(0); //초 시작값

    useEffect(() => {
        const countdown = setInterval(() => {
            if(parseInt(seconds) > 0) {
                setSeconds(parseInt(seconds) -1 );
            } //parseInt는 문자열을 정수로 변환해줌.
            if(parseInt(seconds) === 0) {
                if(parseInt(minutes) === 0) {
                    clearInterval(countdown);
                }
                else {
                    setMinutes(parseInt(minutes) - 1);
                    setSeconds(59);
                }
            }
        }, 1000); // setInterval(콜백함수, 시간)함수의 반환값을 변수에 할당하여 반복 시작하고, clearInterval(변수)로 반복 중단.
        return () => clearInterval(countdown); // 작업을 정리, 종료시키려고 할때 useEffect의 리턴값으로 정리하는 작업을 할 함수를 넣어주면 된다. 
    }, [minutes, seconds]); 
    // useEffect의 인자는 콜백함수와 배열로 구성됨. 두번째 인자가 비어있는 경우는 렌더링 될때마다 실행, 빈배열일 경우는 첫렌더링때만, 배열에 value값이 있으면 value값이 바뀔때 실행됨.
    
    return (
        <div className="App"> 
            <h1>CountDown!</h1>
            <div>
                <h2>
                    {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
                </h2> 
            </div>
        </div>
    ); // CSS class 를 설정 할 때에는 className= 으로 설정. 
 } //문자열 생성시 따옴표가 아니라 `` 백틱을 사용하고 ``안에 ${}는 변수나 연산을 쓸때 씀.

export default Dday;


