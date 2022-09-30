export const getNpcMove = (attacks) => {
  if (attacks.length === 1) return attacks[0];
  return attacks[Math.floor(Math.random() * (attacks.length - 1 + 1) + 1) - 1];
};
