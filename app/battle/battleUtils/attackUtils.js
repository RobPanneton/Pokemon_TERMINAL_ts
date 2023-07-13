"use strict";
exports.__esModule = true;
exports.handleDamage = exports.calcTypeMultiplier = exports.isThereSTAB = exports.getDmgSplit = void 0;
var typeInteractions_1 = require("./typeInteractions");
var getDmgSplit = function (type) {
    if (/NORMAL|FIGHTING|FLYING|POISON|GROUND|ROCK|BUG|GHOST/.test(type))
        return "PHYSICAL";
    if (/FIRE|WATER|GRASS|ELECTRIC|PSYCHIC|ICE|DRAGON/.test(type))
        return "SPECIAL";
    return console.log("error with phys or special");
};
exports.getDmgSplit = getDmgSplit;
var isThereSTAB = function (monTypes, attack) {
    return monTypes.type1 === attack.type || monTypes.type2 === attack.type
        ? true
        : false;
};
exports.isThereSTAB = isThereSTAB;
var calcTypeMultiplier = function (atkType, monType) {
    return Object.values(monType).reduce(function (acc, type) {
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
var handleDamage = function (hp, damage) {
    return hp - damage >= 0 ? hp - damage : 0;
};
exports.handleDamage = handleDamage;
