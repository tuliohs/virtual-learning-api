import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ScheduleConfigWhereInput = {
  dayWeek?:
    | "Segunda"
    | "terca"
    | "quarta"
    | "quinta"
    | "sexta"
    | "sabado"
    | "domingo";
  id?: StringFilter;
  timeEnd?: StringFilter;
  timeStart?: StringFilter;
  user?: UserWhereUniqueInput;
};
