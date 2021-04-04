import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';



ReactDOM.render( <App />, document.getElementById('root') );
// document에 root 라는 id를 가진 엘리먼트에다가 App 이라는 함수를 렌더링한다.
// ReactDOM 은 한 번의 render실행에 하나의 컴포넌트만을 렌더링할 수 있다. 