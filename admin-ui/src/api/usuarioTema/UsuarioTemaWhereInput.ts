import { StringFilter } from "../../util/StringFilter";
import { ThemeWhereUniqueInput } from "../theme/ThemeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsuarioTemaWhereInput = {
  id?: StringFilter;
  theme?: ThemeWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
