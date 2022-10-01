"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import * as selectors from './selectors';

describe('selectors', () => {
    const state = {
        entity: {
            list: {
                data: null,
                isFetching: false,
                error: null
            }
        }
    };
    it('should return entity list', () => {
        expect(selectors.entitySelector(state)).toEqual(state.entity.list);
    });
    it('should return entity list data', () => {
        expect(selectors.entityDataSelector(state)).toEqual(state.entity.list.data);
    });
    it('should return entity list isFetching', () => {
        expect(selectors.entityFetchSelector(state)).toEqual(state.entity.list.isFetching);
    });
    it('should return entity list error', () => {
        expect(selectors.entityErrorSelector(state)).toEqual(state.entity.list.error);
    });
});
`;
