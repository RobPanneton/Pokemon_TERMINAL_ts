"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.NewTeam = void 0;
var tbSelectAttacks_1 = require("../teambuilder/tbMenuPrompts/tbSelectAttacks");
var tbGetSpeciesInput_1 = require("../teambuilder/tbMenuPrompts/tbGetSpeciesInput");
var tbCreateTeamMain_1 = require("../teambuilder/tbCreateTeam/tbCreateTeamMain");
var optionsFormatters_1 = require("../teambuilder/tbUtils/optionsFormatters");
var prompts_1 = require("../utils/prompts");
var stringFormat_1 = require("../utils/stringFormat");
var pokemon_1 = require("../stats/pokemon");
var NewTeam = /** @class */ (function () {
    function NewTeam() {
        var _this = this;
        // get team name from the user
        this.getName = function (currentNames) {
            var name = (0, prompts_1.userInputPrompt)("Name your team: ");
            if (currentNames.includes(name)) {
                console.log("Team name ".concat(name, " already in use!\n"));
                return _this.getName(currentNames);
            }
            return (_this.teamName = name);
        };
        // add the selected pokemon to the appropriate slot
        this.addNewPokemon = function (species, slot, attacks) {
            var _a;
            return (_this.team = __assign(__assign({}, _this.team), (_a = {}, _a[slot] = {
                id: "".concat(slot, "-").concat(species.species),
                species: species.species,
                type: species.type,
                stats: species.stats,
                attacks: attacks
            }, _a)));
        };
        // prompt user for team member species and attacks
        this.getTeamMembers = function () {
            var _loop_1 = function (slot) {
                console.log("CHOOSE A POKEMON !\n");
                var userInput = (0, tbGetSpeciesInput_1.tbGetNewSpeciesInput)((0, optionsFormatters_1.formatSpeciesOptionsString)(), (0, optionsFormatters_1.formatValidSpeciesInputs)());
                if (userInput.toUpperCase() === "R")
                    (0, tbCreateTeamMain_1.createTeamMain)(); // restart teambuild process
                // find pokemon based on input
                var selectedPokemon = Object.keys(pokemon_1.POKEMON).find(function (poke) {
                    if (pokemon_1.POKEMON[poke].id === userInput)
                        return poke;
                    if (pokemon_1.POKEMON[poke].species === userInput)
                        return poke;
                    if (pokemon_1.POKEMON[poke].id === (0, stringFormat_1.addLeadingZeros)(userInput))
                        return poke;
                });
                var selectedAttacks = (0, tbSelectAttacks_1.tbAttacksInput)(pokemon_1.POKEMON[selectedPokemon].attacks);
                _this.addNewPokemon(pokemon_1.POKEMON[selectedPokemon], slot, selectedAttacks);
            };
            for (var _i = 0, _a = Object.keys(_this.team); _i < _a.length; _i++) {
                var slot = _a[_i];
                _loop_1(slot);
            }
            return;
        };
        this.displayIntro = function () {
            return console.log("=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n");
        };
        this.teamName = "";
        this.team = {
            slot_1: null,
            slot_2: null,
            slot_3: null,
            slot_4: null,
            slot_5: null,
            slot_6: null
        };
    }
    return NewTeam;
}());
exports.NewTeam = NewTeam;
