import DeleteIcon from '@mui/icons-material/Delete';
import {
  Box,
  Button,
  Container,
  CssBaseline, TextField,
  Typography
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { capitalizer } from "../globalFunctions/converters";
import useForm from "../Hooks/useForm";

export const defaultTimeFormState = {
  firstName: "",
  lastName: "",
  tlf: null,
  age: null,
};

export const RegistrationForm = ({
  submitForm,
  btnTitle,
  headerTitle,
  formProps,
  marginTop,
  deleteUser
}: any) => {
  const { state } = useLocation();
  const [formState, setFormState, formValid] = useForm(
    formProps || state || { ...defaultTimeFormState },
    ["id"]
  );
  
  const submit = () => {
    submitForm({
      ...formState
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: marginTop,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          {state ? 'Edit user' : headerTitle} 
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="First Name"
            name="firstname"
            type="text"
            value={formState.firstName}
            onChange={(event) =>
              setFormState({
                ...formState,
                firstName: capitalizer(event.target.value),
              })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="lastname"
            label="Last Name"
            type="text"
            value={formState.lastName}
            onChange={(event) =>
              setFormState({
                ...formState,
                lastName: capitalizer(event.target.value),
              })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="age"
            label="Age"
            type="number"
            value={formState.age}
            onChange={(event) =>
              setFormState({ ...formState, age: parseInt(event.target.value) })
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="tlf"
            label="Tlf"
            type="text"
            value={formState.tlf}
            onChange={(event) =>
              setFormState({ ...formState, tlf: parseInt(event.target.value) })
            }
          />
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <Button
            disabled={!formValid}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => submit()}
          >
            { state ? 'Edit' : btnTitle}
          </Button>
          {state && <Button sx={{ pt: 1.5, color: "customDelete" }}  onClick={() => deleteUser(formState)}>
            <DeleteIcon />
            </Button>}
            </Box>
        </Box>
      </Box>
    </Container>
  );
};
