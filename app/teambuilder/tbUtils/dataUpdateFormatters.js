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
exports.formatNewTeamData = void 0;
var formatNewTeamData = function (currentDataObj, newTeam) {
    var _a;
    var newTeamsObj = __assign(__assign({}, currentDataObj.teams), (_a = {}, _a[newTeam.teamName] = __assign({}, newTeam), _a));
    return JSON.stringify(__assign(__assign({}, currentDataObj), { teams: newTeamsObj }));
};
exports.formatNewTeamData = formatNewTeamData;
