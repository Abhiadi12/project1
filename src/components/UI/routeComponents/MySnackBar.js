import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
// import Alert from "@material-ui/core/Alert";
import Alert from "@material-ui/lab/Alert";

function MySnackBar({ open, handleClose, severity }) {
  return (
    <div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {severity === "success"
            ? "Your request successfully proceed"
            : "Something went wrong please try again "}
        </Alert>
      </Snackbar>
    </div>
  );
}

export default MySnackBar;
