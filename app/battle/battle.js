"use strict";
// const { attackPrompt } = require("./attackPrompt");
// const { timeDelay } = require("../utils");
// const { initiateTeam } = require("./initiateTeam");
// const { initiateTurn } = require("./initiateTurn");
// const { playerSwitch } = require("./playerSwitch");
// const { npcSwitch } = require("./npcSwitch");
// const { winChecker } = require("./winChecker");
// const { userTeams } = require("../teams/userTeams");
// const { npcTeams } = require("../teams/npcTeams");
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.initiateBattle = void 0;
var Battle_class_1 = require("../classes/Battle.class");
var dataUtils_1 = require("../utils/dataUtils");
var initiateBattle = function () { return __awaiter(void 0, void 0, void 0, function () {
    var userDataObj, npcDataObj, battle;
    return __generator(this, function (_a) {
        userDataObj = (0, dataUtils_1.getLocalDataFromJSON)("userData");
        npcDataObj = (0, dataUtils_1.getLocalDataFromJSON)("npcData");
        // add team selectors and prompts here
        console.log("\n");
        battle = new Battle_class_1.Battle(userDataObj.teams.battleTest.team, userDataObj.playerName, npcDataObj.teams.npcTestTeam.team, npcDataObj.teams.npcTestTeam.trainerName);
        while (!battle.isFinished) {
            battle.initTurn();
        }
        console.dir(battle, { depth: null });
        return [2 /*return*/, process.exit()];
    });
}); };
exports.initiateBattle = initiateBattle;
// export const initiateBattle = async () => {
//   // along with adding hp,
//   // you'll need to add the pp for all of the attacks and keep track of them throughout the battle
//   // await timeDelay(250);
//   let player1 = await initiateTeam(userTeams.team1);
//   let player2 = await initiateTeam(npcTeams.test1);
//   // send out pokemon, make temp copy.
//   // when switching or fainted, use id(index) to replace the version in player.team
//   player1.currentPokemon = player1.team[0];
//   player2.currentPokemon = player2.team[0];
//   console.log(
//     `\n${player1.trainerName} sent out ${player1.currentPokemon.species}!\n`
//   );
//   // await timeDelay(1000);
//   console.log(
//     `\n${player2.trainerName} sent out ${player2.currentPokemon.species}!\n`
//   );
//   // await timeDelay(500);
//   let winner = "";
//   let loser = "";
//   while (!winner) {
//     let selectedMove = await attackPrompt(player1.currentPokemon.attacks);
//     // insert npc rng for move selection, and eventually, maybe a bot thatll dynamically select moves based on situation
//     // insert speed check here
//     // set logic so that you have a first and second mover, instead of p1 then p2
//     // you'll need the right logic to set the team stats according to the speed check winner
//     let turnResult = await initiateTurn(
//       { pokemon1: player1.currentPokemon, attack1: selectedMove },
//       {
//         pokemon2: player2.currentPokemon,
//         attack2: player2.currentPokemon.attacks[0],
//       }
//     );
//     player1.currentPokemon = turnResult[0];
//     player2.currentPokemon = turnResult[1];
//     if (player2.currentPokemon.hp === 0) {
//       player2.currentPokemon.fainted = true;
//       player2.team[player2.currentPokemon.id] = player2.currentPokemon;
//       if (await winChecker(player2.team)) {
//         winner = player1.trainerName;
//         loser = player2.trainerName;
//       } else {
//         player2.currentPokemon = await npcSwitch(player2.team);
//         console.log(
//           `\n${player2.trainerName} sent out ${player2.currentPokemon.species}\n`
//         );
//       }
//     }
//     if (player1.currentPokemon.hp === 0) {
//       player1.currentPokemon.fainted = true;
//       player1.team[player1.currentPokemon.id] = player1.currentPokemon;
//       if (await winChecker(player1.team)) {
//         winner = player2.trainerName;
//         loser = player1.trainerName;
//       } else {
//         player1.currentPokemon = await playerSwitch(player1.team);
//         console.log(
//           `\n${player1.trainerName} sent out ${player1.currentPokemon.species}\n`
//         );
//       }
//     }
//     // temporary winchecker
//     // if (player1.team[0].hp === 0 || player2.team[0].hp === 0) winner = true;
//   }
//   console.log(`${winner} has won the battle!`);
//   return;
// };
// let userexample = {
//   trainerName: "user",
//   team: [
//     {
//       id: 0,
//       species: "BLASTOISE",
//       level: 100,
//       hp: 361,
//       maxHp: 361,
//       fainted: false,
//       type: { type1: "WATER", type2: null },
//       stats: {
//         hp: 361,
//         attack: 264,
//         defense: 298,
//         special: 268,
//         speed: 254,
//       },
//       attacks: [attacks.attacks.SURF, attacks.attacks.STRENGTH],
//     },
//   ],
// };
// script for clearing the terminal text, "scrolls down"
// this way user can see previous text if wanted
// const readline = require("readline");
// const blank = "\n".repeat(process.stdout.rows);
// console.log(blank);
// readline.cursorTo(process.stdout, 0, 0);
// readline.clearScreenDown(process.stdout);
// slide that into a util function when nearing completion and add callbacks between events
// DAMAGE NOTES
// NIDOKING USING EARTHQUAKE ON RAICHU DOES 1 HP MNORE  THAN MAX POSSIBLE DMG ROLL
// WITH SAME DMG CALC, BLASTOISE'S SURF ON NIDOKING DOES PERFECT MAX DAMAGE
