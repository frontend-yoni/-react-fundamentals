import Immutable, { fromJS } from 'immutable';

const initialState = fromJS({
    secondArr: [],
});

export default function secondReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'updateSecondArr':
            return updateSecondArr(state, payload);
        default:
            return state;
    }
}

function updateSecondArr(state, { secondArr }) {
    return state.setIn(['secondArr'], fromJS(secondArr));
}