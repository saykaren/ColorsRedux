import React from 'react';
import './App.css';
import List from './List';
import Form from './Form';
import { reject } from 'q';
import DeleteForm from './Deleting';
import ChangeList from './ChangeableList';

const getFakeMembers = count => new Promise((resolves, rejects)=>{
  const api = 'https://api.randomuser.me/?nat=US&result=${count}';
  const request = new XMLHttpRequest();
  request.open('GET', api)
  request.onload = ()=>
    (request.status === 200) ?
      resolves(JSON.parse(request.response).results) :
      reject(Error(request.statusText))
  request.onerror = (err) => rejects(err)
  request.send()

});

const MembersWhoop = (members, key=0)=>{
  // console.log(members);
  // var results = members.map(x=>console.log(x.email));
  // console.log(results);
  var results = members[0];
  const {id, name, nat} = members;
  console.log(nat); ///not working ugh!
  // var dob = Object.values(results);
  console.log(results);
  // console.log(dob);
  return(
    <div>
      Hello 
    </div>
  )
}

const buttonHandler = ()=>{
  getFakeMembers(5).then(
    // members => console.log(members),
    members => MembersWhoop(members),
    err=> console.error(
      new Error("cannot load members from randomuser.me")
    )
  )
  
}

// function mapDisptachToProps (dispatch){
//   return{
//     removeColorAction: () => dispatch(removeColorAction("Rad Red"))
//   };
// }


const App = () =>(
  <div className="colorsList">
    <div className="col-md-4 offset-md-1">
      <h2>Colors List</h2>
    
        <Form />


      <button
        onClick={buttonHandler}
      >
        Push for API
      </button>
      <DeleteForm />
      <MembersWhoop />
    </div>
    <section>
      I should be able to put delete button on this one
      <ChangeList />
    </section>
  </div>
);


export default App;
