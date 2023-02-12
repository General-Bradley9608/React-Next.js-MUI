import * as React from "react";
import { Box, Grid, Divider, Paper, Stack, Typography } from "@mui/material";

import Cog from "@components/Cog/Default";

import Title from "./Title";

export default function Component(props) {
  const {
    items = [
      {
        id: 1,
        title: "Time Deposit",
        summary: "$3,450.00",
        accNo: "0141 1920 2310 1234",
        dateOpen: "15 March, 2019",
        dateMature: "15, March, 2024",
        interest: "$450.00",
        type: "success",
      },
      {
        id: 2,
        title: "Time Deposit",
        summary: "$3,450.00",
        accNo: "0141 1920 2310 1234",
        dateOpen: "15 March, 2019",
        dateMature: "15, March, 2024",
        interest: "$450.00",
        type: "info",
      },
      {
        id: 3,
        title: "Time Deposit",
        summary: "$3,450.00",
        accNo: "0141 1920 2310 1234",
        dateOpen: "15 March, 2019",
        dateMature: "15, March, 2024",
        interest: "$450.00",
        type: "warning",
      },
      {
        id: 4,
        title: "Time Deposit",
        summary: "$3,450.00",
        accNo: "0141 1920 2310 1234",
        dateOpen: "15 March, 2019",
        dateMature: "15, March, 2024",
        interest: "$450.00",
        type: "danger",
      },
    ],
  } = props;

  return (
    <Box p={0}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>Deposit</Typography>
        <Cog />
      </Stack>
      <Grid container spacing={4}>
        {items && items.length > 0
          ? items.map((obj) => {
              return (
                <Grid key={obj.id} item lg={3}>
                  <Title>{obj.title}</Title>
                  <Typography
                    component="p"
                    variant={"h5"}
                    color={`${obj.type}.main`}
                  >
                    {obj.summary}
                  </Typography>
                  <Paper
                    sx={{
                      px: 2,
                      py: 1,
                      marginY: 1,
                      backgroundColor: "secondary.light",
                    }}
                    elevation={0}
                  >
                    <Typography
                      component="h5"
                      variant="body"
                      color={`${obj.type}.main`}
                    >
                      Account No
                    </Typography>
                    <Typography
                      component="h5"
                      variant="body"
                      color="secondary.dark"
                    >
                      {obj.accNo}
                    </Typography>
                  </Paper>
                  <Box>
                    <Typography color="secondary.main" variant="body2">
                      Opened: {obj.dateOpen}
                    </Typography>
                    <Typography color="secondary.main" variant="body2">
                      Matured: {obj.dateMature}
                    </Typography>
                  </Box>
                  <Divider light={true} sx={{ marginY: 1.25 }} />
                  <Typography
                    component="h4"
                    color={`${obj.type}.main`}
                    variant="body"
                  >
                    Interest: {obj.interest}
                  </Typography>
                </Grid>
              );
            })
          : ""}
      </Grid>
    </Box>
  );
}
