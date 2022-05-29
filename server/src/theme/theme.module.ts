import { Module } from "@nestjs/common";
import { ThemeModuleBase } from "./base/theme.module.base";
import { ThemeService } from "./theme.service";
import { ThemeController } from "./theme.controller";
import { ThemeResolver } from "./theme.resolver";

@Module({
  imports: [ThemeModuleBase],
  controllers: [ThemeController],
  providers: [ThemeService, ThemeResolver],
  exports: [ThemeService],
})
export class ThemeModule {}
