export const isOnlyNumbers = (string) => {
  return /^[0-9]*$/.test(string);
};

export const isOnlyOneToFour = (string) => {
  return /^[1-4]*$/.test(string);
};
