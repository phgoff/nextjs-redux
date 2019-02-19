import {
    INCREASE_NUMBER,
    DECREASE_NUMBER
} from '../types';

export const increaseNumber = () => dispatch => {
    dispatch({
        type: INCREASE_NUMBER,
        value: 1
    })
}

export const decreaseNumber = () => dispatch => {
    dispatch({
        type: DECREASE_NUMBER,
        value: 1
    })
}