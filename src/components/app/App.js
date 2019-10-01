import React from 'react';
import './App.css';
import Form from './Form';
import {useSelector, useDispatch} from 'react-redux';
import C from './../../js/constants';
import store from './../../js/store/index.js'

store.subscribe(()=>{
  store.getState();
})

function App(){
  
  const colors = useSelector((state)=>state.colors);
  const dispatch = useDispatch();

  return(
  <div className="colorsList">
    <div className="colorAdder">
      <h2>Colors List</h2>
        <Form />
       
    </div>
    <section className="colorAdder">
      <strong>Redux Store List </strong>
      <ul className='list-group list-group-flush'>
    {colors.map(el=>(
      <li className='list-group-item' key={el.id} >
        {el.title} : {el.rating}

        <button
          onClick={(()=>dispatch({type: C.UP_RATING, payload: el}))}
          value={el.title}
          id={el.id}
          color={el.color}
          rating={el.rating}
          className="deleteButton"
        >
          Up
        </button>
        <button
          onClick={(()=>dispatch({type: C.DOWN_RATING, payload: el}))}
          value={el.title}
          id={el.id}
          color={el.color}
          rating={el.rating}
          className="deleteButton"
        >
          Down
        </button>
        <button
          onClick={(()=>dispatch({type: C.REMOVE_COLORS, payload: el}))}
          value={el.title}
          id={el.id}
          color={el.color}
          rating={el.rating}
          className="deleteButton"
        >
          X 
        </button>
      </li>
    ))}
  </ul>
    </section>
  </div>
  )
};


export default App;
