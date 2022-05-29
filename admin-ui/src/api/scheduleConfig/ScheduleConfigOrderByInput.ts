import { SortOrder } from "../../util/SortOrder";

export type ScheduleConfigOrderByInput = {
  createdAt?: SortOrder;
  dayWeek?: SortOrder;
  id?: SortOrder;
  timeEnd?: SortOrder;
  timeStart?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
