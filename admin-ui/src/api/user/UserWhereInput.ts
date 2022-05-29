import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UsuarioTemaListRelationFilter } from "../usuarioTema/UsuarioTemaListRelationFilter";

export type UserWhereInput = {
  avatar?: StringNullableFilter;
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  username?: StringFilter;
  userThemes?: UsuarioTemaListRelationFilter;
};
