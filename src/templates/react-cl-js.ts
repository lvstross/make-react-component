export default `
import React, { Component } from 'react';

class Component extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <p>{name}</p>
        );
    };
}

Component.defaultProps = {
    name: 'John Doe'
};

export default Component;

`;