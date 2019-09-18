import React from 'react';
import './App.css';
import List from './List';
import Form from './Form';

const App = () =>(
  <div className="colorsList">
    <div className="col-md-4 offset-md-1">
      <h2>Colors List</h2>
        <List />
        <Form />
    </div>
  </div>
);


export default App;
