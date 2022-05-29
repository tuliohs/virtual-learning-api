import { ThemeWhereUniqueInput } from "../theme/ThemeWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsuarioTemaUpdateInput = {
  idTema?: ThemeWhereUniqueInput;
  idUser?: UserWhereUniqueInput;
};
