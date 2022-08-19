"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCmd = exports.getDirName = exports.getDirPath = void 0;
const child_process_1 = require("child_process");
const getDirPath = () => `${process.env.INIT_CWD || process.env.PWD}`;
exports.getDirPath = getDirPath;
const getDirName = () => {
    var _a;
    const dirPath = (0, exports.getDirPath)();
    return (_a = dirPath === null || dirPath === void 0 ? void 0 : dirPath.split('/')) === null || _a === void 0 ? void 0 : _a.pop();
};
exports.getDirName = getDirName;
const runCmd = (cmd) => {
    const options = cmd === null || cmd === void 0 ? void 0 : cmd.split('');
    const command = options === null || options === void 0 ? void 0 : options.shift();
    const result = (0, child_process_1.spawnSync)(command, options);
    if (result.status !== 0) {
        process.stderr.write(result.stderr);
        process.exit(result.status);
    }
    else {
        process.stdout.write(result.stdout);
        process.stderr.write(result.stderr);
    }
};
exports.runCmd = runCmd;
