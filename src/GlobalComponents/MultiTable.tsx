import {
  Box,
  Card,
  Container,
  TablePagination,
  useMediaQuery,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ExtendedThemeContext } from "../StateManagement/ExtendedThemeProvider";
import {
  ArrayObjectType,
  GbComponentType,
  GlbObjectVoid,
  GlbVoid,
  ObjectType,
} from "../StateManagement/Interfaces/GlobalInterfaces";

export const MultiTable = ({
  state,
  columns,
  pushData,
  updateData,
  deleteData,
  tableToolbar,
  reload,
  paginationSettings,
}: {
  state?: ArrayObjectType;
  columns?: Array<ColumnsInterface>;
  search?: (searchString: string) => void;
  pushData?: GlbObjectVoid;
  updateData?: GlbObjectVoid;
  deleteData?: GlbObjectVoid;
  tableToolbar?: TableToolbarInterface;
  reload?: GlbVoid;
  paginationSettings?: PaginationInterface;
}) => {
  const { theme } = React.useContext(ExtendedThemeContext);
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Container sx={{ maxHeight: "86vh", width: "100%" }}>
      <Card>
        {tableToolbar && (
          <Box sx={{ display: "flex", justifyContent: "space-between", pt: 1 }}>
            {tableToolbar.leftCorner || <Box sx={{ display: "flex" }}></Box>}
            {tableToolbar.middle || <Box sx={{ display: "flex" }}></Box>}
            {tableToolbar.rightCorner || <Box sx={{ display: "flex" }}></Box>}
          </Box>
        )}

        <CardContent sx={{ width: "100%", maxHeight: "100%" }}>
          <TableContainer sx={{ maxHeight: "65vh", width: "100%" }}>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  {columns?.map((headerCell: ColumnsInterface) => {
                    return (
                      <TableCell align={headerCell?.alignMent}>
                        {headerCell.columnTitle}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>

              <TableBody>
                {state?.map((row: ObjectType) => (
                  <TableRow
                    onClick={() =>
                      mobile && navigate("/admin/register-form", { state: row })
                    }
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {columns?.map((col: ObjectType) =>
                      col.columnType === "TEXT" ? (
                        <TableCell component="th" align={col.align} scope="row">
                          {row[col.key]}
                        </TableCell>
                      ) : col.columnType === "COMPONENT" ? (
                        <TableCell
                          align={col.alignMent}
                          component="th"
                          scope="row"
                        >
                          {col.Component(row)}
                        </TableCell>
                      ) : null
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {paginationSettings && (
            <TablePagination
              sx={{ borderTop: 0 }}
              rowsPerPageOptions={paginationSettings?.rowsPerPageOptions}
              component="div"
              count={paginationSettings?.count}
              rowsPerPage={paginationSettings?.rowsPerPage}
              page={paginationSettings?.page}
              onPageChange={paginationSettings?.onPageChange}
              onRowsPerPageChange={paginationSettings?.onRowsPerPageChange}
            />
          )}
        </CardContent>
      </Card>
    </Container>
  );
};

export interface ColumnsInterface {
  key?: string;
  columnTitle?: string;
  alignMent?: "left" | "right" | "center";
  id?: string;
  columnType?: "TEXT" | "COMPONENT";
  Component?: GbComponentType;
  sort?: {
    direction: SortDirectionType;
    sortBy: string;
  };
}

export interface PaginationInterface {
  rowsPerPageOptions: Array<number>;
  count: number;
  rowsPerPage: number;
  page: number;
  onPageChange: GlbVoid;
  onRowsPerPageChange: GlbVoid;
}

export interface TableToolbarInterface {
  leftCorner?: GbComponentType;
  middle?: GbComponentType;
  rightCorner?: GbComponentType;
}
type SortDirectionType = "ASC" | "DESC" | "NONE";
