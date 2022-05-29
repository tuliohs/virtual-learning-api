import { ThemeWhereInput } from "./ThemeWhereInput";
import { ThemeOrderByInput } from "./ThemeOrderByInput";

export type ThemeFindManyArgs = {
  where?: ThemeWhereInput;
  orderBy?: Array<ThemeOrderByInput>;
  skip?: number;
  take?: number;
};
