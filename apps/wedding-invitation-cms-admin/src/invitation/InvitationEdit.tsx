import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const InvitationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="link" source="link" />
      </SimpleForm>
    </Edit>
  );
};
