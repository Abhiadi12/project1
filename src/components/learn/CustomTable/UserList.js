import React from "react";
import {
  Tooltip,
  IconButton,
  TableContainer,
  Table,
  TableRow,
  Paper,
} from "@material-ui/core";
import TablePagination from "@material-ui/core/TablePagination";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import useTable from "./useTable";
import { makeStyles } from "@material-ui/core/styles";
const operationViewCode = () => (
  <>
    <Tooltip title="Delete">
      <IconButton
        // onClick={handleDelete}
        size="small"
        aria-label="Delete user"
        // className={classes.deleteIcon}
      >
        <DeleteIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title="Edit">
      <IconButton
        // onClick={handleDelete}
        size="small"
        aria-label="Edit User"
        // className={classes.deleteIcon}
      >
        <EditIcon />
      </IconButton>
    </Tooltip>
  </>
);
const createData = (id, name, role, email, status, operations) => ({
  id,
  name,
  role,
  email,
  status,
  operations,
});
const usersData = [
  createData(
    "1",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "active",
    operationViewCode()
  ),
  createData(
    "2",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "inactive",
    operationViewCode()
  ),
  createData(
    "3",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "active",
    operationViewCode()
  ),
  createData(
    "4",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "inactive",
    operationViewCode()
  ),
  createData(
    "5",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "active",
    operationViewCode()
  ),
  createData(
    "6",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "active",
    operationViewCode()
  ),
  createData(
    "7",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "inactive",
    operationViewCode()
  ),
  createData(
    "8",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "inactive",
    operationViewCode()
  ),
  createData(
    "9",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "active",
    operationViewCode()
  ),
  createData(
    "10",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "inactive",
    operationViewCode()
  ),
  createData(
    "11",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "inactive",
    operationViewCode()
  ),
  createData(
    "12",
    "abhisek",
    "admin",
    "abhisek@gmail.com",
    "active",
    operationViewCode()
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

function UserList() {
  const COL_DEF = [
    { column: "name", label: "Name" },
    { column: "role", label: "Role" },
    { column: "email", label: "Email" },
    { column: "status", label: "Status" },
    { column: "operations", label: "Operations" },
  ];

  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [rowPerPage, setRowPerPage] = React.useState(5);
  const [tableHeadRender, tableBodyRender, TableFooter] = useTable(
    usersData,
    page,
    rowPerPage
  );
  const handleChangePage = (event, newPage) => {
    console.log("ok");
    setPage(newPage + 1);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  return (
    <TableContainer className={classes.table} component={Paper}>
      <Table>
        {tableHeadRender(COL_DEF)}
        {tableBodyRender(usersData)}
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 15]}
              colSpan={3}
              count={usersData.length}
              rowsPerPage={rowPerPage}
              page={page - 1}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export default UserList;
