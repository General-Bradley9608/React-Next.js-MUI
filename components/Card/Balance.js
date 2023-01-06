import * as React from "react";
import BalanceIcon from "@mui/icons-material/BalanceOutlined";
import { Grid, Stack, Typography } from "@mui/material";

export default function BalanceCard() {
  return (
    <Grid container spacing={2}>
      <Grid item lg={12}>
        <Stack
          justifyContent="space-between"
          alignItems="stretch"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 1 }}
        >
          <Grid
            container
            alignItems="center"
            sx={{
              border: "2px solid #f2f2f2",
              p: 2,
              borderRadius: "12px",
              color: "white",
              boxShadow:
                "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%) !important;",
              backgroundColor: "#f41127 !important",
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)) !important;",
            }}
          >
            <Grid item lg={9}>
              <BalanceIcon fontSize="large" />
            </Grid>
            <Grid item lg={3}>
              <Typography variant="h5" component="h5">
                $ 120
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography>Account Balance</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            sx={{
              border: "2px solid #f2f2f2",
              p: 2,
              borderRadius: "12px",
              color: "white",
              boxShadow:
                "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%) !important;",
              backgroundColor: "#f41127 !important",
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)) !important;",
            }}
          >
            <Grid item lg={9}>
              <BalanceIcon fontSize="large" />
            </Grid>
            <Grid item lg={3}>
              <Typography variant="h5" component="h5">
                $ 120
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography>Account Balance</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            sx={{
              border: "2px solid #f2f2f2",
              p: 2,
              borderRadius: "12px",
              color: "white",
              boxShadow:
                "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%) !important;",
              backgroundColor: "#f41127 !important",
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)) !important;",
            }}
          >
            <Grid item lg={9}>
              <BalanceIcon fontSize="large" />
            </Grid>
            <Grid item lg={3}>
              <Typography variant="h5" component="h5">
                $ 120
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography>Account Balance</Typography>
            </Grid>
          </Grid>
        </Stack>
        <Stack
          justifyContent="space-between"
          alignItems="stretch"
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1, sm: 2, md: 1 }}
        >
          <Grid
            container
            alignItems="center"
            sx={{
              border: "2px solid #f2f2f2",
              p: 2,
              borderRadius: "12px",
              color: "white",
              boxShadow:
                "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%) !important;",
              backgroundColor: "#f41127 !important",
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)) !important;",
            }}
          >
            <Grid item lg={9}>
              <BalanceIcon fontSize="large" />
            </Grid>
            <Grid item lg={3}>
              <Typography variant="h5" component="h5">
                $ 120
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography>Account Balance</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            sx={{
              border: "2px solid #f2f2f2",
              p: 2,
              borderRadius: "12px",
              color: "white",
              boxShadow:
                "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%) !important;",
              backgroundColor: "#f41127 !important",
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)) !important;",
            }}
          >
            <Grid item lg={9}>
              <BalanceIcon fontSize="large" />
            </Grid>
            <Grid item lg={3}>
              <Typography variant="h5" component="h5">
                $ 120
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography>Account Balance</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="center"
            sx={{
              border: "2px solid #f2f2f2",
              p: 2,
              borderRadius: "12px",
              color: "white",
              boxShadow:
                "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%) !important;",
              backgroundColor: "#f41127 !important",
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0)) !important;",
            }}
          >
            <Grid item lg={9}>
              <BalanceIcon fontSize="large" />
            </Grid>
            <Grid item lg={3}>
              <Typography variant="h5" component="h5">
                $ 120
              </Typography>
            </Grid>
            <Grid item lg={12}>
              <Typography>Account Balance</Typography>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
