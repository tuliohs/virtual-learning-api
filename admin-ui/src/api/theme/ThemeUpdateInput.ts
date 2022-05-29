import { UsuarioTemaUpdateManyWithoutThemesInput } from "./UsuarioTemaUpdateManyWithoutThemesInput";

export type ThemeUpdateInput = {
  description?: string | null;
  name?: string;
  usuarioTemas?: UsuarioTemaUpdateManyWithoutThemesInput;
};
