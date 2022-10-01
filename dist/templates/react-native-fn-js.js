"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

const Component = ({ name }) => {
    const [age, setAge] = useState

    return (
        <TouchableOpacity onPress={() => setAge(age + 1)}>
            <Text>{name} is {age} years old.</Text>
        </TouchableOpacity>
    );
};

Component.defaultProps = {
    name: 'John Doe'
};

export default Component;

`;
