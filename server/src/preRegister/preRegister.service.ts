import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { PreRegisterServiceBase } from "./base/preRegister.service.base";

@Injectable()
export class PreRegisterService extends PreRegisterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
