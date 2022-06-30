import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { PreRegisterResolverBase } from "./base/preRegister.resolver.base";
import { PreRegister } from "./base/PreRegister";
import { PreRegisterService } from "./preRegister.service";

@graphql.Resolver(() => PreRegister)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class PreRegisterResolver extends PreRegisterResolverBase {
  constructor(
    protected readonly service: PreRegisterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
