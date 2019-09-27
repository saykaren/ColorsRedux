import {createStore} from 'redux';
import rootReducer from '../reducers/ReducerIndex';

const store = createStore(rootReducer);
export default store;