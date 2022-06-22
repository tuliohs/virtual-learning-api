import { InputType } from "@nestjs/graphql";
import { UserCreateInput } from "src/user/base/UserCreateInput";

@InputType()
class SignUpInput extends   UserCreateInput {
  constructor() {
    super();
     this.password="123";
     //TODO mudar implementação
     this.username="Preenchido depois";
     this.roles=["Preenchido depois"];
  }
}
export { SignUpInput };
