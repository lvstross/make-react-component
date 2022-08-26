"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.Syntax = exports.Shape = exports.Platform = void 0;
var Platform;
(function (Platform) {
    Platform["WEB"] = "WEB";
    Platform["NATIVE"] = "NATIVE";
    Platform["SHARED"] = "SHARED";
})(Platform = exports.Platform || (exports.Platform = {}));
var Shape;
(function (Shape) {
    Shape["FUNCTION"] = "FUNCTION";
    Shape["CLASS"] = "CLASS";
    Shape["MIXED"] = "MIXED";
})(Shape = exports.Shape || (exports.Shape = {}));
var Syntax;
(function (Syntax) {
    Syntax["JS"] = "JS";
    Syntax["TS"] = "TS";
})(Syntax = exports.Syntax || (exports.Syntax = {}));
var File;
(function (File) {
    File["JS"] = "js";
    File["JSX"] = "jsx";
    File["TS"] = "ts";
    File["TSX"] = "tsx";
})(File = exports.File || (exports.File = {}));
