import { ThemeWhereUniqueInput } from "./ThemeWhereUniqueInput";
import { ThemeUpdateInput } from "./ThemeUpdateInput";

export type UpdateThemeArgs = {
  where: ThemeWhereUniqueInput;
  data: ThemeUpdateInput;
};
