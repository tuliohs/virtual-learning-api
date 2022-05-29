import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ThemeTitle } from "../theme/ThemeTitle";
import { UserTitle } from "../user/UserTitle";

export const UsuarioTemaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="theme.id" reference="Theme" label="IdTema">
          <SelectInput optionText={ThemeTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="IdUser">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
