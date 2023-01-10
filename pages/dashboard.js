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
        <Typography component="h6" variant="subtitle2" color="secondary.main">
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
        <Grid item xs={12} sm={12} lg={5}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              minHeight: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={7}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              minHeight: 240,
            }}
          >
            <Grid container spacing={2}>
              <Grid item lg={3}>
                <Deposits />
              </Grid>
              <Grid item lg={3}>
                <Deposits />
              </Grid>
              <Grid item lg={3}>
                <Deposits />
              </Grid>
              <Grid item lg={3}>
                <Deposits />
              </Grid>
            </Grid>
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
