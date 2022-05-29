import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ThemeServiceBase } from "./base/theme.service.base";

@Injectable()
export class ThemeService extends ThemeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
