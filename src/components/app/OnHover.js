import React from 'react';
import {connect} from "react-redux";
import {removeColor} from '../../js/actions/removeColorAction';
import C from '../../js/constants.js'

import {useSelector, useDispatch} from 'react-redux';

function mapDisptachToProps (dispatch){
  return{
    removeColor: colors => dispatch(removeColor(colors))
  };
}

// export const Clicked = (event)=>{
  
//   event.preventDefault();  
//   const {value, id, color, rating} = event.target;
//   const clickedObject = event.target;
//   const red = {
//     id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
//     title: "Rad Red",
//     color: "#FF0000",
//     rating: 3,
//     timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
//   };
//   removeColor(red);


//   // const counter = useSelector(state=> state.counter);
//   const dispatch = useDispatch();
//   dispatch({type: C.REMOVE_COLORS, red});
  
// };

export const Clicked = (event)=>{
  event.preventDefault();  
  const {value, id, color, rating} = event.target;
  const clickedObject = event.target;
  const red = {
    id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
    title: "Rad Red",
    color: "#FF0000",
    rating: 3,
    timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
  };
  removeColor(red);
  
};

const DeleteClick = connect(null, mapDisptachToProps)(Clicked);

export default DeleteClick;
// export default Clicked
