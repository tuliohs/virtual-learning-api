/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ThemeService } from "../theme.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Public } from "../../decorators/public.decorator";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ThemeCreateInput } from "./ThemeCreateInput";
import { ThemeWhereInput } from "./ThemeWhereInput";
import { ThemeWhereUniqueInput } from "./ThemeWhereUniqueInput";
import { ThemeFindManyArgs } from "./ThemeFindManyArgs";
import { ThemeUpdateInput } from "./ThemeUpdateInput";
import { Theme } from "./Theme";
import { UsuarioTemaFindManyArgs } from "../../usuarioTema/base/UsuarioTemaFindManyArgs";
import { UsuarioTema } from "../../usuarioTema/base/UsuarioTema";
import { UsuarioTemaWhereUniqueInput } from "../../usuarioTema/base/UsuarioTemaWhereUniqueInput";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ThemeControllerBase {
  constructor(
    protected readonly service: ThemeService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Theme",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Theme })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(@common.Body() data: ThemeCreateInput): Promise<Theme> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get()
  @swagger.ApiOkResponse({ type: [Theme] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ThemeFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Theme[]> {
    const args = plainToClass(ThemeFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @Public()
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Theme })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ThemeWhereUniqueInput
  ): Promise<Theme | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Theme",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Theme })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ThemeWhereUniqueInput,
    @common.Body() data: ThemeUpdateInput
  ): Promise<Theme | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Theme",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Theme })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ThemeWhereUniqueInput
  ): Promise<Theme | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "UsuarioTema",
    action: "read",
    possession: "any",
  })
  @common.Get("/:id/usuarioTemas")
  @ApiNestedQuery(UsuarioTemaFindManyArgs)
  async findManyUsuarioTemas(
    @common.Req() request: Request,
    @common.Param() params: ThemeWhereUniqueInput
  ): Promise<UsuarioTema[]> {
    const query = plainToClass(UsuarioTemaFindManyArgs, request.query);
    const results = await this.service.findUsuarioTemas(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        theme: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @nestAccessControl.UseRoles({
    resource: "Theme",
    action: "update",
    possession: "any",
  })
  @common.Post("/:id/usuarioTemas")
  async connectUsuarioTemas(
    @common.Param() params: ThemeWhereUniqueInput,
    @common.Body() body: UsuarioTemaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usuarioTemas: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Theme",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id/usuarioTemas")
  async updateUsuarioTemas(
    @common.Param() params: ThemeWhereUniqueInput,
    @common.Body() body: UsuarioTemaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usuarioTemas: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @nestAccessControl.UseRoles({
    resource: "Theme",
    action: "update",
    possession: "any",
  })
  @common.Delete("/:id/usuarioTemas")
  async disconnectUsuarioTemas(
    @common.Param() params: ThemeWhereUniqueInput,
    @common.Body() body: UsuarioTemaWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      usuarioTemas: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
