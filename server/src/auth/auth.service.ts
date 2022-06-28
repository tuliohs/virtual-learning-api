import { Injectable, UnauthorizedException } from "@nestjs/common";
// @ts-ignore
// eslint-disable-next-line
import { UserService } from "../user/user.service";
import { Credentials } from "./Credentials";
import { PasswordService } from "./password.service";
import { SignUpInput } from "./SignUpInput";
import { TokenService } from "./token.service";
import { UserInfo } from "./UserInfo";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly passwordService: PasswordService,
    private readonly tokenService: TokenService
  ) {}

  async validateUser(
    username: string,
    password: string
  ): Promise<UserInfo | null> {
    const user = await this.userService.findOne({
      where: { username },
    });
    if (user && (await this.passwordService.compare(password, user.password))) {
      const { roles } = user;
      return { username, roles };
    }
    return null;
  }
  async login(credentials: Credentials): Promise<UserInfo> {
    const { username, password } = credentials;
    const user = await this.validateUser(
      credentials.username,
      credentials.password
    );
    if (!user) {
      throw new UnauthorizedException("The passed credentials are incorrect");
    }
    //@ts-ignore
    const accessToken = await this.tokenService.createToken(username, password);
    return {
      accessToken,
      ...user,
    };
  }
  async signup(credentials: SignUpInput): Promise<UserInfo> {
    // Extract the username and password from the body of the request
    const { email, bio,avatar,name } = credentials;
    // Here we attempt to create a new user
    const user = await this.userService.create({
      data: {
        username:email,
        bio,
        avatar,
        name:name || email?.split('@')[0] ,
        //TODO mudar senha padrão
        password:"123456",
        email , 
        //TODO verificar role padão 
        roles: ['user'], // Here we assign every new user the `Todo User` role
      },
    });
    // If creating a new user fails throw an error
    if (!user) {
     throw new UnauthorizedException("Could not create user");
    }
    // Create an access token for the newly created user
    //@ts-ignore
    const accessToken = await this.tokenService.createToken(email, user.password);
    // Return the access token as well as the some details about the user
    return {
      accessToken,
      username: user.username,
      id: user.id,
      roles: user.roles,
    };
  }
}
