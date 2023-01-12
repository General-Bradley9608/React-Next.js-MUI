import * as React from "react";

import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Box from "@mui/material/Box";

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
    // <Box
    //   sx={{
    //     position: "fixed",
    //     // top: 32,
    //     right: 32,
    //     zIndex: 1430,
    //     height: "100%",
    //     width: "420px",
    //     ".MuiSnackbar-root": { position: "static", marginTop: "2rem" },
    //   }}
    // >
    <Snackbar
      sx={{ position: "fixed", marginTop: "2rem", float: "right" }}
      open={open}
      autoHideDuration={4000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      onClose={onCloseBar}
      key="top-right"
    >
      <Alert open={alertOpen} onClose={handleCloseAlert} severity="warning">
        This is a success message!
      </Alert>
    </Snackbar>
    // </Box>
  );
}
