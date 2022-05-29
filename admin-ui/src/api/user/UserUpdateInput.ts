import { UsuarioTemaUpdateManyWithoutUsersInput } from "./UsuarioTemaUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
  userThemes?: UsuarioTemaUpdateManyWithoutUsersInput;
};
