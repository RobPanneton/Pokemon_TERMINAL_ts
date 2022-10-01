import { RNG } from "../battleUtils/RNG";

export const whoGoesFirst = (mon1, atk1, mon2, atk2) => {
  if (mon1.stats.speed > mon2.stats.speed) return [mon1, atk1, mon2, atk2];
  if (mon1.stats.speed < mon2.stats.speed) return [mon2, atk2, mon1, atk1];
  return RNG(1, 2) === 1 ? [mon1, atk1, mon2, atk2] : [mon2, atk2, mon1, atk1];
};
