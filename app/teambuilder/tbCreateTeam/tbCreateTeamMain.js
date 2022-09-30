"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTeamMain = void 0;
const NewTeam_class_1 = require("../../classes/NewTeam.class");
const dataUpdateFormatters_1 = require("../tbUtils/dataUpdateFormatters");
const dataUtils_1 = require("../../utils/dataUtils");
const createTeamMain = () => {
    // get user data from local json file
    const userDataObj = (0, dataUtils_1.getLocalDataFromJSON)("userData");
    let newTeam = new NewTeam_class_1.NewTeam();
    newTeam.displayIntro();
    newTeam.getName(Object.keys(userDataObj.teams));
    newTeam.getTeamMembers();
    const newUserDataJSON = (0, dataUpdateFormatters_1.formatNewTeamData)(userDataObj, newTeam);
    (0, dataUtils_1.setDataToLocalJSON)("userData", newUserDataJSON);
    console.log("Team Saved!");
    return;
};
exports.createTeamMain = createTeamMain;
