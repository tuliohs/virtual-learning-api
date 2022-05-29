import { Theme as TTheme } from "../api/theme/Theme";

export const THEME_TITLE_FIELD = "name";

export const ThemeTitle = (record: TTheme): string => {
  return record.name || record.id;
};
