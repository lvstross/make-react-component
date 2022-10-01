export default
`import React, { useState } from 'react';

const Component = ({ name }) => {
    const [age, setAge] = useState

    return (
        <div onPress={() => setAge(age + 1)}>
            <p>{name} is {age} years old.</p>
        </div>
    );
};

Component.defaultProps = {
    name: 'John Doe'
};

export default Component;

`;