import { ScheduleConfig } from "../scheduleConfig/ScheduleConfig";
import { UsuarioTema } from "../usuarioTema/UsuarioTema";

export type User = {
  avatar: string | null;
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  roles: Array<string>;
  scheduleConfigs?: Array<ScheduleConfig>;
  updatedAt: Date;
  username: string;
  usuarioTemas?: Array<UsuarioTema>;
};
