import * as React from "react";
import { Box, Divider, Link, Paper, Typography } from "@mui/material";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

export default function Component() {
  return (
    <React.Fragment>
      <Title>Time Deposit</Title>
      <Typography component="p" variant={"h5"}>
        $3,450.00
      </Typography>
      <Paper sx={{ p: 1, marginY: 1, backgroundColor: "secondary.light" }}>
        <Typography component="h5" variant="body" color="primary">
          Account No
        </Typography>
        <Typography component="h5" variant="body2">
          0141 1920 2310 1234
        </Typography>
      </Paper>
      <Box>
        <Typography color="secondary.main" variant="body2">
          Opened: 15 March, 2019
        </Typography>
        <Typography color="secondary.main" variant="body2">
          Matured: 15, March, 2024
        </Typography>
      </Box>
      <Divider light={true} sx={{ marginY: 1.25 }} />
      <Typography component="h4" color="primary.main" variant="body">
        Interest: $450.00
      </Typography>
      <Box marginY={1.25}>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </Box>
    </React.Fragment>
  );
}
