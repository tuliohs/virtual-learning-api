import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UserCreateInput } from "src/user/base/UserCreateInput";
import { AuthService } from "./auth.service";
import { Credentials } from "./Credentials";
import { SignUpInput } from "./SignUpInput";
import { UserInfo } from "./UserInfo";

@ApiTags("auth")
@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post("login")
  async login(@Body() body: Credentials): Promise<UserInfo> {
    return this.authService.login(body);
  }
  @Post("signup")
  async signup(@Body() body: SignUpInput): Promise<UserInfo> {
    return this.authService.signup(body);
  }
}
