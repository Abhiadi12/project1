import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import { TableBody } from "@material-ui/core";
function useTable(rows, page, rowPerPage) {
  // COL_DEF is a object which contains info about my table columns
  const tableHeadRender = (COL_DEF) => (
    <TableHead>
      <TableRow>
        {COL_DEF.map((colObj, idx) => (
          <TableCell key={idx} {...colObj.options}>
            {colObj.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );

  const tableBodyRender = () => (
    <TableBody>
      {rows
        .slice((page - 1) * rowPerPage)
        .slice(0, rowPerPage)
        .map((row) => (
          <TableRow key={row.id}>
            {Object.keys(row)
              .slice(1)
              .map((key, idx) => (
                <TableCell key={idx}>{row[key]}</TableCell>
              ))}
          </TableRow>
        ))}
    </TableBody>
  );

  const tablePagination = (props) => (
    <TableFooter>{props.children}</TableFooter>
  );
  return [tableHeadRender, tableBodyRender, tablePagination];
}

export default useTable;
