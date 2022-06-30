import { Module } from "@nestjs/common";
import { PreRegisterModuleBase } from "./base/preRegister.module.base";
import { PreRegisterService } from "./preRegister.service";
import { PreRegisterController } from "./preRegister.controller";
import { PreRegisterResolver } from "./preRegister.resolver";

@Module({
  imports: [PreRegisterModuleBase],
  controllers: [PreRegisterController],
  providers: [PreRegisterService, PreRegisterResolver],
  exports: [PreRegisterService],
})
export class PreRegisterModule {}
