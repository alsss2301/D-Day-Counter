import React from 'react';
import styled from 'styled-components';

//var inputStartday = ("시작일을 입력해주세요.", "2000년 1월 1일");

var today = new Date(); 
//Date객체는 날짜와 시간을 위한 메소드를 제공하는 객체, 생성자 함수이다.
//아무런 인수를 전달하지 않으면 현재 날짜와 시간을 리턴한다.
var startday = new Date(inputStartday);
var year = startDay.getFullYear();
var month = startDay.getMonth() +1;
var day = startDay.getDate();

function Dday( {today} ) {
    return(
        <div>{today}</div>
    );
}

export default Dday;