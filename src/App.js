import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h1 className="bg-yellow-500 text-red-600">
        Hello world!
      </h1>
      <input className="border-2 border-blue-500 placeholder-green-500" type='text' placeholder='Lorem ipsum' />
    </React.Fragment>
  );
}

export default App;
