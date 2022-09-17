const prompt = require("prompt-sync")({ sigint: true });

const keypress = async (): Promise<void> => {
  process.stdin.setRawMode(true);
  return new Promise((resolve) =>
    process.stdin.once("data", () => {
      process.stdin.setRawMode(false);
      resolve();
    })
  );
};

export const anyKeyPrompt = async (message: string) => {
  console.log(message);
  const key = await keypress();
  process.exit;

  return key;
};

export const userInputPrompt = (message: string): string => {
  return prompt(message);
};
