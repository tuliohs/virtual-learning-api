import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScheduleConfigListRelationFilter } from "../scheduleConfig/ScheduleConfigListRelationFilter";
import { UsuarioTemaListRelationFilter } from "../usuarioTema/UsuarioTemaListRelationFilter";

export type UserWhereInput = {
  avatar?: StringNullableFilter;
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  scheduleConfigs?: ScheduleConfigListRelationFilter;
  username?: StringFilter;
  userThemes?: UsuarioTemaListRelationFilter;
};
