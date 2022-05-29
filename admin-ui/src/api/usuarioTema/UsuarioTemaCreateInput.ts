import { ThemeWhereUniqueInput } from "../theme/ThemeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsuarioTemaCreateInput = {
  theme?: ThemeWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
