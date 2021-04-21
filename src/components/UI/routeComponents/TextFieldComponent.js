import React from "react";
import { TextField } from "@material-ui/core";
function TextFieldComponent({ bind, ...others }) {
  return <TextField {...bind} {...others} fullWidth />;
}

export default TextFieldComponent;
