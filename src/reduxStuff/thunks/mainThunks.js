import { updateFirstArr, updateSecondArr } from '../actions/actions.js';

export function updateBothArr(firstArr, secondArr) {
    return (dispatch, getState) => {
        dispatch(updateFirstArr({firstArr}));
        dispatch(updateSecondArr({secondArr}));
    };
}
