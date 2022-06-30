import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PreRegisterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Message" multiline source="message" />
        <TextInput label="Name" source="name" />
        <TextInput label="Origin" source="origin" />
        <TextInput label="Phone" source="phone" />
        <BooleanInput label="Processed" source="processed" />
      </SimpleForm>
    </Create>
  );
};
