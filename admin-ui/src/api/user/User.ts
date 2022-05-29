import { UsuarioTema } from "../usuarioTema/UsuarioTema";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
  userThemes?: Array<UsuarioTema>;
};
