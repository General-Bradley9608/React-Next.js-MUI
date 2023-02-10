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

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";

/* Components */
import Chart from "@components/Chart/ReChart";
import Deposit from "@components/Deposit";
import Orders from "@components/Orders";
import DashboardToolbar from "@components/Toolbar/Dashboard";
import AvatarProfile from "@components/Avatar/Profile";

import shadows from "@mui/material/styles/shadows";

export default function Dashboard() {
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
            <Deposit />
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
