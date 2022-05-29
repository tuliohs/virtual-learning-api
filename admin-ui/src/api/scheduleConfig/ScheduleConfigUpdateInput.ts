import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScheduleConfigUpdateInput = {
  dayWeek?:
    | "Segunda"
    | "terca"
    | "quarta"
    | "quinta"
    | "sexta"
    | "sabado"
    | "domingo"
    | null;
  timeEnd?: string;
  timeStart?: string;
  user?: UserWhereUniqueInput | null;
};
