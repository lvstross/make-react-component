"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.templateOptions = void 0;
const react_fn_js_1 = __importDefault(require("./react-fn-js"));
const react_cl_js_1 = __importDefault(require("./react-cl-js"));
const react_fn_ts_1 = __importDefault(require("./react-fn-ts"));
const react_cl_ts_1 = __importDefault(require("./react-cl-ts"));
const react_fn_redux_connect_js_1 = __importDefault(require("./react-fn-redux-connect-js"));
const react_cl_redux_connect_js_1 = __importDefault(require("./react-cl-redux-connect-js"));
const react_fn_redux_connect_ts_1 = __importDefault(require("./react-fn-redux-connect-ts"));
const react_cl_redux_connect_ts_1 = __importDefault(require("./react-cl-redux-connect-ts"));
const react_native_fn_js_1 = __importDefault(require("./react-native-fn-js"));
const react_native_fn_ts_1 = __importDefault(require("./react-native-fn-ts"));
const react_redux_actions_js_1 = __importDefault(require("./react-redux-actions-js"));
const react_redux_legacy_js_1 = __importDefault(require("./react-redux-legacy-js"));
const react_redux_reducers_js_1 = __importDefault(require("./react-redux-reducers-js"));
const react_redux_reducers_ts_1 = __importDefault(require("./react-redux-reducers-ts"));
const react_redux_reselect_js_1 = __importDefault(require("./react-redux-reselect-js"));
const react_redux_selectors_js_1 = __importDefault(require("./react-redux-selectors-js"));
const react_redux_selectors_test_js_1 = __importDefault(require("./react-redux-selectors-test-js"));
const react_redux_selectors_ts_1 = __importDefault(require("./react-redux-selectors-ts"));
const react_redux_toolkit_js_1 = __importDefault(require("./react-redux-toolkit-js"));
const react_redux_toolkit_ts_1 = __importDefault(require("./react-redux-toolkit-ts"));
const react_test_lib_jest_js_1 = __importDefault(require("./react-test-lib-jest-js"));
const types_1 = require("../types");
exports.templateOptions = [
    {
        alias: 'react-fn-js',
        description: 'Basic functional component in Javascript',
        platform: types_1.Platform.WEB,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.JS,
        template: react_fn_js_1.default,
        fileType: types_1.File.JSX
    },
    {
        alias: 'react-cl-js',
        description: 'Basic class component in Javascript',
        platform: types_1.Platform.WEB,
        shape: types_1.Shape.CLASS,
        syntax: types_1.Syntax.JS,
        template: react_cl_js_1.default,
        fileType: types_1.File.JSX
    },
    {
        alias: 'react-fn-ts',
        description: 'Basic functional component in Typescript',
        platform: types_1.Platform.WEB,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.TS,
        template: react_fn_ts_1.default,
        fileType: types_1.File.TSX
    },
    {
        alias: 'react-cl-ts',
        description: 'Basic class component in Typescript',
        platform: types_1.Platform.WEB,
        shape: types_1.Shape.CLASS,
        syntax: types_1.Syntax.TS,
        template: react_cl_ts_1.default,
        fileType: types_1.File.TSX
    },
    {
        alias: 'react-fn-redux-connect-js',
        description: 'Functional component with redux connect',
        platform: types_1.Platform.WEB,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.JS,
        template: react_fn_redux_connect_js_1.default,
        fileType: types_1.File.JSX
    },
    {
        alias: 'react-cl-redux-connect-js',
        description: 'Class component with redux connect',
        platform: types_1.Platform.WEB,
        shape: types_1.Shape.CLASS,
        syntax: types_1.Syntax.JS,
        template: react_cl_redux_connect_js_1.default,
        fileType: types_1.File.JSX
    },
    {
        alias: 'react-fn-redux-connect-ts',
        description: 'Functional component with redux connect',
        platform: types_1.Platform.WEB,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.TS,
        template: react_fn_redux_connect_ts_1.default,
        fileType: types_1.File.TSX
    },
    {
        alias: 'react-cl-redux-connect-ts',
        description: 'Class component with redux connect',
        platform: types_1.Platform.WEB,
        shape: types_1.Shape.CLASS,
        syntax: types_1.Syntax.TS,
        template: react_cl_redux_connect_ts_1.default,
        fileType: types_1.File.TSX
    },
    {
        alias: 'react-native-fn-js',
        description: 'React Native functional component in Javascript',
        platform: types_1.Platform.MOBILE,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.JS,
        template: react_native_fn_js_1.default,
        fileType: types_1.File.JSX
    },
    {
        alias: 'react-native-fn-ts',
        description: 'React Native functional component in Typescript',
        platform: types_1.Platform.MOBILE,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.TS,
        template: react_native_fn_ts_1.default,
        fileType: types_1.File.TSX
    },
    {
        alias: 'react-redux-actions-js',
        description: 'Redux fetch action file',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.MIXED,
        syntax: types_1.Syntax.JS,
        template: react_redux_actions_js_1.default,
        fileType: types_1.File.JS,
        defaultFileName: 'actions'
    },
    {
        alias: 'react-redux-legacy-js',
        description: 'Legacy redux actions, reducers in Javascript',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.JS,
        template: react_redux_legacy_js_1.default,
        fileType: types_1.File.JS,
        defaultFileName: 'reducers'
    },
    {
        alias: 'react-redux-reducers-js',
        description: 'Redux reducers file',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.MIXED,
        syntax: types_1.Syntax.JS,
        template: react_redux_reducers_js_1.default,
        fileType: types_1.File.JS,
        defaultFileName: 'reducers'
    },
    {
        alias: 'react-redux-reducers-ts',
        description: 'Redux reducers file in Typescript',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.MIXED,
        syntax: types_1.Syntax.TS,
        template: react_redux_reducers_ts_1.default,
        fileType: types_1.File.TS,
        defaultFileName: 'reducers'
    },
    {
        alias: 'react-redux-reselect-js',
        description: 'Redux reselect example in Javascript',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.JS,
        template: react_redux_reselect_js_1.default,
        fileType: types_1.File.JS,
        defaultFileName: 'selectors'
    },
    {
        alias: 'react-redux-selectors-js',
        description: 'Redux selectors file',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.MIXED,
        syntax: types_1.Syntax.JS,
        template: react_redux_selectors_js_1.default,
        fileType: types_1.File.JS,
        defaultFileName: 'selectors'
    },
    {
        alias: 'react-redux-selectors-test-js',
        description: 'Test file for redux selectors',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.MIXED,
        syntax: types_1.Syntax.JS,
        template: react_redux_selectors_test_js_1.default,
        fileType: types_1.File.JS,
        defaultFileName: 'selectors.test'
    },
    {
        alias: 'react-redux-selectors-ts',
        description: 'Redux selectors file in Typescript',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.MIXED,
        syntax: types_1.Syntax.TS,
        template: react_redux_selectors_ts_1.default,
        fileType: types_1.File.TS,
        defaultFileName: 'selectors'
    },
    {
        alias: 'react-redux-toolkit-js',
        description: 'Redux toolkit actions, reducers slice in Javascript',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.JS,
        template: react_redux_toolkit_js_1.default,
        fileType: types_1.File.JS,
        defaultFileName: 'slice'
    },
    {
        alias: 'react-redux-toolkit-ts',
        description: 'Redux toolkit actions, reducers slice in Typescript',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.TS,
        template: react_redux_toolkit_ts_1.default,
        fileType: types_1.File.TS,
        defaultFileName: 'slice'
    },
    {
        alias: 'react-test-lib-jest-js',
        description: 'React testing-library example with Jest',
        platform: types_1.Platform.SHARED,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.JS,
        template: react_test_lib_jest_js_1.default,
        fileType: types_1.File.JS,
        defaultFileName: 'component.test'
    }
];
