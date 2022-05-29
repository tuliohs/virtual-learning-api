import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScheduleConfigCreateInput = {
  dayWeek:
    | "segunda"
    | "terca"
    | "quarta"
    | "quinta"
    | "sexta"
    | "sabado"
    | "domingo";
  idUser: UserWhereUniqueInput;
  timeEnd: string;
  timeStart: string;
};
