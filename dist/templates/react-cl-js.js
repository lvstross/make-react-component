"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
import React, { Component } from 'react';

class Component extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <p>{this.props.name}</p>
        );
    };
}

Component.defaultProps = {
    name: 'John Doe'
};

export default Component;

`;
