import ReactFnJs from './react-fn-js';
import ReactClJs from './react-cl-js';
import ReactFnTs from './react-fn-ts';
import ReactClTs from './react-cl-ts';
import ReactFnReduxConnectJs from './react-fn-redux-connect-js';
import ReactClReduxConnectJs from './react-cl-redux-connect-js';
import ReactFnReduxConnectTs from './react-fn-redux-connect-ts';
import ReactClReduxConnectTs from './react-cl-redux-connect-ts';
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
    {
        alias: 'react-fn-redux-connect-js',
        description: 'Functional component with redux connect',
        platform: Platform.WEB,
        shape: Shape.FUNCTION,
        syntax: Syntax.JS,
        template: ReactFnReduxConnectJs,
        fileType: File.JSX
    },
    {
        alias: 'react-cl-redux-connect-js',
        description: 'Class component with redux connect',
        platform: Platform.WEB,
        shape: Shape.CLASS,
        syntax: Syntax.JS,
        template: ReactClReduxConnectJs,
        fileType: File.JSX
    },
    {
        alias: 'react-fn-redux-connect-ts',
        description: 'Functional component with redux connect',
        platform: Platform.WEB,
        shape: Shape.FUNCTION,
        syntax: Syntax.TS,
        template: ReactFnReduxConnectTs,
        fileType: File.TSX
    },
    {
        alias: 'react-cl-redux-connect-ts',
        description: 'Class component with redux connect',
        platform: Platform.WEB,
        shape: Shape.CLASS,
        syntax: Syntax.TS,
        template: ReactClReduxConnectTs,
        fileType: File.TSX
    },
];
