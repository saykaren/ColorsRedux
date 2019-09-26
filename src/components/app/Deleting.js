import React, {useState} from 'react';
import {connect} from 'react-redux';
import {removeColor} from '../../js/actions/removeColorAction';

function mapDisptachToProps (dispatch){
  return{
    removeColor: colors => dispatch(removeColor(colors))
  };
}

//example 
// function mapDisptachToProps (dispatch){
//   return{
//     addColor: colors => dispatch(addColor(colors))
//   };
// }

const DeleteForm = (props)=>{
  const [colorName, setColorName] = useState('');
  
  const handleChange=(event)=>{
    setColorName(event.target.value);   
  }

  const handleSubmit=(event)=>{
    event.preventDefault();    
    
    // const id = uuidv1();
    // setTimeStamp(todayDate());

    console.log(`color details are ${colorName}`);
    const Red = {id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036", title: "Rad Red", color: "#FF0000", rating: 3, timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"}
    props.removeColor(Red);
    // props.addColor({id, title, color, rating, timeStamp});
  }
 
  return(
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor='title'>Delete Me!</label>
        <input
          type="text"
          className="form-control"
          id='title'
          value={colorName}
          onChange={handleChange}
          placeholder="Color Name"
        />
      </div>
      <button 
        type="submit" 
        className="btn"
      >
        Delete 
      </button>
    </form>
  );

}

const Delete = connect (null, mapDisptachToProps)(DeleteForm);
export default Delete;