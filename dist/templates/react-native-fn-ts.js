"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

export interface Props {
    name: string;
}

const Component = ({ name }: Props) => {
    const [age, setAge] = useState<number>(30);

    return (
        <TouchableOpacity onPress={() => setAge(age + 1)}>
            <Text>{name} is {age} years old.</Text>
        </TouchableOpacity>
    );
};

export default Component;

`;
