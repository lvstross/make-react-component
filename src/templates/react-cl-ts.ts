export default `
import React, { Component } from 'react';

//props object
type Numbers={
    counter:number;
}

//state object
type Result={
    number:number;
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

export default Component;

`;