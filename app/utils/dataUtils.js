"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDataToLocalJSON = exports.getLocalDataFromJSON = void 0;
const fs_1 = require("fs");
const getLocalDataFromJSON = (fileName) => {
    return JSON.parse((0, fs_1.readFileSync)("./data/" + fileName + ".json", "utf-8"));
};
exports.getLocalDataFromJSON = getLocalDataFromJSON;
const setDataToLocalJSON = (fileName, jsonObj) => {
    return (0, fs_1.writeFileSync)("./data/" + fileName + ".json", jsonObj);
};
exports.setDataToLocalJSON = setDataToLocalJSON;
