import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { THEME_TITLE_FIELD } from "../theme/ThemeTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UsuarioTemaShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="IdTema" source="theme.id" reference="Theme">
          <TextField source={THEME_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="IdUser" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
