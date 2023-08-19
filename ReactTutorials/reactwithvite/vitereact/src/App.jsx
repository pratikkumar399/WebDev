import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [isTextVisible, setTextVisible] = useState(true);

  const toggleTextVisibility = () => {
    setTextVisible(prevIsTextVisible => !prevIsTextVisible);
  };

  return (
    <>
      {isTextVisible ? (
        <>
          <button onClick={toggleTextVisibility}>Hide Text</button>
          <h1>Hello World</h1>
        </>
      ) : (
        <button onClick={toggleTextVisibility}>Show Text</button>
      )}
    </>
  );
}

export default App;
