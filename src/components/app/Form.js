// import React, {Component} from 'react';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import uuidv1 from 'uuid';
import {addColor} from '../../js/actions/addColorAction';

function mapDisptachToProps (dispatch){
  return{
    addColor: colors => dispatch(addColor(colors))
  };
}

const ConnectedForm = (props)=>{
  const [title, setTitle] = useState('');
  const [color, setColor] = useState('');
  const [rating, setRating] = useState(0);
  const [timeStamp, setTimeStamp] = useState("");

  const todayDate = ()=>{
    return (new Date()).toString();
  }

  const handleChange=(event)=>{
    if(event.target.id === "color"){ 
      setColor(event.target.value);
      setTimeStamp(todayDate());
    }
    if(event.target.id === "title"){
      setTitle(event.target.value);
      setTimeStamp(todayDate());
    }    
  }

  const handleSubmit=(event)=>{
    event.preventDefault();    
    const id = uuidv1();
    setTimeStamp(todayDate());
    props.addColor({id, title, color, rating, timeStamp});
  }
  
    return(
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor='title'>Color Information</label>
          <input
            type="text"
            className="form-control"
            id='title'
            value={title}
            onChange={handleChange}
            placeholder="Color Name"
          />
          <input
            type="text"
            className="form-control"
            id='color'
            value={color}
            onChange={handleChange}
            placeholder="Hex Color"
          />
        </div>
        <button 
          type="submit" 
          className="btn"
        >
          Save
        </button>
      </form>
    );
  
}

// class ConnectedForm extends Component {
//   constructor(){
//     super();
//     this.state = {
//       title: '',
//       color: '',
//       rating: 0,
//       timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
//     };

//     // this.handleChange = this.handleChange.bind(this);
//     // this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange=(event)=>{
//     this.setState({
//       [event.target.id] : event.target.value });
//     }

//   handleSubmit=(event)=>{
//     event.preventDefault();
//     const {title} = this.state;
//     const {color} = this.state;
//     const rating = 0;
//     const timeStamp = "Sat Mar 12 2019 16:12:09 GMT-0800 (PST)"
//     const id = uuidv1();
//     console.log({id},{title},{color},{rating},{timeStamp});
//     console.log({id, title, color, rating, timeStamp});
//     this.props.addColor({id, title, color, rating, timeStamp});
//     this.setState({title: ''});
//   }
  
//   render(){
//     const {title} = this.state;
//     const {color} = this.state;
//     return(
//       <form onSubmit={this.handleSubmit}>
//         <div className="form-group">
//           <label htmlFor='title'>Color Information</label>
//           <input
//             type="text"
//             className="form-control"
//             id='title'
//             value={title}
//             onChange={this.handleChange}
//             placeholder="Color Name"
//           />
//           <input
//             type="text"
//             className="form-control"
//             id='color'
//             value={color}
//             onChange={this.handleChange}
//             placeholder="Hex Color"
//           />
//         </div>
//         <button 
//           type="submit" 
//           className="btn"
//         >
//           Save
//         </button>
//       </form>
//     );
//   }
// }

const Form = connect (null, mapDisptachToProps)(ConnectedForm);
export default Form;