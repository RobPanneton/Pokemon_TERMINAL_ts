const { introScreen } = require("./introScreen");
// const { mainMenu } = require("./mainMenu");
// const { initiateBattle } = require("./battle/battle");
// const { teambuilderMainMenu } = require("./teambuilder/teambuilderMainMenu");

// const { timeDelay } = require("./utils");    FOR GAME PAUSES

const start = () => {
  introScreen();

  //   while (true) {
  //     let mainMenuInput = await mainMenu();
  //     if (mainMenuInput === 1) await initiateBattle();
  //     if (mainMenuInput === 2) await teambuilderMainMenu();
  //     if (mainMenuInput === 9) return await process.exit();
  //   }
  return process.exit();
};

start();

// test
// response = prompt("Pokemon TERMINAL");
