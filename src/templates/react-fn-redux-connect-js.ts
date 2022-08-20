export default `
import React from 'react';
import { connect } from 'react-redux';

const Component = ({ name }) => {
    const [age, setAge] = useState

    return (
        <div onPress={() => setAge(age += 1)}>
            <p>{name} is {age} years old.</p>
        </div>
    );
};

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