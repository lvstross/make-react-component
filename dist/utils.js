"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSearchedTemplateOption = exports.displayFilteredOptions = exports.diplayTemplateOptions = exports.getFilteredTemplateOptions = exports.generateFile = exports.parseTemplateOption = exports.parseAnswers = void 0;
const fs_1 = require("fs");
const isEmpty_1 = __importDefault(require("lodash/isEmpty"));
const helpers_1 = require("./helpers");
const templates_1 = require("./templates");
const theme_1 = require("./theme");
const parseAnswers = (answers) => {
    return (0, exports.parseTemplateOption)(answers.template);
};
exports.parseAnswers = parseAnswers;
const parseTemplateOption = (tempOpt) => {
    const betweenSquareBrackets = /\[(.+?)\]/;
    const captured = tempOpt.match(betweenSquareBrackets);
    return captured === null || captured === void 0 ? void 0 : captured[1];
};
exports.parseTemplateOption = parseTemplateOption;
const generateFile = (temp, fileName) => {
    if (!(0, isEmpty_1.default)(temp.alias)) {
        const dirPath = (0, helpers_1.getDirPath)();
        (0, fs_1.writeFileSync)(`${dirPath}/${fileName || 'Component'}.${temp.fileType}`, temp.template);
    }
    else {
        (0, theme_1.logError)('No template match');
    }
};
exports.generateFile = generateFile;
const getFilteredTemplateOptions = (filters) => {
    return templates_1.templateOptions.filter((temp) => {
        const platform = temp.platform.toLowerCase();
        const shape = temp.shape.toLowerCase();
        const syntax = temp.syntax.toLowerCase();
        const file = temp.fileType.toLowerCase();
        if (filters.includes(platform) ||
            filters.includes(shape) ||
            filters.includes(syntax) ||
            filters.includes(file)) {
            return true;
        }
        return false;
    });
};
exports.getFilteredTemplateOptions = getFilteredTemplateOptions;
const diplayTemplateOptions = () => {
    return templates_1.templateOptions.map((opt) => {
        return `[${opt.alias}]: ${opt.description}`;
    });
};
exports.diplayTemplateOptions = diplayTemplateOptions;
const displayFilteredOptions = (temp) => {
    return temp.map((opt) => {
        return `[${opt.alias}]: ${opt.description}`;
    });
};
exports.displayFilteredOptions = displayFilteredOptions;
const getSearchedTemplateOption = (temp) => {
    return templates_1.templateOptions.find((t) => {
        return t.alias === temp;
    });
};
exports.getSearchedTemplateOption = getSearchedTemplateOption;
