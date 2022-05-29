import { ScheduleConfig as TScheduleConfig } from "../api/scheduleConfig/ScheduleConfig";

export const SCHEDULECONFIG_TITLE_FIELD = "timeEnd";

export const ScheduleConfigTitle = (record: TScheduleConfig): string => {
  return record.timeEnd || record.id;
};
