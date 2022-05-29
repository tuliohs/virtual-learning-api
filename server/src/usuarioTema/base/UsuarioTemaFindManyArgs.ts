/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UsuarioTemaWhereInput } from "./UsuarioTemaWhereInput";
import { Type } from "class-transformer";
import { UsuarioTemaOrderByInput } from "./UsuarioTemaOrderByInput";

@ArgsType()
class UsuarioTemaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => UsuarioTemaWhereInput,
  })
  @Field(() => UsuarioTemaWhereInput, { nullable: true })
  @Type(() => UsuarioTemaWhereInput)
  where?: UsuarioTemaWhereInput;

  @ApiProperty({
    required: false,
    type: [UsuarioTemaOrderByInput],
  })
  @Field(() => [UsuarioTemaOrderByInput], { nullable: true })
  @Type(() => UsuarioTemaOrderByInput)
  orderBy?: Array<UsuarioTemaOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { UsuarioTemaFindManyArgs };
