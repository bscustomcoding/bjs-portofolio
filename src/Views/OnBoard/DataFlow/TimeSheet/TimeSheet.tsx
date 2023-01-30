import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Card, IconButton, TablePagination } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { DataContext } from "../../../../StateManagement/DataProvider";
import { TimeSheetInterface } from "../../../../StateManagement/Interfaces/Infaces";
import TimeDialog from "./TimeDialog";

export default function TimeSheet() {
  const { timeSheets, setTimeSheets } = React.useContext(DataContext);

  return (
    <>
      <Card sx={{ maxHeight: "87vh", width: "100%", minWidth: 450 }}>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
          <TimeDialog
            submitForm={(formState: TimeSheetInterface) =>
              setTimeSheets([...timeSheets, formState])
            }
          />
        </Box>

        <CardContent sx={{ width: "100%", maxHeight: "80vh" }}>
          <TableContainer sx={{ maxHeight: "72vh", width: "100%" }}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell sortDirection={"desc"}>Name</TableCell>
                  <TableCell align="center">Time</TableCell>
                  <TableCell align="right"></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {timeSheets.map((row: TimeSheetInterface, index: number) => (
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
                      <TimeDialog
                        formProps={row}
                        submitForm={(formState: TimeSheetInterface) =>
                          setTimeSheets(
                            timeSheets.map((sheet: TimeSheetInterface) => {
                              return sheet.id === formState.id
                                ? formState
                                : sheet;
                            })
                          )
                        }
                      />
                      <IconButton
                        onClick={() =>
                          setTimeSheets(
                            timeSheets.filter(
                              (sheet: TimeSheetInterface) => sheet.id !== row.id
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
