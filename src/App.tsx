  import React from 'react';
  import logo from './logo.svg';
  import './App.css';

  function App() {
    let name = '리트';

    const style = {
      backgroundColor: 'black',
      color: 'white',
      fontSize: '48px',
      fontWeight: 'bold',
      padding: '20px'
    }

    return (
      <div style={{
        backgroundColor: 'black',
        color: 'white',
        fontSize: '48px',
        fontWeight: 'bold',
        padding: '20px'}
      }>
        <h1 style={style}>hello world, {
            name === '리액트' ? (<p className='App'>리액트</p>) : null
        }</h1>
        <p>반갑습니다!</p>
      </div>
    );

    {/* 이렇게 중괄호를 먼저 친 후 주석을! */}
  }

  export default App;
