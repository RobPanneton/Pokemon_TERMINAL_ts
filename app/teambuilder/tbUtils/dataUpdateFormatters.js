"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNewTeamData = void 0;
const formatNewTeamData = (currentDataObj, newTeam) => {
    const newTeamsObj = Object.assign(Object.assign({}, currentDataObj.teams), { [newTeam.teamName]: Object.assign({}, newTeam) });
    return JSON.stringify(Object.assign(Object.assign({}, currentDataObj), { teams: newTeamsObj }));
};
exports.formatNewTeamData = formatNewTeamData;
