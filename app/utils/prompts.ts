const prompt = require("prompt-sync")();

const keypress = (): Promise<void> => {
  process.stdin.setRawMode(true);
  return new Promise((resolve) =>
    process.stdin.once("data", () => {
      process.stdin.setRawMode(false);
      resolve();
    })
  );
};

export const anyKeyPrompt = (message: string) => {
  console.log(message);
  const key = keypress();
  process.exit;

  return key;
};

export const userInputPrompt = (message: string): string => {
  return prompt(message);
};
