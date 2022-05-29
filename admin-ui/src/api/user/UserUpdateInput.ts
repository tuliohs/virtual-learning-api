import { UsuarioTemaUpdateManyWithoutUsersInput } from "./UsuarioTemaUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  avatar?: string | null;
  bio?: string | null;
  email?: string | null;
  name?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
  userThemes?: UsuarioTemaUpdateManyWithoutUsersInput;
};
