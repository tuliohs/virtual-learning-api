/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { UsuarioTemaWhereUniqueInput } from "../../usuarioTema/base/UsuarioTemaWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class UsuarioTemaUpdateManyWithoutThemesInput {
  @Field(() => [UsuarioTemaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UsuarioTemaWhereUniqueInput],
  })
  connect?: Array<UsuarioTemaWhereUniqueInput>;

  @Field(() => [UsuarioTemaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UsuarioTemaWhereUniqueInput],
  })
  disconnect?: Array<UsuarioTemaWhereUniqueInput>;

  @Field(() => [UsuarioTemaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [UsuarioTemaWhereUniqueInput],
  })
  set?: Array<UsuarioTemaWhereUniqueInput>;
}
export { UsuarioTemaUpdateManyWithoutThemesInput };