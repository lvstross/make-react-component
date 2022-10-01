"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import { createSelector } from 'reselect';

export const entitySelector = (state) => state.entity.list;

export const entityDataSelector = createSelector(
    entirySelector,
    list => list.data
);

export const entityFetchSelector = createSelector(
    entitySelector,
    list => list.isFetching
);

export const entityErrorSelector = createSelector(
    entitySelector,
    list => list.error
);
`;
