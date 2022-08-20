"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
import React, { useState } from 'react';
import { DispatchProp } from '@types/react-redux';
// As used here: https://redux.js.org/usage/usage-with-typescript#define-root-state-and-dispatch-types
import { RootState, AppDispatch } from './store';

//props object
type Numbers={
    counter: number;
    increment: DispatchProp;
}

//state object
type Result={
    number: number;
}

class Component extends Component<Numbers,Result> {
    state: Result = {
        number: 0,
    };

    componentDidMount() {
        this.setState((state) => ({
            number: state.number + this.props.counter,
        }));
    }
 
    render() {
        return (
            <div>
                Hello World{this.props.counter} - {this.state.number}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
});

const mapStateToProps = (state: RootState) => ({
    count: state.count
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);

`;
