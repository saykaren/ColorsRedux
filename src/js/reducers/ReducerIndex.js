import C from '../constants';
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
  console.log(`hello I am here in switch statement`);
  switch(action.type){
    case C.ADD_COLORS:
        // console.log(`add color ${action.payload}`);
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
    case C.REMOVE_COLORS: //works with input 09/27/2019
        console.log(`here in remove payload id is ${action.payload.id}`);
      const newArray = {...state}.colors.filter(x=>(x.id !==action.payload.id));
      console.log(newArray);
      const objectArray = {colors: newArray}
      return objectArray;       
    // case C.REMOVE_COLORS: //works with input
    //   // console.log(`payload is ${action.payload}`);
    //   const be = action.payload;
    //   console.log(`here ${be}`);
    //   // const newArray = {...state}.colors.filter(x=>(x.id !==action.payload.id));
    //   // const objectArray = {colors: newArray}
    //   return state;  
    
    default:
      return state;
  }
};


export default rootReducer;