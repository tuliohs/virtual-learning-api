import { Module } from "@nestjs/common";
import { ScheduleConfigModuleBase } from "./base/scheduleConfig.module.base";
import { ScheduleConfigService } from "./scheduleConfig.service";
import { ScheduleConfigController } from "./scheduleConfig.controller";
import { ScheduleConfigResolver } from "./scheduleConfig.resolver";

@Module({
  imports: [ScheduleConfigModuleBase],
  controllers: [ScheduleConfigController],
  providers: [ScheduleConfigService, ScheduleConfigResolver],
  exports: [ScheduleConfigService],
})
export class ScheduleConfigModule {}
