import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Template from './components/Template';
import Head from './components/Head';
import Dday from './components/Dday';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef; 
  } 
`; 
//페이지의 배경 색상을 설정하기 위해 body태그에 css를 적용.
//styled-components에서 특정 컴포넌트를 만들어서 스타일링 하는게 아니라 글로벌 스타일을 추가하고 싶을 때는 createGlobalStyle이라는 함수를 사용한다.
function App() {
  return (
    <>
      <GlobalStyle />
      <Template>
        <Head>
          <Dday />
        </Head>
      </Template>
    </>
  );
}

export default App;
