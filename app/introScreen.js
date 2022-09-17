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
exports.introScreen = void 0;
const { anyKeyPrompt } = require("./utils/prompts");
const introScreen = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("                                 _                                 ");
    console.log("                                |/                                  ");
    console.log("                     _         |/                                  ");
    console.log("                    | |      ___                                   ");
    console.log("   ______           | | _  .° _ °.    _______                      ");
    console.log("   \\   _ °.   ___   | |/ / | |_//_  .° _   _ °.   ___              ");
    console.log("    | |_| | .° _ °. |   <  °._____| | / | | \\ | .° _ °.  ___       ");
    console.log("    |  __.° | |_| | |_|\\_\\     ___  |_| |_| |_| | |_| | |   °.     ");
    console.log("    | |     °.___.°          .°   °.            °.___.° | |°. |    ");
    console.log("    |_|                     /   _   \\                   |_| |_|    ");
    console.log("                           |---(_)---|                             ");
    console.log("                            \\       /                              ");
    console.log("                             °.___.°                               ");
    console.log("");
    console.log("       ______                   _        _              _ ");
    console.log("     /__   __/           /|    / |      / | / / ___   / /");
    console.log("       /  / / _ \\ / /_  / |   /  |  / //  |/ // _   // /");
    console.log("      /  / /  __//  __// /|  / / | / // /|  // /_/ // /____");
    console.log("     /  /  \\___//  /  /_/ |_/ /| |/ //_/ |_//___/|//  ______/  ");
    console.log("                     ");
    console.log("");
    yield setTimeout(() => {
        // await anyKeyPrompt("press any key to continue");
    }, 2000);
    yield anyKeyPrompt("press any key to continue");
    return;
});
exports.introScreen = introScreen;
