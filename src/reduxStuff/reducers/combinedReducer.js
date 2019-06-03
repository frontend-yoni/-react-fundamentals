import { combineReducers } from 'redux-immutable';
import firstReducer from './firstReducer';
import secondReducer from './secondReducer';


const combinedReducer = combineReducers({
	first: firstReducer,
	second: secondReducer
});

export default combinedReducer
