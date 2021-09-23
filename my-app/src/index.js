// 下兩個 package 類似 jquary 概念
import React from 'react';
// 把東西秀在畫面上
import ReactDOM from 'react-dom';
// 引入 css
import './index.css';
// 引入 剛剛寫的 Home
import Home from './pages/Home'


// 跟第2個引入有關係
ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);






// 可先不理
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
