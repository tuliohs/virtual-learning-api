import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ScheduleConfigServiceBase } from "./base/scheduleConfig.service.base";

@Injectable()
export class ScheduleConfigService extends ScheduleConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
