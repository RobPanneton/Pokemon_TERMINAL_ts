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
exports.userInputPrompt = exports.anyKeyPrompt = void 0;
const prompt = require("prompt-sync")({ sigint: true });
const keypress = () => __awaiter(void 0, void 0, void 0, function* () {
    process.stdin.setRawMode(true);
    return new Promise((resolve) => process.stdin.once("data", () => {
        process.stdin.setRawMode(false);
        resolve();
    }));
});
const anyKeyPrompt = (message) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(message);
    const key = yield keypress();
    process.exit;
    return key;
});
exports.anyKeyPrompt = anyKeyPrompt;
const userInputPrompt = (message) => {
    return prompt(message);
};
exports.userInputPrompt = userInputPrompt;
