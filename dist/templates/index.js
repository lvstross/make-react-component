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
const types_1 = require("./types");
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
        platform: types_1.Platform.NATIVE,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.JS,
        template: react_native_fn_js_1.default,
        fileType: types_1.File.JSX
    },
    {
        alias: 'react-native-fn-ts',
        description: 'React Native functional component in Typescript',
        platform: types_1.Platform.NATIVE,
        shape: types_1.Shape.FUNCTION,
        syntax: types_1.Syntax.TS,
        template: react_native_fn_ts_1.default,
        fileType: types_1.File.TSX
    },
];