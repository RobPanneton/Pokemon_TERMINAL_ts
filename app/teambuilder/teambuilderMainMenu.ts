// const { editTeamMain } = require("./editTeamMain");
import { createTeamMain } from "./tbCreateTeam/tbCreateTeamMain";
import { editTeamMain } from "./tbEditTeam/tbEditTeamMain";
import { tbMainActionPrompt } from "./tbMenuPrompts/tbFirstActionPrompt";

export const teambuilderMainMenu = (): void => {
  const tbfirstActionOptions = [1, 2, 3];
  let tbMainActionInput = tbMainActionPrompt();

  while (!tbfirstActionOptions.includes(tbMainActionInput)) {
    console.log("\n\nPlease choose a valid option");
    tbMainActionInput = tbMainActionPrompt();
  }

  if (tbMainActionInput === 1) createTeamMain();
  if (tbMainActionInput === 2) editTeamMain();
  if (tbMainActionInput === 3) return;

  return process.exit();
};
