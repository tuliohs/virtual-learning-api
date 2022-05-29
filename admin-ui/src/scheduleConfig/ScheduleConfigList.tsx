import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ScheduleConfigList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ScheduleConfigs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="DayWeek" source="dayWeek" />
        <TextField label="ID" source="id" />
        <ReferenceField label="IdUser" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="TimeEnd" source="timeEnd" />
        <TextField label="TimeStart" source="timeStart" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
