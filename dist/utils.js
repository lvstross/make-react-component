"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writePackageJson = exports.parseAnswers = void 0;
const fs_1 = require("fs");
const helpers_1 = require("./helpers");
const parseAnswers = (answers) => {
    var _a, _b;
    const keywords = answers.keywords !== ''
        ? (_b = (_a = answers.keywords) === null || _a === void 0 ? void 0 : _a.split(',')) === null || _b === void 0 ? void 0 : _b.map((word) => word === null || word === void 0 ? void 0 : word.replace(/\s/g, ''))
        : [];
    const gitRepo = answers.gitRepo;
    const hasGitRepo = gitRepo !== '';
    const repo = hasGitRepo
        ? { repository: { type: 'git', url: `git+${gitRepo}.git` } }
        : {};
    const repoBugAndHomepage = hasGitRepo
        ? { bugs: { url: `${gitRepo}/issues` }, homepage: `${gitRepo}#readme` }
        : {};
    const pkgJS = Object.assign(Object.assign(Object.assign({ name: answers.pkgName, version: answers.version, description: answers.description, main: answers.entryPoint, scripts: {
            test: answers.testCommand
        } }, repo), { keywords, author: answers.author, license: answers.license }), repoBugAndHomepage);
    return JSON.stringify(pkgJS, null, 2);
};
exports.parseAnswers = parseAnswers;
const writePackageJson = (pkgJSON) => {
    const dirPath = (0, helpers_1.getDirPath)();
    (0, fs_1.writeFileSync)(`${dirPath}/package.json`, pkgJSON);
    process.exit();
};
exports.writePackageJson = writePackageJson;
