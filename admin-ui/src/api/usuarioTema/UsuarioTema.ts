import { Theme } from "../theme/Theme";
import { User } from "../user/User";

export type UsuarioTema = {
  createdAt: Date;
  id: string;
  theme?: Theme | null;
  updatedAt: Date;
  user?: User | null;
};
