import * as React from "react";

/* MUI */
import {
  Avatar,
  Button,
  Box,
  Divider,
  Grid,
  Paper,
  Typography,
  IconButton,
  Popover,
  Stack,
} from "@mui/material";

/* Icons */
import MoreIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/RefreshOutlined";
import CachedIcon from "@mui/icons-material/CachedOutlined";
import OffIcon from "@mui/icons-material/HighlightOffOutlined";
import AddCardIcon from "@mui/icons-material/AddCardOutlined";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";

/* Components */
import Chart from "@components/Chart/ReChart";
import Balance from "@components/Card/Balance";
import Orders from "@components/Orders";
import DashboardToolbar from "@components/Toolbar/Dashboard";
import AvatarProfile from "@components/Avatar/Profile";
import Cog from "@components/Cog/Default";

import shadows from "@mui/material/styles/shadows";

export default function Page() {
  return (
    <DashboardLayout>
      <DashboardToolbar />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={4}>
          <Grid container wrap="wrap" spacing={5}>
            <Grid item lg={24}>
              <AvatarProfile cog={true} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} lg={8}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              minHeight: "100%",
            }}
          >
            <Box display="flex" justifyContent="space-between" marginBottom={1}>
              <Typography component="h6" variant="h5" color="secondary">
                Linked Accounts
              </Typography>
              <Cog />
            </Box>
            <Balance />
            <Box marginY={2}>
              <Button
                size="small"
                variant="contained"
                color="success"
                endIcon={<AddCardIcon />}
              >
                Add Account
              </Button>
              {/* <GroupButton /> */}
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
