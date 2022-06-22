import { ScheduleConfigCreateNestedManyWithoutUsersInput } from "./ScheduleConfigCreateNestedManyWithoutUsersInput";
import { UsuarioTemaCreateNestedManyWithoutUsersInput } from "./UsuarioTemaCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  avatar?: string | null;
  bio?: string | null;
  email: string;
  name?: string | null;
  password: string;
  roles: Array<string>;
  scheduleConfigs?: ScheduleConfigCreateNestedManyWithoutUsersInput;
  username: string;
  usuarioTemas?: UsuarioTemaCreateNestedManyWithoutUsersInput;
};
