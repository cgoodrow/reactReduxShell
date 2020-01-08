import { createReducer } from '../../store/utils';
import * as actionType from './action-types';

const intitialValues = {};

export default createReducer(intitialValues, {
    [actionType.SIMPLE_ACTION]: (state, action) => ({ ...state, ...action.payload }),
});