import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { GuestList } from "./guest/GuestList";
import { GuestCreate } from "./guest/GuestCreate";
import { GuestEdit } from "./guest/GuestEdit";
import { GuestShow } from "./guest/GuestShow";
import { InvitationList } from "./invitation/InvitationList";
import { InvitationCreate } from "./invitation/InvitationCreate";
import { InvitationEdit } from "./invitation/InvitationEdit";
import { InvitationShow } from "./invitation/InvitationShow";
import { GuestAttendanceList } from "./guestAttendance/GuestAttendanceList";
import { GuestAttendanceCreate } from "./guestAttendance/GuestAttendanceCreate";
import { GuestAttendanceEdit } from "./guestAttendance/GuestAttendanceEdit";
import { GuestAttendanceShow } from "./guestAttendance/GuestAttendanceShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"WeddingInvitationCMS"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Guest"
          list={GuestList}
          edit={GuestEdit}
          create={GuestCreate}
          show={GuestShow}
        />
        <Resource
          name="Invitation"
          list={InvitationList}
          edit={InvitationEdit}
          create={InvitationCreate}
          show={InvitationShow}
        />
        <Resource
          name="GuestAttendance"
          list={GuestAttendanceList}
          edit={GuestAttendanceEdit}
          create={GuestAttendanceCreate}
          show={GuestAttendanceShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
