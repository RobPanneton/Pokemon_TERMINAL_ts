export const timeDelay = async (delay) => {
  return await new Promise((resolve) => setTimeout(resolve, delay));
};
