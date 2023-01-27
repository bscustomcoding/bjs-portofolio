import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Card, IconButton, TablePagination } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { TheemeContext } from "../../../../StateManagement/ThemeProvider";
import { DataContext } from "../../../../StateManagement/DataProvider";
import MoreTimeIcon from "@mui/icons-material/MoreTime";

export default function TimeSheet() {
  const { themePalette } = React.useContext(TheemeContext);
  const { timeSheets } = React.useContext(DataContext);

  return (
    <Card sx={{ maxHeight: "83vh" }}>
      <IconButton sx={{ width: "100%", fontSize: "40px" }} onClick={() => {}}>
        <MoreTimeIcon />
      </IconButton>
      <CardContent>
        <TableContainer sx={{ maxHeight: "73vh" }}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Time</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {timeSheets.map((row: any) => (
                <TableRow
                  key={row.name.lastName}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name.lastName} - {row.name.firstName}
                  </TableCell>
                  <TableCell align="center">
                    {row.time.hours}h - {row.time.min}m
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={timeSheets.length}
          rowsPerPage={10}
          page={1}
          onPageChange={() => console.log("yoooo")}
          onRowsPerPageChange={() => console.log("yoooo")}
        />
      </CardContent>
    </Card>
  );
}
