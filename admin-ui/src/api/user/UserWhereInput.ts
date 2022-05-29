import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsuarioTemaListRelationFilter } from "../usuarioTema/UsuarioTemaListRelationFilter";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  userThemes?: UsuarioTemaListRelationFilter;
};
