"use strict";
exports.__esModule = true;
exports.createTeamMain = void 0;
var NewTeam_class_1 = require("../../classes/NewTeam.class");
var dataUpdateFormatters_1 = require("../tbUtils/dataUpdateFormatters");
var dataUtils_1 = require("../../utils/dataUtils");
var createTeamMain = function () {
    // get user data from local json file
    var userDataObj = (0, dataUtils_1.getLocalDataFromJSON)("userData");
    var newTeam = new NewTeam_class_1.NewTeam();
    newTeam.displayIntro();
    newTeam.getName(Object.keys(userDataObj.teams));
    newTeam.getTeamMembers();
    var newUserDataJSON = (0, dataUpdateFormatters_1.formatNewTeamData)(userDataObj, newTeam);
    (0, dataUtils_1.setDataToLocalJSON)("userData", newUserDataJSON);
    console.log("Team Saved!");
    return;
};
exports.createTeamMain = createTeamMain;
