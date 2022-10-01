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
import reactReduxActionsJs from './react-redux-actions-js';
import reactReduxLegacyJs from './react-redux-legacy-js';
import reactReduxReducersJs from './react-redux-reducers-js';
import reactReduxReducersTs from './react-redux-reducers-ts';
import reactReduxReselectJs from './react-redux-reselect-js';
import reactReduxSelectorsJs from './react-redux-selectors-js';
import reactReduxSelectorsTestJs from './react-redux-selectors-test-js';
import reactReduxSelectorsTs from './react-redux-selectors-ts';
import reactReduxToolkitJs from './react-redux-toolkit-js';
import reactReduxToolkitTs from './react-redux-toolkit-ts';
import reactTestLibJestJs from './react-test-lib-jest-js';
import { TemplateOption, Platform, Shape, Syntax, File } from '../types';

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
        platform: Platform.MOBILE,
        shape: Shape.FUNCTION,
        syntax: Syntax.JS,
        template: reactNativeFnJs,
        fileType: File.JSX
    },
    {
        alias: 'react-native-fn-ts',
        description: 'React Native functional component in Typescript',
        platform: Platform.MOBILE,
        shape: Shape.FUNCTION,
        syntax: Syntax.TS,
        template: reactNativeFnTs,
        fileType: File.TSX
    },
    {
        alias: 'react-redux-actions-js',
        description: 'Redux fetch action file',
        platform: Platform.SHARED,
        shape: Shape.MIXED,
        syntax: Syntax.JS,
        template: reactReduxActionsJs,
        fileType: File.JS,
        defaultFileName: 'actions'
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
        alias: 'react-redux-reducers-js',
        description: 'Redux reducers file',
        platform: Platform.SHARED,
        shape: Shape.MIXED,
        syntax: Syntax.JS,
        template: reactReduxReducersJs,
        fileType: File.JS,
        defaultFileName: 'reducers'
    },
    {
        alias: 'react-redux-reducers-ts',
        description: 'Redux reducers file in Typescript',
        platform: Platform.SHARED,
        shape: Shape.MIXED,
        syntax: Syntax.TS,
        template: reactReduxReducersTs,
        fileType: File.TS,
        defaultFileName: 'reducers'
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
    {
        alias: 'react-redux-selectors-js',
        description: 'Redux selectors file',
        platform: Platform.SHARED,
        shape: Shape.MIXED,
        syntax: Syntax.JS,
        template: reactReduxSelectorsJs,
        fileType: File.JS,
        defaultFileName: 'selectors'
    },
    {
        alias: 'react-redux-selectors-test-js',
        description: 'Test file for redux selectors',
        platform: Platform.SHARED,
        shape: Shape.MIXED,
        syntax: Syntax.JS,
        template: reactReduxSelectorsTestJs,
        fileType: File.JS,
        defaultFileName: 'selectors.test'
    },
    {
        alias: 'react-redux-selectors-ts',
        description: 'Redux selectors file in Typescript',
        platform: Platform.SHARED,
        shape: Shape.MIXED,
        syntax: Syntax.TS,
        template: reactReduxSelectorsTs,
        fileType: File.TS,
        defaultFileName: 'selectors'
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
        alias: 'react-redux-toolkit-ts',
        description: 'Redux toolkit actions, reducers slice in Typescript',
        platform: Platform.SHARED,
        shape: Shape.FUNCTION,
        syntax: Syntax.TS,
        template: reactReduxToolkitTs,
        fileType: File.TS
    },
    {
        alias: 'react-test-lib-jest-js',
        description: 'React testing-library example with Jest',
        platform: Platform.SHARED,
        shape: Shape.FUNCTION,
        syntax: Syntax.JS,
        template: reactTestLibJestJs,
        fileType: File.JS,
        defaultFileName: 'component.test'
    }
];
