"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmPrompt = exports.mainPrompts = exports.defaults = exports.optionDefs = void 0;
const templates_1 = require("./templates");
exports.optionDefs = [
    { name: 'filter', alias: 'f', type: String, multiple: true },
];
exports.defaults = {
    defaultTemplate: `[${templates_1.templateOptions[0].alias}]: ${templates_1.templateOptions[0].description}`
};
const diplayTemplateOptions = () => {
    return templates_1.templateOptions.map((opt) => {
        return `[${opt.alias}]: ${opt.description}`;
    });
};
exports.mainPrompts = [
    {
        name: 'template',
        message: `Choose a template: \n\n`,
        choices: diplayTemplateOptions(),
        type: 'list',
        default: exports.defaults.defaultTemplate,
        loop: false
    }
];
exports.confirmPrompt = [
    {
        name: 'okay',
        message: 'Is this OK?',
        type: 'confirm'
    }
];
