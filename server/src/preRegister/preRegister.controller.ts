import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PreRegisterService } from "./preRegister.service";
import { PreRegisterControllerBase } from "./base/preRegister.controller.base";

@swagger.ApiTags("preRegisters")
@common.Controller("preRegisters")
export class PreRegisterController extends PreRegisterControllerBase {
  constructor(
    protected readonly service: PreRegisterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
