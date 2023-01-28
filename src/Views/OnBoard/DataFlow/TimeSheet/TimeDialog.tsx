import Button from "@mui/material/Button/Button";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import TextField from "@mui/material/TextField/TextField";
import * as React from "react";

export const defaultTimeFormState = {
    id: null,
    firstName: "",
    lastName: "",
    hours: 0,
    min: 0,
    description: "",
    workAddress: {
      postNr: 0,
      streetName: "",
      streetNr: 0,
    },
  }

export default function TimeDialog({
  open,
  closeDialog,
  submitForm,
  formProps,
}: any) {
  const [formState, setFormState] = React.useState(formProps || { ...defaultTimeFormState, workAddress: { ...defaultTimeFormState.workAddress } });
  const [formValid, setFormValid] = React.useState(true);

  const submit = () => {
    submitForm({ ...formState, id: (Math.random() * 10).toString() + new Date() });
    reset();
  };

  const reset = () => {
    setFormState(defaultTimeFormState);
    closeDialog();
  };

  return (
    <>
      <Dialog open={open} onClose={closeDialog}>
        <DialogTitle>Time Sheet</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill inn your time sheet
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) =>
              setFormState({ ...formState, firstName: event.target.value })
            }
          />
          <TextField
            autoFocus
            margin="dense"
            id="lastNAme"
            label="Last name"
            type="text"
            fullWidth
            variant="standard"
            onChange={(event) =>
              setFormState({ ...formState, lastName: event.target.value })
            }
          />
          <div style={{ display: "flex", flexDirection: "row" }}>
            <TextField
              autoFocus
              margin="dense"
              id="lastNAme"
              label="Hours"
              type="number"
              fullWidth
              variant="standard"
              onChange={(event) =>
                setFormState({ ...formState, hours: parseInt(event.target.value) })
              }
            />
            <TextField
              autoFocus
              margin="dense"
              id="lastNAme"
              label="Minutes"
              type="number"
              fullWidth
              variant="standard"
              onChange={(event) =>
                setFormState({ ...formState, min: parseInt(event.target.value) })
              }
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog()}>Cancel</Button>
          <Button 
          disabled={!formValid}
          onClick={() => submit()}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
