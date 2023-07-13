"use strict";
exports.__esModule = true;
exports.setDataToLocalJSON = exports.getLocalDataFromJSON = void 0;
var fs_1 = require("fs");
var getLocalDataFromJSON = function (fileName) {
    return JSON.parse((0, fs_1.readFileSync)("./data/" + fileName + ".json", "utf-8"));
};
exports.getLocalDataFromJSON = getLocalDataFromJSON;
var setDataToLocalJSON = function (fileName, jsonObj) {
    return (0, fs_1.writeFileSync)("./data/" + fileName + ".json", jsonObj);
};
exports.setDataToLocalJSON = setDataToLocalJSON;
