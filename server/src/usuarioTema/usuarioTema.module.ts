import { Module } from "@nestjs/common";
import { UsuarioTemaModuleBase } from "./base/usuarioTema.module.base";
import { UsuarioTemaService } from "./usuarioTema.service";
import { UsuarioTemaController } from "./usuarioTema.controller";
import { UsuarioTemaResolver } from "./usuarioTema.resolver";

@Module({
  imports: [UsuarioTemaModuleBase],
  controllers: [UsuarioTemaController],
  providers: [UsuarioTemaService, UsuarioTemaResolver],
  exports: [UsuarioTemaService],
})
export class UsuarioTemaModule {}
