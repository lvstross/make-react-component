"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmPrompt = exports.defaults = exports.optionDefs = void 0;
const templates_1 = require("./templates");
exports.optionDefs = [
    { name: 'filter', alias: 'f', type: String, multiple: true },
    { name: 'template', alias: 't', type: String },
    { name: 'group', alias: 'g', type: String, multiple: true }
];
exports.defaults = {
    defaultTemplate: `[${templates_1.templateOptions[0].alias}]: ${templates_1.templateOptions[0].description}`
};
exports.confirmPrompt = [
    {
        name: 'okay',
        message: 'Is this OK?',
        type: 'confirm'
    }
];
