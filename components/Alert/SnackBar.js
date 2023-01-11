import * as React from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function SnackBar(props) {
  const { title = "", message = "" } = props;
  const [open, setOpen] = React.useState(true);
  const [alertOpen, setAlertOpen] = React.useState(true);

  const handleCloseAlert = () => {
    setOpen(false);
  };

  const onCloseBar = () => {
    setOpen(!open);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={onCloseBar}
      key="top-right"
    >
      <Alert open={alertOpen} onClose={handleCloseAlert} severity="success">
        This is a success message!
      </Alert>
    </Snackbar>
  );
}
