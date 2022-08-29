"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logHeading = exports.logCode = exports.logSuccess = exports.logAlert = exports.logError = void 0;
const cli_color_1 = __importDefault(require("cli-color"));
const logError = (msg) => console.log(cli_color_1.default.redBright(msg));
exports.logError = logError;
const logAlert = (msg) => console.log(cli_color_1.default.yellowBright(msg));
exports.logAlert = logAlert;
const logSuccess = (msg) => console.log(cli_color_1.default.greenBright(msg));
exports.logSuccess = logSuccess;
const logCode = (code) => console.log(cli_color_1.default.greenBright(code));
exports.logCode = logCode;
const logHeading = (txt) => console.log(cli_color_1.default.cyanBright(txt));
exports.logHeading = logHeading;
