"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `export const GET_LIST = 'ENTITY.GET_LIST';
export const GET_LIST_SUCCESS = 'ENTITY.GET_LIST_SUCCESS';
export const GET_LIST_FAIL = 'ENTITY.GET_LIST_FAIL';

export const getEntityList = () => async (dispatch) => {
    const response = await fetch('https://host/entity', { method: 'GET' });
    const entity = await response.json();

    if (entity.error) {
        dispatch({ type: GET_LIST_FAIL, payload: entity.error });
        return;
    }
    dispatch({ type: GET_LIST_SUCCESS, payload: entity.data });
};
`;
