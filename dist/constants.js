"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmPrompt = exports.mainPrompts = exports.defaults = exports.optionDefs = void 0;
const helpers_1 = require("./helpers");
exports.optionDefs = [
    { name: 'yes', alias: 'y', type: Boolean, defaultValue: false },
];
exports.defaults = {
    pkgName: (0, helpers_1.getDirName)(),
    version: '1.0.0',
    description: '',
    entryPoint: 'index.js',
    testCommand: 'echo "Error: no test specified" && exit 1',
    gitRepo: '',
    keywords: '',
    author: '',
    license: 'ISC'
};
exports.mainPrompts = [
    {
        name: 'pkgName',
        message: 'package name:',
        default: exports.defaults.pkgName
    },
    {
        name: 'version',
        message: 'version:',
        default: exports.defaults.version
    },
    {
        name: 'description',
        message: 'description: ',
        default: exports.defaults.description
    },
    {
        name: 'entryPoint',
        message: 'entry point:',
        default: exports.defaults.entryPoint
    },
    {
        name: 'testCommand',
        message: 'test command: ',
        default: exports.defaults.testCommand
    },
    {
        name: 'gitRepo',
        message: 'git repository: ',
        default: exports.defaults.gitRepo
    },
    {
        name: 'keywords',
        message: 'keywords: ',
        default: exports.defaults.keywords
    },
    {
        name: 'author',
        message: 'author: ',
        default: exports.defaults.keywords
    },
    {
        name: 'license',
        message: 'license:',
        default: exports.defaults.license
    }
];
exports.confirmPrompt = [
    {
        name: 'okay',
        message: 'Is this OK?',
        type: 'confirm'
    }
];
