import { RNG } from "../battleUtils/RNG";

export const whoGoesFirst = (mon1, mon2) => {
  if (mon1.stats.speed > mon2.stats.speed) return [mon1, mon2];
  if (mon1.stats.speed < mon2.stats.speed) return [mon2, mon1];
  return RNG(1, 2) === 1 ? [mon1, mon2] : [mon2, mon1];
};
