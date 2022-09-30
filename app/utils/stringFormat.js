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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSlotFromId = exports.addLeadingZeros = exports.removeLeadingZeros = exports.pascaleCase = void 0;
const pascaleCase = (string) => __awaiter(void 0, void 0, void 0, function* () {
    return string
        .split("")
        .map((letter, index) => index === 0 ? letter.toUpperCase() : letter.toLowerCase())
        .join("");
});
exports.pascaleCase = pascaleCase;
const removeLeadingZeros = (stringNum) => {
    if (stringNum.charAt(0) !== "0")
        return stringNum;
    let cleanedNum = stringNum;
    while (cleanedNum.charAt(0) === "0")
        cleanedNum = cleanedNum.replace(/^0+/, "");
    return cleanedNum;
};
exports.removeLeadingZeros = removeLeadingZeros;
const addLeadingZeros = (stringNum) => {
    return stringNum.length < 3 ? (0, exports.addLeadingZeros)(`0${stringNum}`) : stringNum;
};
exports.addLeadingZeros = addLeadingZeros;
const getSlotFromId = (id) => {
    return id.split("-")[0];
};
exports.getSlotFromId = getSlotFromId;
