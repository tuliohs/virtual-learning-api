import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ScheduleConfigCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="dayWeek"
          label="DayWeek"
          choices={[
            { label: "Segunda", value: "segunda" },
            { label: "Terça", value: "terca" },
            { label: "Quarta", value: "quarta" },
            { label: "Quinta", value: "quinta" },
            { label: "Sexta", value: "sexta" },
            { label: "Sábado", value: "sabado" },
            { label: "Domingo", value: "domingo" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="IdUser">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="TimeEnd" source="timeEnd" />
        <TextInput label="TimeStart" source="timeStart" />
      </SimpleForm>
    </Create>
  );
};
