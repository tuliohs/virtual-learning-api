import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const PreRegisterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="Message" multiline source="message" />
        <TextInput label="Name" source="name" />
        <TextInput label="Origin" source="origin" />
        <TextInput label="Phone" source="phone" />
        <BooleanInput label="Processed" source="processed" />
      </SimpleForm>
    </Edit>
  );
};
