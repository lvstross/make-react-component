"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import { createReducer } from '@reduxjs/toolkit';
import * as actions from './actions';

export const initialState = {
    data: null,
    error: null,
    isFetching: false
};

const entityReducer = createReducer(initialState, {
    [actions.GET_LIST]: (state, action) => {
        state.isFetching = true;
        state.error = null;
    },
    [actions.GET_LIST_SUCCESS]: (state, action) => {
        state.data = action.payload.data;
        state.isFetching = false;
    },
    [actions.GET_LIST_FAIL]: (state, action) => {
        state.isFetching = false;
        state.error = action.error;
    }
});

export default entityReducer;
`;
