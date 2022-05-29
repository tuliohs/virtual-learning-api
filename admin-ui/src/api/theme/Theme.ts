import { UsuarioTema } from "../usuarioTema/UsuarioTema";

export type Theme = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  updatedAt: Date;
  usuarioTemas?: Array<UsuarioTema>;
};
