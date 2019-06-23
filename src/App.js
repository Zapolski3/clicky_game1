import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Body from './components/body'

function App() {
  return (
    <div className="App">
     <Header />
     <img src={require('./components/images/body1.jpeg')} width="1200" height="500"/>
     <Body />
     {/* <Footer /> */}
    </div>
  );
}

export default App
