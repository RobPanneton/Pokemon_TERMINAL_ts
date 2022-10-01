import { typeInteractions } from "./typeInteractions";

export const getDmgSplit = (type) => {
  if (/NORMAL|FIGHTING|FLYING|POISON|GROUND|ROCK|BUG|GHOST/.test(type))
    return "PHYSICAL";
  if (/FIRE|WATER|GRASS|ELECTRIC|PSYCHIC|ICE|DRAGON/.test(type))
    return "SPECIAL";
  return console.log("error with phys or special");
};

export const isThereSTAB = (monTypes, attack) => {
  return monTypes.type1 === attack.type || monTypes.type2 === attack.type
    ? true
    : false;
};

export const calcTypeMultiplier = (atkType, monType) => {
  return Object.values(monType).reduce((acc: number, type: string) => {
    if (type === null) return acc;
    if (typeInteractions[atkType].superEffective.includes(type)) return acc * 2;
    if (typeInteractions[atkType].resistant.includes(type)) return acc / 2;
    if (typeInteractions[atkType].immune.includes(type)) return acc * 0;
    return acc;
  }, 1);
};
