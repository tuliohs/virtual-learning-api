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
    | "domingo";
  id: string;
  idUser?: User;
  timeEnd: string;
  timeStart: string;
  updatedAt: Date;
};
