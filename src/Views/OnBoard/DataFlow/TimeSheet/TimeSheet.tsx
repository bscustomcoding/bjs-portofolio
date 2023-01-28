import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import {
  Card,
  Container,
  IconButton,
  Paper,
  TablePagination,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import { TheemeContext } from "../../../../StateManagement/ThemeProvider";
import { DataContext } from "../../../../StateManagement/DataProvider";
import MoreTimeIcon from "@mui/icons-material/MoreTime";

export default function TimeSheet() {
  const { timeSheets } = React.useContext(DataContext);

  return (
    <Card sx={{ maxHeight: "87vh", width: '75vw' }}>
      <Container sx={{  display: 'flex', justifyContent: 'center' }}>
        <IconButton sx={{ fontSize: "40px", mt: 1 }} onClick={() => {}}>
          <MoreTimeIcon />
        </IconButton>
      </Container>

      <CardContent>
        <TableContainer sx={{ maxHeight: "75vh", width: "73vw" }}>
          <Table aria-label="simple table" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="center">Time</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {timeSheets.map((row: any) => (
                <TableRow
                  key={row.id}
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
          sx={{ borderTop: 0 }}
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
