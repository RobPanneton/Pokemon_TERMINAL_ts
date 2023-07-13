"use strict";
exports.__esModule = true;
exports.whoGoesFirst = void 0;
var RNG_1 = require("../battleUtils/RNG");
var whoGoesFirst = function (mon1, atk1, mon2, atk2) {
    if (mon1.stats.speed > mon2.stats.speed)
        return [mon1, atk1, mon2, atk2];
    if (mon1.stats.speed < mon2.stats.speed)
        return [mon2, atk2, mon1, atk1];
    return (0, RNG_1.RNG)(1, 2) === 1 ? [mon1, atk1, mon2, atk2] : [mon2, atk2, mon1, atk1];
};
exports.whoGoesFirst = whoGoesFirst;
