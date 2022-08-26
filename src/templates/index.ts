import reactFnJs from './react-fn-js';
import reactClJs from './react-cl-js';
import reactFnTs from './react-fn-ts';
import reactClTs from './react-cl-ts';
import reactFnReduxConnectJs from './react-fn-redux-connect-js';
import reactClReduxConnectJs from './react-cl-redux-connect-js';
import reactFnReduxConnectTs from './react-fn-redux-connect-ts';
import reactClReduxConnectTs from './react-cl-redux-connect-ts';
import reactNativeFnJs from './react-native-fn-js';
import reactNativeFnTs from './react-native-fn-ts';
import reactReduxLegacyJs from './react-redux-legacy-js';
import reactReduxToolkitJs from './react-redux-toolkit-js';
import reactReduxReselectJs from './react-redux-reselect-js';
import { TemplateOption, Platform, Shape, Syntax, File } from './types';

export const templateOptions: TemplateOption[] = [
    {
        alias: 'react-fn-js',
        description: 'Basic functional component in Javascript',
        platform: Platform.WEB,
        shape: Shape.FUNCTION,
        syntax: Syntax.JS,
        template: reactFnJs,
        fileType: File.JSX
    },
    {
        alias: 'react-cl-js',
        description: 'Basic class component in Javascript',
        platform: Platform.WEB,
        shape: Shape.CLASS,
        syntax: Syntax.JS,
        template: reactClJs,
        fileType: File.JSX
    },
    {
        alias: 'react-fn-ts',
        description: 'Basic functional component in Typescript',
        platform: Platform.WEB,
        shape: Shape.FUNCTION,
        syntax: Syntax.TS,
        template: reactFnTs,
        fileType: File.TSX
    },
    {
        alias: 'react-cl-ts',
        description: 'Basic class component in Typescript',
        platform: Platform.WEB,
        shape: Shape.CLASS,
        syntax: Syntax.TS,
        template: reactClTs,
        fileType: File.TSX
    },
    {
        alias: 'react-fn-redux-connect-js',
        description: 'Functional component with redux connect',
        platform: Platform.WEB,
        shape: Shape.FUNCTION,
        syntax: Syntax.JS,
        template: reactFnReduxConnectJs,
        fileType: File.JSX
    },
    {
        alias: 'react-cl-redux-connect-js',
        description: 'Class component with redux connect',
        platform: Platform.WEB,
        shape: Shape.CLASS,
        syntax: Syntax.JS,
        template: reactClReduxConnectJs,
        fileType: File.JSX
    },
    {
        alias: 'react-fn-redux-connect-ts',
        description: 'Functional component with redux connect',
        platform: Platform.WEB,
        shape: Shape.FUNCTION,
        syntax: Syntax.TS,
        template: reactFnReduxConnectTs,
        fileType: File.TSX
    },
    {
        alias: 'react-cl-redux-connect-ts',
        description: 'Class component with redux connect',
        platform: Platform.WEB,
        shape: Shape.CLASS,
        syntax: Syntax.TS,
        template: reactClReduxConnectTs,
        fileType: File.TSX
    },
    {
        alias: 'react-native-fn-js',
        description: 'React Native functional component in Javascript',
        platform: Platform.NATIVE,
        shape: Shape.FUNCTION,
        syntax: Syntax.JS,
        template: reactNativeFnJs,
        fileType: File.JSX
    },
    {
        alias: 'react-native-fn-ts',
        description: 'React Native functional component in Typescript',
        platform: Platform.NATIVE,
        shape: Shape.FUNCTION,
        syntax: Syntax.TS,
        template: reactNativeFnTs,
        fileType: File.TSX
    },
    {
        alias: 'react-redux-legacy-js',
        description: 'Legacy redux actions, reducers in Javascript',
        platform: Platform.SHARED,
        shape: Shape.FUNCTION,
        syntax: Syntax.JS,
        template: reactReduxLegacyJs,
        fileType: File.JS
    },
    {
        alias: 'react-redux-toolkit-js',
        description: 'Redux toolkit actions, reducers slice in Javascript',
        platform: Platform.SHARED,
        shape: Shape.FUNCTION,
        syntax: Syntax.JS,
        template: reactReduxToolkitJs,
        fileType: File.JS
    },
    {
        alias: 'react-redux-reselect-js',
        description: 'Redux reselect example in Javascript',
        platform: Platform.SHARED,
        shape: Shape.FUNCTION,
        syntax: Syntax.JS,
        template: reactReduxReselectJs,
        fileType: File.JS
    },
];
