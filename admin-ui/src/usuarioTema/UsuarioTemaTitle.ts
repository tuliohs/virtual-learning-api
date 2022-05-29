import { UsuarioTema as TUsuarioTema } from "../api/usuarioTema/UsuarioTema";

export const USUARIOTEMA_TITLE_FIELD = "id";

export const UsuarioTemaTitle = (record: TUsuarioTema): string => {
  return record.id || record.id;
};
