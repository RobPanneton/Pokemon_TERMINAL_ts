// const { writeFileSync, readFileSync } = require("fs");
import { NewTeam } from "../../classes/NewTeam.class";

import { formatNewTeamData } from "../tbUtils/dataUpdateFormatters";
import {
  getLocalDataFromJSON,
  setDataToLocalJSON,
} from "../../utils/dataUtils";

export const createTeamMain = () => {
  // get user data from local json file
  const userDataObj = getLocalDataFromJSON("userData");

  console.log(
    "=================================================================\n=======================   CREATE A TEAM   =======================\n=================================================================\n"
  );

  let newTeam = new NewTeam();

  newTeam.getName(Object.keys(userDataObj.teams));

  newTeam.getTeamMembers();

  const newUserDataJSON = formatNewTeamData(userDataObj, newTeam);

  setDataToLocalJSON("userData", newUserDataJSON);

  console.log("team saved!");

  return;
};
