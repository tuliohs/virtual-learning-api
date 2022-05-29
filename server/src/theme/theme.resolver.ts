import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ThemeResolverBase } from "./base/theme.resolver.base";
import { Theme } from "./base/Theme";
import { ThemeService } from "./theme.service";

@graphql.Resolver(() => Theme)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ThemeResolver extends ThemeResolverBase {
  constructor(
    protected readonly service: ThemeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
