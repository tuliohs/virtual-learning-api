import { ScheduleConfigWhereInput } from "./ScheduleConfigWhereInput";
import { ScheduleConfigOrderByInput } from "./ScheduleConfigOrderByInput";

export type ScheduleConfigFindManyArgs = {
  where?: ScheduleConfigWhereInput;
  orderBy?: Array<ScheduleConfigOrderByInput>;
  skip?: number;
  take?: number;
};
