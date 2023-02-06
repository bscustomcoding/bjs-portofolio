import Button from "@mui/material/Button/Button";
import Dialog from "@mui/material/Dialog/Dialog";
import DialogActions from "@mui/material/DialogActions/DialogActions";
import DialogContent from "@mui/material/DialogContent/DialogContent";
import DialogContentText from "@mui/material/DialogContentText/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle/DialogTitle";
import TextField from "@mui/material/TextField/TextField";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
import useForm from "../../../../Hooks/useForm";

export const defaultTimeFormState = {
    id: null,
    firstName: "",
    lastName: "",
    hours: 0,
    min: 0,
  }

export default function TimeDialog({
  submitForm,
  formProps,
}: any) {
  const [openDialog, setOpenDialog] = React.useState<boolean>(false);
  const [ formState, setFormState, formValid]  = useForm(formProps || { ...defaultTimeFormState });

  const submit = () => {
    submitForm({ ...formState, ...(!formProps && {id: (Math.random() * 10).toString() + new Date() })});
    reset();
  };

  const reset = () => {
    if (!formProps) {
      setFormState(defaultTimeFormState);
    } 
    
    setOpenDialog(false)
  };

  return (
    <>
      <Button
        onClick={() => setOpenDialog(true)}
      >
        {formProps ? <EditIcon /> : <MoreTimeIcon />}
      </Button>

      <Dialog open={openDialog} onClose={reset}>
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
            value={formState.firstName}
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
            value={formState.lastName}
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
              value={formState.hours}
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
              value={formState.min}
              onChange={(event) =>
                setFormState({ ...formState, min: parseInt(event.target.value) })
              }
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => reset()}>Cancel</Button>
          <Button disabled={!formValid}
          onClick={() => submit()}>Confirm</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
