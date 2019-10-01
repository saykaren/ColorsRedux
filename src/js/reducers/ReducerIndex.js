import C from '../constants';

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
  switch(action.type){
    case C.ADD_COLORS:
        return Object.assign({}, state, {
          colors: state.colors.concat(action.payload)
        });
    case C.REMOVE_COLORS: 
        console.log(`here in remove payload id is ${action.payload}`);
      const newArray = {...state}.colors.filter(x=>(x.id !==action.payload.id));
      console.log(newArray);
      const objectArray = {colors: newArray}
      return objectArray;       
    case C.UP_RATING:
      const newArrayRating = {...state}.colors.map(x=>(x.id===action.payload.id)? {...x, rating: x.rating+=1}: x);
      const objectArrayRating = {colors: newArrayRating}
      return objectArrayRating;  
    case C.DOWN_RATING:
      const newArrayRatingDown = {...state}.colors.map(x=>(x.id===action.payload.id)? {...x, rating: x.rating-=1}: x);
      const objectArrayRatingDown = {colors: newArrayRatingDown}
      return objectArrayRatingDown; 
    default:
      return state;
  }
};

export default rootReducer;