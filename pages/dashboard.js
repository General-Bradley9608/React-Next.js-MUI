import * as React from "react";

/* MUI */
import { Avatar, Box, Paper, Grid, Typography } from "@mui/material";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";

/* Components */
import Chart from "@components/Chart/ReChart";
import Deposits from "@components/Deposits";
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
          {/* <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              minHeight: 240,
            }}
          > */}
          {/* <Chart /> */}
          <Grid container wrap="wrap" spacing={5}>
            <Grid item lg={24}>
              <AvatarProfile cog={true} />
              {/* <Avatar />{" "}
                <Typography component="h2" variant="caption">
                  asdas{" "}
                </Typography> */}
            </Grid>
            {/* <Grid item lg={9}>
                <Box>Milan</Box>
                <Box>Footbal Club</Box>
              </Grid> */}
          </Grid>
          {/* </Paper> */}
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
