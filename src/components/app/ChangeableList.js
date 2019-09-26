// import React from 'react';
import {connect} from "react-redux";
import React, {useState} from 'react';
import {removeColor} from '../../js/actions/removeColorAction';

function mapDisptachToProps (dispatch){
  return{
    removeColor: colors => dispatch(removeColor(colors))
  };
}

const mapStateToProps = state => {
  return {colors: state.colors};
};

const deleteMe = (event)=>{
  const targetName = event.target.value;
  console.log(targetName);
  alert(`yep I am here, value is ${targetName}`);
  const Red = {id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036", title: "Rad Red", color: "#FF0000", rating: 3, timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"}
  removeColor(Red);
 
};

const ChangeAbleList = ({colors}) => (
  <ul className='list-group list-group-flush'>
    {colors.map(el=>(
      <li className='list-group-item' key={el.id}>
        {el.title}
        <button
          onClick={deleteMe}
          value={el.title}
        >
          Delete
        </button>
      </li>
    ))}
  </ul>
);

const ChangeList = connect(mapStateToProps)(ChangeAbleList);
const Delete = connect (null, mapDisptachToProps)(deleteMe);

export default ChangeList;