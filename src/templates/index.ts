import ReactFnJs from './react-fn-js';
import ReactClJs from './react-cl-js';
import ReactFnTs from './react-fn-ts';
import ReactClTs from './react-cl-ts';
import { TemplateOption, Platform, Shape, Syntax, File } from './types';

export const templateOptions: TemplateOption[] = [
    {
        alias: 'react-fn-js',
        description: 'Basic functional component in Javascript.',
        platform: Platform.WEB,
        shape: Shape.FUNCTION,
        syntax: Syntax.JS,
        template: ReactFnJs,
        fileType: File.JSX
    },
    {
        alias: 'react-cl-js',
        description: 'Basic class component in Javascript.',
        platform: Platform.WEB,
        shape: Shape.CLASS,
        syntax: Syntax.JS,
        template: ReactClJs,
        fileType: File.JSX
    },
    {
        alias: 'react-fn-ts',
        description: 'Basic functional component in Typescript.',
        platform: Platform.WEB,
        shape: Shape.FUNCTION,
        syntax: Syntax.TS,
        template: ReactFnTs,
        fileType: File.TSX
    },
    {
        alias: 'react-cl-ts',
        description: 'Basic class component in Typescript.',
        platform: Platform.WEB,
        shape: Shape.CLASS,
        syntax: Syntax.TS,
        template: ReactClTs,
        fileType: File.TSX
    },
];
