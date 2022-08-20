"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = `
import React, { useState } from 'react';

export interface Props {
    name: string;
}

const Component = ({ name }: Props) => {
    const [age, setAge] = useState<number>(30);

    return (
        <div onPress={() => setAge(age += 1)}>
            <p>{name} is {age} years old.</p>
        </div>
    );
};

export default Component;

`;
