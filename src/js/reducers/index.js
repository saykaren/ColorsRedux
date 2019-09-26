import C from '../constants';
// import {REMOVE_COLOR} from '../actions/addColorAction';
import uuidv1 from 'uuid';


const initialState = {
  colors: [
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf3036",
      title: "Rad Red",
      color: "#FF0000",
      rating: 3,
      timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
    },
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf4457",
      title: "Crazy Green",
      color: "#00FF00",
      rating: 0,
      timestamp: "Fri Mar 11 2016 12:00:00 GMT-0800 (PST)"
    },
    {
      id: "3315e1p5-3abl-0p523-30e4-8001l8yf2412",
      title: "Big Blue",
      color: "#0000FF",
      rating: 5,
      timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
    }
  ],
  
};

function rootReducer(state = initialState, action){
  // console.log(`hello I am here`);
  switch(action.type){
    // case C.ADD_COLORS:
    //   return {
    //     id: uuidv1(),
    //     title: action.title,
    //     color: action.color,
    //     timestamp: action.timestamp,
    //     rating: 0
    //   }
    case C.ADD_COLORS:
        console.log(`add color ${action.payload}`);
        return Object.assign({}, state, {
          colors: state.colors.concat(action.payload)
        });
    // case C.RATE_COLORS:
    //   return (state.id !==action.id)?
    //     state:
    //       {
    //         ...state,
    //         rating: action.rating
    //       }
    // case C.REMOVE_COLORS:
    //   return state.filter(
    //     c=>c.id !==action.id)
    case C.REMOVE_COLORS:
      // console.log(typeof(state));
      const newArray = {...state}.colors.filter(x=>(x.id !==action.payload.id));
      const objectArray = {colors: newArray}
      // console.log(newArray);
      // console.log(objectArray);
      // console.log(state);
      // console.log(action.id);
      // console.log(state);
      return objectArray;

        
    
    default:
      return state;
  }
};



    // case C.RATE_COLORS:
    //   return (state.id !==action.id)?
    //     state:
    //       {
    //         ...state,
    //         rating: action.rating
    //       }
    // case C.REMOVE_COLORS:
    //   return state.filter(
    //     c=>c.id !==action.id)
export default rootReducer;