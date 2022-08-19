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
const options = (0, command_line_args_1.default)(constants_1.optionDefs);
const dirPath = (0, helpers_1.getDirPath)();
if (options.yes) {
    const pkgJSON = (0, utils_1.parseAnswers)(constants_1.defaults);
    (0, utils_1.writePackageJson)(pkgJSON);
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.
See 'npm help json' for definitive documentation on these fields
and exactly what they do.
Use 'npm install <pkg>' afterwards to install a package and
save it as a dependency in the package.json file.
Press ^C at any time to quit.
`);
    try {
        const answers = yield inquirer_1.default.prompt(constants_1.mainPrompts);
        const pkgJSON = (0, utils_1.parseAnswers)(answers);
        console.log(`
About to write to ${dirPath}/package.json:
${pkgJSON}
`);
        const confirm = yield inquirer_1.default.prompt(constants_1.confirmPrompt);
        if (confirm.okay) {
            (0, utils_1.writePackageJson)(pkgJSON);
        }
    }
    catch (error) {
        throw Error(error);
    }
}))();
