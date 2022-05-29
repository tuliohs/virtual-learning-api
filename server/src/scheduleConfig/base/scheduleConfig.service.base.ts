/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, ScheduleConfig, User } from "@prisma/client";

export class ScheduleConfigServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ScheduleConfigFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleConfigFindManyArgs>
  ): Promise<number> {
    return this.prisma.scheduleConfig.count(args);
  }

  async findMany<T extends Prisma.ScheduleConfigFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleConfigFindManyArgs>
  ): Promise<ScheduleConfig[]> {
    return this.prisma.scheduleConfig.findMany(args);
  }
  async findOne<T extends Prisma.ScheduleConfigFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleConfigFindUniqueArgs>
  ): Promise<ScheduleConfig | null> {
    return this.prisma.scheduleConfig.findUnique(args);
  }
  async create<T extends Prisma.ScheduleConfigCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleConfigCreateArgs>
  ): Promise<ScheduleConfig> {
    return this.prisma.scheduleConfig.create<T>(args);
  }
  async update<T extends Prisma.ScheduleConfigUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleConfigUpdateArgs>
  ): Promise<ScheduleConfig> {
    return this.prisma.scheduleConfig.update<T>(args);
  }
  async delete<T extends Prisma.ScheduleConfigDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScheduleConfigDeleteArgs>
  ): Promise<ScheduleConfig> {
    return this.prisma.scheduleConfig.delete(args);
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.scheduleConfig
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
