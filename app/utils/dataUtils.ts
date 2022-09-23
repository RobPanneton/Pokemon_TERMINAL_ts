import { readFileSync, writeFileSync } from "fs";

export const getLocalDataFromJSON = (fileName: string) => {
  return JSON.parse(readFileSync("./data/" + fileName + ".json", "utf-8"));
};

export const setDataToLocalJSON = (fileName: string, jsonObj) => {
  return writeFileSync("./data/" + fileName + ".json", jsonObj);
};
