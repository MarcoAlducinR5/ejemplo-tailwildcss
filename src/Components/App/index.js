import { Espaciado } from '../Espaciado';
import { Espacios } from '../Espacios';
import { Grid } from '../Grid';
import { Tipografia } from '../Tipografia';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <h1 className="
        bg-yellow-500 
        text-red-600"
      >
        Hello world!
      </h1>
      <input className="
        border-2 
        border-blue-500 
        placeholder-green-500" 
      type='text' placeholder='Lorem ipsum' />
      <Grid />
      <div className='mx-4'>
        <Espacios />
        <Tipografia />
        <Espaciado />
      </div>
    </React.Fragment>
  );
}

export default App;
