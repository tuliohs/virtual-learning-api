import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { CourseList } from "./course/CourseList";
import { CourseCreate } from "./course/CourseCreate";
import { CourseEdit } from "./course/CourseEdit";
import { CourseShow } from "./course/CourseShow";
import { ThemeList } from "./theme/ThemeList";
import { ThemeCreate } from "./theme/ThemeCreate";
import { ThemeEdit } from "./theme/ThemeEdit";
import { ThemeShow } from "./theme/ThemeShow";
import { UsuarioTemaList } from "./usuarioTema/UsuarioTemaList";
import { UsuarioTemaCreate } from "./usuarioTema/UsuarioTemaCreate";
import { UsuarioTemaEdit } from "./usuarioTema/UsuarioTemaEdit";
import { UsuarioTemaShow } from "./usuarioTema/UsuarioTemaShow";
import { ScheduleConfigList } from "./scheduleConfig/ScheduleConfigList";
import { ScheduleConfigCreate } from "./scheduleConfig/ScheduleConfigCreate";
import { ScheduleConfigEdit } from "./scheduleConfig/ScheduleConfigEdit";
import { ScheduleConfigShow } from "./scheduleConfig/ScheduleConfigShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"virtual-learning"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Course"
          list={CourseList}
          edit={CourseEdit}
          create={CourseCreate}
          show={CourseShow}
        />
        <Resource
          name="Theme"
          list={ThemeList}
          edit={ThemeEdit}
          create={ThemeCreate}
          show={ThemeShow}
        />
        <Resource
          name="UsuarioTema"
          list={UsuarioTemaList}
          edit={UsuarioTemaEdit}
          create={UsuarioTemaCreate}
          show={UsuarioTemaShow}
        />
        <Resource
          name="ScheduleConfig"
          list={ScheduleConfigList}
          edit={ScheduleConfigEdit}
          create={ScheduleConfigCreate}
          show={ScheduleConfigShow}
        />
      </Admin>
    </div>
  );
};

export default App;
