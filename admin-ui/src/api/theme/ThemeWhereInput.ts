import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ThemeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
