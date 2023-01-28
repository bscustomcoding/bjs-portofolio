import DeleteIcon from "@mui/icons-material/Delete";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import { Card, IconButton, TablePagination } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { DataContext } from "../../../../StateManagement/DataProvider";
import TimeDialog from "./TimeDialog";

export default function TimeSheet() {
  const [timeDialogOpen, setTimeDialogOpen] = React.useState(false);
  const { timeSheets, setTimeSheets } = React.useContext(DataContext);

  return (
    <>
      <TimeDialog
        open={timeDialogOpen}
        closeDialog={() => setTimeDialogOpen(false)}
        submitForm={(formState: any) =>
          setTimeSheets([...timeSheets, formState])
        }
      />
      <Card sx={{ maxHeight: "88vh", width: "75vw" }}>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            sx={{ fontSize: "40px", mr: 1.5, mt: 1.5 }}
            onClick={() => setTimeDialogOpen(true)}
          >
            <MoreTimeIcon />
          </IconButton>
        </div>

        <CardContent>
          <TableContainer sx={{ maxHeight: "75vh", width: "73vw" }}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sortDirection={'desc'} >Name</TableCell>
                  <TableCell align="center">Time</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {timeSheets.map((row: any) => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.lastName} - {row.firstName}
                    </TableCell>
                    <TableCell align="center">
                      {row.hours}h - {row.min}m
                    </TableCell>
                    <TableCell align="right">
                      <IconButton
                        onClick={() =>
                          setTimeSheets(
                            timeSheets.filter(
                              (sheet: any) => sheet.id !== row.id
                            )
                          )
                        }
                      >
                        <DeleteIcon sx={{ color: "customDelete" }} />
                      </IconButton>
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
            page={0}
            onPageChange={() => console.log("yoooo")}
            onRowsPerPageChange={() => console.log("yoooo")}
          />
        </CardContent>
      </Card>
    </>
  );
}
