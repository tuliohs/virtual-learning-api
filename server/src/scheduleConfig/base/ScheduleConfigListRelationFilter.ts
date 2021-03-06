/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScheduleConfigWhereInput } from "./ScheduleConfigWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ScheduleConfigListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ScheduleConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => ScheduleConfigWhereInput)
  @IsOptional()
  @Field(() => ScheduleConfigWhereInput, {
    nullable: true,
  })
  every?: ScheduleConfigWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScheduleConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => ScheduleConfigWhereInput)
  @IsOptional()
  @Field(() => ScheduleConfigWhereInput, {
    nullable: true,
  })
  some?: ScheduleConfigWhereInput;

  @ApiProperty({
    required: false,
    type: () => ScheduleConfigWhereInput,
  })
  @ValidateNested()
  @Type(() => ScheduleConfigWhereInput)
  @IsOptional()
  @Field(() => ScheduleConfigWhereInput, {
    nullable: true,
  })
  none?: ScheduleConfigWhereInput;
}
export { ScheduleConfigListRelationFilter };
