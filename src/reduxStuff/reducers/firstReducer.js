import Immutable, { fromJS } from 'immutable';

const initialState = fromJS({
	firstArr: [],
});

export default function firstReducer(state = initialState, { type, payload }) {
	switch (type) {
		case 'updateFirstArr':
			return updateFirstArr(state, payload);
		default:
			return state;
	}
}

function updateFirstArr(state, { firstArr }) {
	//return Object.assign({}, state, {firstArr});
	return state.setIn(['firstArr'], fromJS(firstArr));
}