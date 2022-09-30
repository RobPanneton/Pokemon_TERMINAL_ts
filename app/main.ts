import { initiateBattle } from "./battle/battle";
import { introScreen } from "./introScreen";
import { mainMenu } from "./mainMenu";
import { teambuilderMainMenu } from "./teambuilder/teambuilderMainMenu";

// const { timeDelay } = require("./utils");    FOR GAME PAUSES

const start = async () => {
  // need async await for prompt to await
  await introScreen();

  while (true) {
    let mainMenuInput = mainMenu();
    if (mainMenuInput === 1) initiateBattle();
    if (mainMenuInput === 2) teambuilderMainMenu();
    if (mainMenuInput === 9) return process.exit();
  }
  return process.exit();
};

start();

// test
// response = prompt("Pokemon TERMINAL");
