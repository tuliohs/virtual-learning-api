import { ThemeWhereUniqueInput } from "../theme/ThemeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsuarioTemaCreateInput = {
  idTema: ThemeWhereUniqueInput;
  idUser: UserWhereUniqueInput;
};
