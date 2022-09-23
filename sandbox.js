const testIfNum = (input) => {
  console.log(Number(input));
  return /^[1-9]*$/.test(input);
};

console.log(testIfNum("1"));

// ^[0-9]*$
