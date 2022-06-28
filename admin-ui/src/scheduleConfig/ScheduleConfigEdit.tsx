import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";

export const ScheduleConfigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
          allowEmpty
          optionValue="value"
        />
        <TextInput label="TimeEnd" source="timeEnd" />
        <TextInput label="TimeStart" source="timeStart" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
