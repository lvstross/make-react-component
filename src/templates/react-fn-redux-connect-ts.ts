export default
`import React from 'react';
import { DispatchProp } from '@types/react-redux';
// As used here: https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types
import { RootState, AppDispatch } from './store';

export interface Props {
    name: string;
    count: number;
    increment: DispatchProp;
}

const Component = ({ name, count, increment }: Props) => {
    return (
        <div onPress={() => increment(count + 1)}>
            <p>{name} is {count} years old.</p>
        </div>
    );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
});

const mapStateToProps = (state: RootState) => ({
    count: state.count
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);

`;