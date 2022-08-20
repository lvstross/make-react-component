"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFile = exports.parseTemplateOption = exports.parseAnswers = void 0;
const fs_1 = require("fs");
const helpers_1 = require("./helpers");
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
const generateFile = (temp) => {
    if (temp.alias) {
        const dirPath = (0, helpers_1.getDirPath)();
        (0, fs_1.writeFileSync)(`${dirPath}/Component.${temp.fileType}`, temp.template);
    }
    else {
        console.warn('Warning: No template match');
    }
};
exports.generateFile = generateFile;
