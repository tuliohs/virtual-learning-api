import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ScheduleConfigResolverBase } from "./base/scheduleConfig.resolver.base";
import { ScheduleConfig } from "./base/ScheduleConfig";
import { ScheduleConfigService } from "./scheduleConfig.service";

@graphql.Resolver(() => ScheduleConfig)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ScheduleConfigResolver extends ScheduleConfigResolverBase {
  constructor(
    protected readonly service: ScheduleConfigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
