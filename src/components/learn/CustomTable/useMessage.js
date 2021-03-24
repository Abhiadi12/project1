import React from "react";
import Typography from "@material-ui/core";
function useMessage() {
  const endMessage = (
    <Typography
      variant="caption"
      color="textSecondary"
      component="div"
      // className={classes.bottomMessage}
      align="center"
    >
      You have reached at the end.
    </Typography>
  );

  const loadMessage = (
    <Typography
      variant="caption"
      color="textSecondary"
      component="div"
      // className={classes.bottomMessage}
      align="center"
    >
      Loading more records, please wait ...
    </Typography>
  );
  return [endMessage, loadMessage];
}

export default useMessage;
