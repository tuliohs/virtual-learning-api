/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ScheduleConfigWhereUniqueInput } from "../../scheduleConfig/base/ScheduleConfigWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ScheduleConfigUpdateManyWithoutUsersInput {
  @Field(() => [ScheduleConfigWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScheduleConfigWhereUniqueInput],
  })
  connect?: Array<ScheduleConfigWhereUniqueInput>;

  @Field(() => [ScheduleConfigWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScheduleConfigWhereUniqueInput],
  })
  disconnect?: Array<ScheduleConfigWhereUniqueInput>;

  @Field(() => [ScheduleConfigWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ScheduleConfigWhereUniqueInput],
  })
  set?: Array<ScheduleConfigWhereUniqueInput>;
}
export { ScheduleConfigUpdateManyWithoutUsersInput };
