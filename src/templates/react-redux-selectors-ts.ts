export default
`import { createSelector } from 'reselect';
import { RootState, EntityList } from './types';

export const entitySelector = (state: RootState): EntityList => state.entity.list;

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