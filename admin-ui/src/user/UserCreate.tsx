import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
  ReferenceArrayInput,
} from "react-admin";

import { ScheduleConfigTitle } from "../scheduleConfig/ScheduleConfigTitle";
import { UsuarioTemaTitle } from "../usuarioTema/UsuarioTemaTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Avatar" source="avatar" />
        <TextInput label="Bio" source="bio" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Name" source="name" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput
          source="scheduleConfigs"
          reference="ScheduleConfig"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScheduleConfigTitle} />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
        <ReferenceArrayInput
          source="usuarioTemas"
          reference="UsuarioTema"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UsuarioTemaTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
