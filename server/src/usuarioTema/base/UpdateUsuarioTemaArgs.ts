/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { UsuarioTemaWhereUniqueInput } from "./UsuarioTemaWhereUniqueInput";
import { UsuarioTemaUpdateInput } from "./UsuarioTemaUpdateInput";

@ArgsType()
class UpdateUsuarioTemaArgs {
  @Field(() => UsuarioTemaWhereUniqueInput, { nullable: false })
  where!: UsuarioTemaWhereUniqueInput;
  @Field(() => UsuarioTemaUpdateInput, { nullable: false })
  data!: UsuarioTemaUpdateInput;
}

export { UpdateUsuarioTemaArgs };
