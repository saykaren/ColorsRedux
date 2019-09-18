// import addArticle from '../actions/index';
import C from '../constants';

const initialState = {
  articles: []
};

function rootReducer(state = initialState, action){
  if (action.type === C.ADD_ARTICLE){
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });    
  }
  return state;
};

export default rootReducer;