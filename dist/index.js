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
const helpers_1 = require("./helpers");
const utils_1 = require("./utils");
const constants_1 = require("./constants");
const templates_1 = require("./templates");
const options = (0, command_line_args_1.default)(constants_1.optionDefs);
const dirPath = (0, helpers_1.getDirPath)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.clear();
    console.log('options: ', options);
    console.log('Welcome To Make React Component\n');
    try {
        let selecting = true;
        while (selecting) {
            const answers = yield inquirer_1.default.prompt(constants_1.mainPrompts);
            const output = (0, utils_1.parseAnswers)(answers);
            const template = templates_1.templateOptions.find((opt) => opt.alias === output);
            console.log('CODE:=============================================');
            console.log(template === null || template === void 0 ? void 0 : template.template);
            console.log('CODE:=============================================');
            const confirm = yield inquirer_1.default.prompt(constants_1.confirmPrompt);
            if (confirm.okay) {
                (0, utils_1.generateFile)(template || templates_1.templateOptions[0]);
                console.log(`${template === null || template === void 0 ? void 0 : template.alias} generated!`);
                selecting = false;
                process.exit();
            }
            console.clear();
        }
    }
    catch (error) {
        throw Error(error);
    }
}))();
