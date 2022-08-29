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
const isNil_1 = __importDefault(require("lodash/isNil"));
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const command_line_args_1 = __importDefault(require("command-line-args"));
const utils_1 = require("./utils");
const templates_1 = require("./templates");
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    (0, utils_1.logHeading)('Welcome To Make React Component\n');
    const args = (0, command_line_args_1.default)([
        { name: 'template', alias: 't', type: String },
        { name: 'group', alias: 'g', type: String, multiple: true },
        { name: 'filter', alias: 'f', type: String, multiple: true }
    ]);
    const template = (args === null || args === void 0 ? void 0 : args.template) || '';
    const group = (args === null || args === void 0 ? void 0 : args.group) || [];
    const filters = (args === null || args === void 0 ? void 0 : args.filter) || [];
    if (template !== '') {
        const searchTemplateOption = (0, utils_1.getSearchedTemplateOption)(template);
        if (!(0, isNil_1.default)(searchTemplateOption)) {
            (0, utils_1.generateFile)(searchTemplateOption, template);
            (0, utils_1.logSuccess)(`${searchTemplateOption === null || searchTemplateOption === void 0 ? void 0 : searchTemplateOption.alias} generated!`);
        }
        else {
            (0, utils_1.logError)(`No template that matches ${template}. Try again.`);
        }
        process.exit();
    }
    if (!(0, isEmpty_1.default)(group)) {
        group.forEach((g) => {
            const groupTemplate = (0, utils_1.getSearchedTemplateOption)(g);
            if (!(0, isNil_1.default)(groupTemplate)) {
                (0, utils_1.generateFile)(groupTemplate, g);
                (0, utils_1.logSuccess)(`${g} generated!`);
            }
            else {
                (0, utils_1.logError)(`No template that matches ${g}. Try again.`);
            }
        });
        process.exit();
    }
    let choices = [];
    if (!(0, isEmpty_1.default)(filters)) {
        const filteredTemplateOptions = (0, utils_1.getFilteredTemplateOptions)(filters);
        choices = (0, utils_1.displayFilteredOptions)(filteredTemplateOptions);
    }
    else {
        choices = (0, utils_1.diplayTemplateOptions)();
    }
    while (true) {
        const selection = yield inquirer_1.default.prompt([
            {
                name: 'template',
                message: `Choose a template: \n\n`,
                choices,
                type: 'list',
                default: `[${templates_1.templateOptions[0].alias}]: ${templates_1.templateOptions[0].description}`,
                loop: false
            }
        ]);
        const output = (0, utils_1.parseAnswers)(selection);
        const selectedTemplate = (0, utils_1.getSearchedTemplateOption)(output || '');
        (0, utils_1.logAlert)('CODE:=============================================');
        (0, utils_1.logCode)((selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate.template) || '');
        (0, utils_1.logAlert)('CODE:=============================================');
        const confirmation = yield inquirer_1.default.prompt([
            {
                name: 'okay',
                message: 'Is this OK?',
                type: 'confirm'
            }
        ]);
        if (confirmation.okay) {
            (0, utils_1.generateFile)(selectedTemplate || templates_1.templateOptions[0]);
            (0, utils_1.logSuccess)(`${selectedTemplate === null || selectedTemplate === void 0 ? void 0 : selectedTemplate.alias} generated!`);
            break;
        }
        console.clear();
    }
}))();
