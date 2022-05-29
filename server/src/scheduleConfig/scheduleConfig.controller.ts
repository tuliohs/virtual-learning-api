import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScheduleConfigService } from "./scheduleConfig.service";
import { ScheduleConfigControllerBase } from "./base/scheduleConfig.controller.base";

@swagger.ApiTags("scheduleConfigs")
@common.Controller("scheduleConfigs")
export class ScheduleConfigController extends ScheduleConfigControllerBase {
  constructor(
    protected readonly service: ScheduleConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
