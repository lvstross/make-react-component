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
const command_line_args_1 = __importDefault(require("command-line-args"));
const inquirer_1 = __importDefault(require("inquirer"));
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const isNil_1 = __importDefault(require("lodash/isNil"));
const utils_1 = require("./utils");
const templates_1 = require("./templates");
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    (0, utils_1.logHeading)('Welcome To Make React Component\n');
    const args = (0, command_line_args_1.default)([
        { name: 'templates', alias: 't', type: String, multiple: true },
        { name: 'filter', alias: 'f', type: String, multiple: true }
    ]);
    const templates = (args === null || args === void 0 ? void 0 : args.templates) || [];
    const filters = (args === null || args === void 0 ? void 0 : args.filter) || [];
    if (!(0, isEmpty_1.default)(templates)) {
        templates.forEach((tempOptAlias) => {
            const groupTemplate = (0, utils_1.getSearchedTemplateOption)(tempOptAlias);
            if (!(0, isNil_1.default)(groupTemplate)) {
                (0, utils_1.generateFile)(groupTemplate, tempOptAlias);
                (0, utils_1.logSuccess)(`${tempOptAlias} generated!`);
            }
            else {
                (0, utils_1.logError)(`No template that matches ${tempOptAlias}. Try again.`);
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
        const templateAlias = (0, utils_1.parseAnswers)(selection);
        const selectedTemplateOption = (0, utils_1.getSearchedTemplateOption)(templateAlias || '');
        (0, utils_1.logAlert)('CODE:=============================================');
        (0, utils_1.logCode)((selectedTemplateOption === null || selectedTemplateOption === void 0 ? void 0 : selectedTemplateOption.template) || '');
        (0, utils_1.logAlert)('CODE:=============================================');
        const confirmation = yield inquirer_1.default.prompt([
            {
                name: 'okay',
                message: 'Is this OK?',
                type: 'confirm'
            }
        ]);
        const name = yield inquirer_1.default.prompt([
            {
                name: 'filename',
                message: 'What would you like to name your file?',
                default: (selectedTemplateOption === null || selectedTemplateOption === void 0 ? void 0 : selectedTemplateOption.defaultFileName) || 'component',
                type: 'input'
            }
        ]);
        if (confirmation.okay) {
            (0, utils_1.generateFile)(selectedTemplateOption || templates_1.templateOptions[0], name.filename);
            (0, utils_1.logSuccess)(`${selectedTemplateOption === null || selectedTemplateOption === void 0 ? void 0 : selectedTemplateOption.alias} generated!`);
            break;
        }
        console.clear();
    }
}))();
