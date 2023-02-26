import { Box, IconButton, TextField, useMediaQuery } from "@mui/material";
import React from "react";
import {
  ColumnsInterface,
  MultiTable,
  PaginationInterface,
  TableToolbarInterface,
} from "../../../../GlobalComponents/MultiTable";
import RegistrationDialog from "../../../../GlobalComponents/RegistrationDialog";
import { UserDataContext } from "../../../../StateManagement/UserDataProvider";
import DeleteIcon from "@mui/icons-material/Delete";
import ReplayIcon from "@mui/icons-material/Replay";
import { ExtendedThemeContext } from "../../../../StateManagement/ExtendedThemeProvider";
import { useNavigate } from "react-router-dom";
import { UserDataInterface } from "../../../../StateManagement/Interfaces/UserDataInterfaces";

export const UserTable = () => {
  const { userData, updateUser, deleteUser, filterState, postUser } =
    React.useContext(UserDataContext);
  const [searchString, setSearchString] = React.useState<string>("");
//   const { theme } = React.useContext(ExtendedThemeContext);
//   const mobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const navigate = useNavigate();

  const tableToolbar: TableToolbarInterface = {
    leftCorner: <RegistrationDialog submitForm={postUser} />,
    middle: (
        <TextField
          id="filled-search"
          label="Search Users"
          type="search"
          variant="standard"
          onChange={(event) => setSearchString(event.target.value)}
        />
      ),
    rightCorner: (
      <IconButton
        onClick={() => console.log("reloading")}
        sx={{ marginRight: 1.3 }}
      >
        <ReplayIcon />
      </IconButton>
    )
  };

  const columns: Array<ColumnsInterface> = [
    {
      key: "firstName",
      columnTitle: "First Name",
      alignMent: "left",
      columnType: "TEXT",
    },
    {
      columnTitle: "Last Name",
      key: "lastName",
      alignMent: "left",
      columnType: "TEXT",
    },
    {
        columnTitle: "Age",
        key: "age",
        alignMent: "left",
        columnType: "TEXT",
      },
    { columnTitle: "Tlf", key: "tlf", alignMent: "left", columnType: "TEXT" },
    {
      columnTitle: "",
      alignMent: "right",
      columnType: "COMPONENT",
      Component: (row: UserDataInterface) => (
        <Box>
          <RegistrationDialog formProps={row} submitForm={(updatedUser: UserDataInterface) => updateUser(updatedUser)} />
          <IconButton onClick={() => deleteUser(row)}>
            <DeleteIcon sx={{ color: "customDelete" }} />
          </IconButton>
        </Box>
      ),
    },
  ];

  const pagintaionSettings: PaginationInterface = {
    rowsPerPageOptions: [5, 10, 20, 100],
    count: userData.length,
    rowsPerPage: 10,
    page: 0,
    onPageChange: () => console.log("onPAgeChange"),
    onRowsPerPageChange: () => console.log("onRowsPerPageChange"),
  };

  return (
    <MultiTable
      state={filterState(userData, searchString)}
      columns={columns}
      paginationSettings={pagintaionSettings}
      tableToolbar={tableToolbar}
    />
  );
};
