import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { UsuarioTemaResolverBase } from "./base/usuarioTema.resolver.base";
import { UsuarioTema } from "./base/UsuarioTema";
import { UsuarioTemaService } from "./usuarioTema.service";

@graphql.Resolver(() => UsuarioTema)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class UsuarioTemaResolver extends UsuarioTemaResolverBase {
  constructor(
    protected readonly service: UsuarioTemaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
