import { TextField } from "@mui/material";
import * as React from "react";
import { ColumnsInterface, MultiTable } from "../../../../GlobalComponents/MultiTable";
import { DataContext } from "../../../../StateManagement/DataProvider";

export default function TimeSheet() {
  const { timeSheets, setTimeSheets } = React.useContext(DataContext);
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
  ];

  return (
    <MultiTable
      state={timeSheets}
      columns={columns}
    />
  );
}
