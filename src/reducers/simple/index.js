import * as actionTypes from './action-types';


export const simple = item => ({
    type: actionTypes.SIMPLE_ACTION,
    payload: item,
});