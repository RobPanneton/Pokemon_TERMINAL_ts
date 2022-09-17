// const { createTeamMain } = require("./createTeam/createTeamMain");
// const { editTeamMain } = require("./editTeamMain");
import { tbMainActionPrompt } from "./tbMenuPrompts/tbFirstActionPrompt";

export const teambuilderMainMenu = (): void => {
  const tbfirstActionOptions = [1, 2, 3];
  let tbMainActionInput = tbMainActionPrompt();

  while (!tbfirstActionOptions.includes(tbMainActionInput)) {
    console.log("\n\nPlease choose a valid option");
    tbMainActionInput = tbMainActionPrompt();
  }

  return process.exit();
};

// REFORMAT THIS
// const teambuilderMainMenu = () => {

//   if (teambuilderInput === 1) createTeamMain();
//   if (teambuilderInput === 2) editTeamMain();
//   if (teambuilderInput === 3) return;
// };
