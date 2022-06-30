import { PreRegister as TPreRegister } from "../api/preRegister/PreRegister";

export const PREREGISTER_TITLE_FIELD = "name";

export const PreRegisterTitle = (record: TPreRegister): string => {
  return record.name || record.id;
};
