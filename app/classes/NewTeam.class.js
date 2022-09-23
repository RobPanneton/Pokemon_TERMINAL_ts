"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewTeam = void 0;
const prompts_1 = require("../utils/prompts");
class NewTeam {
    constructor() {
        this.getName = (currentNames) => {
            const name = (0, prompts_1.userInputPrompt)(`Name your team: `);
            if (currentNames.includes(name)) {
                console.log(`Team name ${name} already in use!\n`);
                return this.getName(currentNames);
            }
            return (this.teamName = name);
        };
        this.addNewPokemon = (species, slot, attacks) => {
            return (this.team = Object.assign(Object.assign({}, this.team), { [slot]: {
                    id: `${slot}-${species.species}`,
                    species: species.species,
                    type: species.type,
                    stats: species.stats,
                    attacks: attacks,
                } }));
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
