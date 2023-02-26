import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import { useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button/Button";
import Dialog from "@mui/material/Dialog/Dialog";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ExtendedThemeContext } from "../StateManagement/ExtendedThemeProvider";
import { ObjectType } from "../StateManagement/Interfaces/GlobalInterfaces";
import { RegistrationForm } from "./RegistrationForm";

export default function TimeDialog({  formProps, submitForm }: { formProps?: ObjectType; submitForm: (data: ObjectType) => void }) {
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const { theme } = React.useContext(ExtendedThemeContext);
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();
  
  return (
    <>
      <Button onClick={(e) => { mobile ? navigate('/admin/register-form', {state: formProps}) :  setOpenDialog(true) }}>
        {formProps ? <EditIcon /> : <AddIcon />}
      </Button>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <RegistrationForm
          marginTop={3}
          formProps={formProps}
          headerTitle={formProps ? "Edit user" : "Register new users"}
          btnTitle={formProps ? "Edit" : "Register"}
          submitForm={(user: any) => {
            submitForm(user);
            setOpenDialog(false);
          }}
        />
      </Dialog>
    </>
  );
}
