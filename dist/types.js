"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.File = exports.Syntax = exports.Shape = exports.Platform = exports.FilterOption = void 0;
var FilterOption;
(function (FilterOption) {
    FilterOption["WEB"] = "web";
    FilterOption["MOBILE"] = "mobile";
    FilterOption["CLASS"] = "class";
    FilterOption["FUNC"] = "func";
    FilterOption["JS"] = "js";
    FilterOption["TS"] = "ts";
    FilterOption["JSX"] = "jsx";
    FilterOption["TSX"] = "tsx";
})(FilterOption = exports.FilterOption || (exports.FilterOption = {}));
var Platform;
(function (Platform) {
    Platform["WEB"] = "WEB";
    Platform["MOBILE"] = "MOBILE";
    Platform["SHARED"] = "SHARED";
})(Platform = exports.Platform || (exports.Platform = {}));
var Shape;
(function (Shape) {
    Shape["FUNCTION"] = "FUNC";
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
