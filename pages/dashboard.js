import * as React from "react";

/* MUI */
import {
  Box,
  Paper,
  Grid,
  Typography,
  Toolbar,
  IconButton,
} from "@mui/material";

import CommnentIcon from "@mui/icons-material/CommentBankOutlined";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";

/* Components */
import Chart from "@components/Chart/ReChart";
import Deposits from "@components/Deposits";
import Orders from "@components/Orders";

import shadows from "@mui/material/styles/shadows";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <Toolbar>
        <Typography component="h6" variant="subtitle1" color="secondary.main">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Hi Administrator"
            size="small"
          >
            <CommnentIcon color="secondary" />
          </IconButton>
          Hi, Administrator
        </Typography>
      </Toolbar>
      <Grid container spacing={2}>
        {/* Chart */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Deposits />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
