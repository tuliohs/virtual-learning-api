import { Theme } from "../theme/Theme";
import { User } from "../user/User";

export type UsuarioTema = {
  createdAt: Date;
  id: string;
  idTema?: Theme;
  idUser?: User;
  updatedAt: Date;
};
