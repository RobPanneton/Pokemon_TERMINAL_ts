"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewTeam = void 0;
const tbSelectAttacks_1 = require("../teambuilder/tbMenuPrompts/tbSelectAttacks");
const tbGetSpeciesInput_1 = require("../teambuilder/tbMenuPrompts/tbGetSpeciesInput");
const tbCreateTeamMain_1 = require("../teambuilder/tbCreateTeam/tbCreateTeamMain");
const optionsFormatters_1 = require("../teambuilder/tbUtils/optionsFormatters");
const prompts_1 = require("../utils/prompts");
const stringFormat_1 = require("../utils/stringFormat");
const pokemon_1 = require("../stats/pokemon");
class NewTeam {
    constructor() {
        // get team name from the user
        this.getName = (currentNames) => {
            const name = (0, prompts_1.userInputPrompt)(`Name your team: `);
            if (currentNames.includes(name)) {
                console.log(`Team name ${name} already in use!\n`);
                return this.getName(currentNames);
            }
            return (this.teamName = name);
        };
        // add the selected pokemon to the appropriate slot
        this.addNewPokemon = (species, slot, attacks) => {
            return (this.team = Object.assign(Object.assign({}, this.team), { [slot]: {
                    id: `${slot}-${species.species}`,
                    species: species.species,
                    type: species.type,
                    stats: species.stats,
                    attacks: attacks,
                } }));
        };
        // prompt user for team member species and attacks
        this.getTeamMembers = () => {
            for (const slot of Object.keys(this.team)) {
                console.log("CHOOSE A POKEMON !\n");
                const userInput = (0, tbGetSpeciesInput_1.tbGetNewSpeciesInput)((0, optionsFormatters_1.formatSpeciesOptionsString)(), (0, optionsFormatters_1.formatValidSpeciesInputs)());
                if (userInput.toUpperCase() === "B")
                    (0, tbCreateTeamMain_1.createTeamMain)(); // restart teambuild process
                // find pokemon based on input
                let selectedPokemon = Object.keys(pokemon_1.POKEMON).find((poke) => {
                    if (pokemon_1.POKEMON[poke].id === userInput)
                        return poke;
                    if (pokemon_1.POKEMON[poke].species === userInput)
                        return poke;
                    if (pokemon_1.POKEMON[poke].id === (0, stringFormat_1.addLeadingZeros)(userInput))
                        return poke;
                });
                const selectedAttacks = (0, tbSelectAttacks_1.tbAttacksInput)(pokemon_1.POKEMON[selectedPokemon].attacks);
                this.addNewPokemon(pokemon_1.POKEMON[selectedPokemon], slot, selectedAttacks);
            }
            return;
        };
        this.teamName = "";
        this.team = {
            slot_1: null,
            slot_2: null,
            slot_3: null,
            slot_4: null,
            slot_5: null,
            slot_6: null,
        };
    }
}
exports.NewTeam = NewTeam;
