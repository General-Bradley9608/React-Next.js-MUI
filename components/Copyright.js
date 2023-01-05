import * as React from "react";
import { Box, Typography } from "@mui/material";
import MuiLink from "@mui/material/Link";
import { constant } from "@config/constants";

export default function Copyright() {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {constant.siteCopyright}{" "}
        <MuiLink color="inherit" href="https://dykraf.com/">
          {constant.siteName}
        </MuiLink>
      </Typography>
    </Box>
  );
}
