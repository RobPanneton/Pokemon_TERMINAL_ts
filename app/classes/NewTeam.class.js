"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewTeam = void 0;
const prompts_1 = require("../utils/prompts");
class NewTeam {
    constructor() {
        this.getName = (nameType, nameKey) => {
            const name = (0, prompts_1.userInputPrompt)(`Name your ${nameType}: `);
            return (this[nameKey] = name);
        };
        this.isFull = () => {
            return Object.keys(this.currentTeam).every((slot) => this.currentTeam[slot] !== null);
        };
        this.addNewPokemon = (species, slot, attacks) => {
            return (this.currentTeam = Object.assign(Object.assign({}, this.currentTeam), { [slot]: {
                    id: `${slot}-${species.species}`,
                    species: species.species,
                    type: species.type,
                    stats: species.stats,
                    attacks: attacks,
                } }));
        };
        this.teamName = "";
        this.currentTeam = {
            slot_1: null,
            slot_2: null,
            slot_3: null,
            slot_4: null,
            slot_5: null,
            slot_6: null,
        };
        this.currentSlot = 1;
    }
}
exports.NewTeam = NewTeam;
