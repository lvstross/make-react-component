export default
`import React, { Component } from 'react';

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

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: 'INCREMENT' }),
});

const mapStateToProps = (state) => ({
    count: state.count
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);

`;