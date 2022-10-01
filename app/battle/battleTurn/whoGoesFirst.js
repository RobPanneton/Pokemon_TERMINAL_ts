"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whoGoesFirst = void 0;
const RNG_1 = require("../battleUtils/RNG");
const whoGoesFirst = (mon1, mon2) => {
    if (mon1.stats.speed > mon2.stats.speed)
        return [mon1, mon2];
    if (mon1.stats.speed < mon2.stats.speed)
        return [mon2, mon1];
    return (0, RNG_1.RNG)(1, 2) === 1 ? [mon1, mon2] : [mon2, mon1];
};
exports.whoGoesFirst = whoGoesFirst;
