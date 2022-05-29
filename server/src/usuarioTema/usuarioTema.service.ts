import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { UsuarioTemaServiceBase } from "./base/usuarioTema.service.base";

@Injectable()
export class UsuarioTemaService extends UsuarioTemaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
