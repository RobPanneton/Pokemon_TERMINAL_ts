export type AttackStats = {
  [id: string]: AttackInfo;
};

type AttackInfo = {
  name: string;
  power?: number;
  accuracy?: number;
  type?: string;
  effect?: any; // TO DO
};
