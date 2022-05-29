import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { UsuarioTemaService } from "./usuarioTema.service";
import { UsuarioTemaControllerBase } from "./base/usuarioTema.controller.base";

@swagger.ApiTags("usuarioTemas")
@common.Controller("usuarioTemas")
export class UsuarioTemaController extends UsuarioTemaControllerBase {
  constructor(
    protected readonly service: UsuarioTemaService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
