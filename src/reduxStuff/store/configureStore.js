import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducer from '../reducers/combinedReducer.js';

const middleware = [thunkMiddleware, promiseMiddleware];

const configureStore = () => (
	createStore(
		combinedReducer,
		composeWithDevTools(
			applyMiddleware(...middleware)
		)
	)
);

export default configureStore
