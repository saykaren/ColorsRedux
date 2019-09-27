import React from 'react';
import './App.css';
import List from './List';
import Form from './Form';
import { reject } from 'q';
import DeleteForm from './Deleting';
import ChangeList from './ChangeableList';

const App = () =>(
  <div className="colorsList">
    <div className="col-md-4 offset-md-1">
      <h2>Colors List</h2>
        <Form />
        <DeleteForm />
    </div>
    <section>
      Redux Store List 
      <ChangeList />
    </section>
  </div>
);


export default App;
