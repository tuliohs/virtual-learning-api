import { ScheduleConfigCreateNestedManyWithoutUsersInput } from "./ScheduleConfigCreateNestedManyWithoutUsersInput";
import { UsuarioTemaCreateNestedManyWithoutUsersInput } from "./UsuarioTemaCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  avatar?: string | null;
  bio?: string | null;
  email?: string | null;
  name?: string | null;
  password: string;
  roles: Array<string>;
  scheduleConfigs?: ScheduleConfigCreateNestedManyWithoutUsersInput;
  username: string;
  userThemes?: UsuarioTemaCreateNestedManyWithoutUsersInput;
};
