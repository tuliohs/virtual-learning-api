import { UsuarioTemaCreateNestedManyWithoutUsersInput } from "./UsuarioTemaCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
  userThemes?: UsuarioTemaCreateNestedManyWithoutUsersInput;
};
