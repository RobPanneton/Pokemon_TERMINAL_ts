"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcTypeMultiplier = exports.isThereSTAB = exports.getDmgSplit = void 0;
const typeInteractions_1 = require("./typeInteractions");
const getDmgSplit = (type) => {
    if (/NORMAL|FIGHTING|FLYING|POISON|GROUND|ROCK|BUG|GHOST/.test(type))
        return "PHYSICAL";
    if (/FIRE|WATER|GRASS|ELECTRIC|PSYCHIC|ICE|DRAGON/.test(type))
        return "SPECIAL";
    return console.log("error with phys or special");
};
exports.getDmgSplit = getDmgSplit;
const isThereSTAB = (monTypes, attack) => {
    return monTypes.type1 === attack.type || monTypes.type2 === attack.type
        ? true
        : false;
};
exports.isThereSTAB = isThereSTAB;
const calcTypeMultiplier = (atkType, monType) => {
    return Object.values(monType).reduce((acc, type) => {
        if (type === null)
            return acc;
        if (typeInteractions_1.typeInteractions[atkType].superEffective.includes(type))
            return acc * 2;
        if (typeInteractions_1.typeInteractions[atkType].resistant.includes(type))
            return acc / 2;
        if (typeInteractions_1.typeInteractions[atkType].immune.includes(type))
            return acc * 0;
        return acc;
    }, 1);
};
exports.calcTypeMultiplier = calcTypeMultiplier;
