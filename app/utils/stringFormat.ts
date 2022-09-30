export const pascaleCase = async (string) => {
  return string
    .split("")
    .map((letter, index) =>
      index === 0 ? letter.toUpperCase() : letter.toLowerCase()
    )
    .join("");
};

export const removeLeadingZeros = (stringNum) => {
  if (stringNum.charAt(0) !== "0") return stringNum;

  let cleanedNum = stringNum;
  while (cleanedNum.charAt(0) === "0")
    cleanedNum = cleanedNum.replace(/^0+/, "");
  return cleanedNum;
};

export const addLeadingZeros = (stringNum) => {
  return stringNum.length < 3 ? addLeadingZeros(`0${stringNum}`) : stringNum;
};

export const getSlotFromId = (id: string) => {
  return id.split("-")[0];
};
