import { userInputPrompt } from "../../utils/prompts";

export const tbMainActionPrompt = (): number => {
  console.log("\nChoose an Option");
  console.log(
    "1) Create a Team     2) Edit a Team      3) Return to Main Menu"
  );

  return Number(userInputPrompt("What will you do?  "));
};
