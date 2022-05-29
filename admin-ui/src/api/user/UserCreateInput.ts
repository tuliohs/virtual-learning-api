import { UsuarioTemaCreateNestedManyWithoutUsersInput } from "./UsuarioTemaCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  avatar?: string | null;
  bio?: string | null;
  email?: string | null;
  name?: string | null;
  password: string;
  roles: Array<string>;
  username: string;
  userThemes?: UsuarioTemaCreateNestedManyWithoutUsersInput;
};
