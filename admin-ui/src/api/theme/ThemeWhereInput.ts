import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsuarioTemaListRelationFilter } from "../usuarioTema/UsuarioTemaListRelationFilter";

export type ThemeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  usuarioTemas?: UsuarioTemaListRelationFilter;
};
