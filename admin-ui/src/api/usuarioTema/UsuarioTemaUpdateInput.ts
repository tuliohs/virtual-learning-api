import { ThemeWhereUniqueInput } from "../theme/ThemeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsuarioTemaUpdateInput = {
  theme?: ThemeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
