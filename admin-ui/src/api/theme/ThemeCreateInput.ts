import { UsuarioTemaCreateNestedManyWithoutThemesInput } from "./UsuarioTemaCreateNestedManyWithoutThemesInput";

export type ThemeCreateInput = {
  description?: string | null;
  name: string;
  userTheme?: UsuarioTemaCreateNestedManyWithoutThemesInput;
};
