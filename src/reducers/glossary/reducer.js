﻿import { createReducer } from '../../store/utils';
import * as actionType from './action-types';

const intitialValues = {};

export default createReducer(intitialValues, {
    [actionType.GET_GLOSSARY_ITEMS]: (state, action) => ({ ...state, ...action.payload }),
});