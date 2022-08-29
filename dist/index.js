#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const command_line_args_1 = __importDefault(require("command-line-args"));
const isNil_1 = __importDefault(require("lodash/isNil"));
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const helpers_1 = require("./helpers");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const templates_1 = require("./templates");
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    console.log('Welcome To Make React Component\n');
    const options = (0, command_line_args_1.default)(constants_1.optionDefs);
    const dirPath = (0, helpers_1.getDirPath)();
    const filters = (options === null || options === void 0 ? void 0 : options.filter) || [];
    const template = (options === null || options === void 0 ? void 0 : options.template) || '';
    const group = (options === null || options === void 0 ? void 0 : options.group) || [];
    let choices = [];
    if (!(0, isEmpty_1.default)(filters)) {
        const filteredTemplateOptions = (0, utils_1.getFilteredTemplateOptions)(filters);
        choices = (0, utils_1.displayFilteredOptions)(filteredTemplateOptions);
    }
    else {
        choices = (0, utils_1.diplayTemplateOptions)();
    }
    if (template !== '') {
        const searchTemplateOption = (0, utils_1.getSearchedTemplateOption)(template);
        if (!(0, isNil_1.default)(searchTemplateOption)) {
            (0, utils_1.generateFile)(searchTemplateOption, template);
            console.log(`${searchTemplateOption === null || searchTemplateOption === void 0 ? void 0 : searchTemplateOption.alias} generated!`);
        }
        else {
            console.log(`Couldn't find ${template}? Try again.`);
        }
        process.exit();
    }
    if (!(0, isEmpty_1.default)(group)) {
        group.forEach((g) => {
            const groupTemplate = (0, utils_1.getSearchedTemplateOption)(g);
            if (!(0, isNil_1.default)(groupTemplate)) {
                (0, utils_1.generateFile)(groupTemplate, g);
                console.log(`${g} generated!`);
            }
            else {
                console.log(`No template match for ${g}`);
            }
        });
        process.exit();
    }
    try {
        while (true) {
            const answers = yield inquirer_1.default.prompt([
                {
                    name: 'template',
                    message: `Choose a template: \n\n`,
                    choices,
                    type: 'list',
                    default: constants_1.defaults.defaultTemplate,
                    loop: false
                }
            ]);
            const output = (0, utils_1.parseAnswers)(answers);
            const selectedTemplate = (0, utils_1.getSearchedTemplateOption)(output || '');
            console.log('CODE:=============================================');
            console.log(selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate.template);
            console.log('CODE:=============================================');
            const confirm = yield inquirer_1.default.prompt(constants_1.confirmPrompt);
            if (confirm.okay) {
                (0, utils_1.generateFile)(selectedTemplate || templates_1.templateOptions[0]);
                console.log(`${selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate.alias} generated!`);
                break;
            }
            console.clear();
        }
    }
    catch (error) {
        throw Error(error);
    }
}))();
