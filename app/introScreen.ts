const { anyKeyPrompt } = require("./utils/prompts");

export const introScreen = async () => {
  console.log(
    "                                 _                                 "
  );
  console.log(
    "                                |/                                  "
  );
  console.log(
    "                     _         |/                                  "
  );
  console.log(
    "                    | |      ___                                   "
  );
  console.log(
    "   ______           | | _  .° _ °.    _______                      "
  );
  console.log(
    "   \\   _ °.   ___   | |/ / | |_//_  .° _   _ °.   ___              "
  );
  console.log(
    "    | |_| | .° _ °. |   <  °._____| | / | | \\ | .° _ °.  ___       "
  );
  console.log(
    "    |  __.° | |_| | |_|\\_\\     ___  |_| |_| |_| | |_| | |   °.     "
  );
  console.log(
    "    | |     °.___.°          .°   °.            °.___.° | |°. |    "
  );
  console.log(
    "    |_|                     /   _   \\                   |_| |_|    "
  );
  console.log(
    "                           |---(_)---|                             "
  );
  console.log(
    "                            \\       /                              "
  );
  console.log(
    "                             °.___.°                               "
  );
  console.log("");

  console.log("       ______                   _        _              _ ");
  console.log("     /__   __/           /|    / |      / | / / ___   / /");
  console.log("       /  / / _ \\ / /_  / |   /  |  / //  |/ // _   // /");
  console.log("      /  / /  __//  __// /|  / / | / // /|  // /_/ // /____");
  console.log(
    "     /  /  \\___//  /  /_/ |_/ /| |/ //_/ |_//___/|//  ______/  "
  );
  console.log("                     ");
  console.log("");

  setTimeout(() => {
    // await anyKeyPrompt("press any key to continue");
  }, 2000);
  await anyKeyPrompt("press any key to continue");

  return;
};
