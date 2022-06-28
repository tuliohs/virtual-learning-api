import { User } from "../user/User";

export type ScheduleConfig = {
  createdAt: Date;
  dayWeek?:
    | "segunda"
    | "terca"
    | "quarta"
    | "quinta"
    | "sexta"
    | "sabado"
    | "domingo"
    | null;
  id: string;
  timeEnd: string;
  timeStart: string;
  updatedAt: Date;
  user?: User | null;
};
