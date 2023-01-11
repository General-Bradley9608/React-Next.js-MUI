import * as React from "react";

/* MUI */
import {
  Avatar,
  Box,
  Stack,
  Paper,
  Grid,
  Typography,
  Toolbar,
  Link,
  Button,
  Divider,
} from "@mui/material";

import CommnentIcon from "@mui/icons-material/CommentBankOutlined";
import CircleIcon from "@mui/icons-material/CircleOutlined";
import MapIcon from "@mui/icons-material/MapOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/PhoneIphoneOutlined";
import AddCardIcon from "@mui/icons-material/AddCardOutlined";
import CheckBoxIcon from "@mui/icons-material/CheckBoxOutlined";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CommentBankIcon from "@mui/icons-material/CommentBank";
import AddchartOutlinedIcon from "@mui/icons-material/AddchartOutlined";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";

/* Components */
// import Chart from "@components/Chart/ReChart";
import CardBalance from "@components/Card/Balance";
import Orders from "@components/Orders";
import GroupButton from "@components/Group/Button";

import shadows from "@mui/material/styles/shadows";

export default function Dashboard() {
  const dataTasks = [
    {
      id: 1,
      title: "Transfer Approval",
      type: "danger",
      icon: (
        <AccountBalanceIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
      ),
      description:
        "Request for Approval to <b>Bank Solutions LTD  </b> AccNo: <b>9833-2342-2421</b>",
      action: "Approve",
    },
    {
      id: 2,
      title: "Deposit Approval",
      type: "success",
      icon: (
        <CommentBankIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
      ),
      description:
        "Request <b>$9,300.020</b> for Deposit from AccNo: <b>9892-1234-123</b>",
      action: "Approve",
    },
    {
      id: 3,
      title: "Transfer Approval",
      type: "danger",
      icon: (
        <AccountBalanceIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
      ),
      description:
        "Request for Approval to <b>Bank Solutions LTD</b> AccNo: <b>3525-1551-2323</b>",
      action: "Approve",
    },
    {
      id: 4,
      title: "Transfer In",
      type: "info",
      icon: (
        <AddchartOutlinedIcon
          fontSize="small"
          sx={{ verticalAlign: "middle" }}
        />
      ),
      description:
        "Transfer In for <b>$1,000.000</b> from AccNo: <b>9892-1234-123</b>",
      action: "Check",
    },
    {
      id: 5,
      title: "Deposit Approval",
      type: "success",
      icon: (
        <CommentBankIcon fontSize="small" sx={{ verticalAlign: "middle" }} />
      ),
      description:
        "Request <b>$1,000.000</b> for Deposit from AccNo: <b>9892-1234-123</b>",
      action: "Approve",
    },
  ];

  return (
    <DashboardLayout>
      <Toolbar disableGutters component="nav">
        <Link
          href="/profile"
          variant="subtitle2"
          color="secondary.main"
          sx={{
            textDecoration: "none",
            mr: 2,
            svg: { verticalAlign: "middle", mr: 1 },
          }}
        >
          <CircleIcon fontSize="small" />
          Profile
        </Link>
        <Typography
          variant="subtitle2"
          color="secondary.main"
          sx={{
            textDecoration: "none",
            mr: 2,
            svg: { verticalAlign: "middle", mr: 1 },
          }}
        >
          <CommnentIcon fontSize="small" />
          Hi, Administrator
        </Typography>
      </Toolbar>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} lg={4}>
          <Paper
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minHeight: 240,
            }}
          >
            <Avatar
              src="https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=340&h=340&q=80"
              sx={{
                width: "80px",
                height: "80px",
                border: 2,
                mb: 1,
              }}
            />
            <Typography component="h4" variant="subtitle1">
              Lance Gascoigne
            </Typography>
            <Typography
              component="span"
              variant="subtitle2"
              color="secondary"
              fontWeight={300}
            >
              Web Administrator
            </Typography>
            <Typography component="div" variant="subtitle2" color="secondary">
              <MapIcon sx={{ verticalAlign: "middle", fontSize: "1.25rem" }} />{" "}
              Memphis, Tennessee
            </Typography>
            <Divider
              flexItem
              textAlign="center"
              variant="middle"
              sx={{ mt: 2 }}
            />
            <Box
              sx={{
                my: 2,
                button: { borderRadius: "50px", px: 1.5, mr: 0.75 },
              }}
            >
              <Button startIcon={<EmailIcon />} variant="outlined" size="small">
                Email
              </Button>
              <Button startIcon={<PhoneIcon />} variant="outlined" size="small">
                Phone
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} lg={8}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              minHeight: 240,
            }}
          >
            <Box>
              <Typography component="h6" variant="h5" color="secondary">
                Linked Accounts
              </Typography>
            </Box>
            <CardBalance />
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
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Orders />
          </Paper>
        </Grid>
        <Grid item sm={12} lg={6}>
          <Paper sx={{ p: 2 }}>
            <Typography
              component="h3"
              variant="h7"
              paddingBottom={1}
              color="secondary.dark"
            >
              Tasks
            </Typography>
            <Grid container fontSize="small">
              <Grid item xs={12}>
                {dataTasks &&
                  dataTasks.map((item) => {
                    return (
                      <Box
                        key={item.id}
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        border={1}
                        borderColor="secondary.light"
                        paddingY={1}
                        paddingX={2}
                        sx={{
                          cursor: "pointer",
                          transition: ".15s ease",
                          ":hover": {
                            bgcolor: "secondary.light",
                            boxShadow: "2px 2px 10px #cccccc",
                            transform: "translateY(-5px)",
                          },
                        }}
                      >
                        <Stack mr={2}>
                          <Typography
                            color={`${item.type}.main`}
                            component="h5"
                            fontWeight="600"
                          >
                            {item.icon} {item.title}
                          </Typography>
                          <Box color="secondary.dark">
                            <div
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                          </Box>
                        </Stack>
                        <Box component="span">{item.createAt}</Box>
                        <Button
                          variant="text"
                          size="small"
                          color={item.type}
                          startIcon={<CheckBoxIcon />}
                        >
                          {item.action}
                        </Button>
                      </Box>
                    );
                  })}
                <Box textAlign="right" color="secondary">
                  <Link href="#">see all</Link>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item sm={12} lg={6}>
          <Paper sx={{ p: 2 }}>
            <Typography
              component="h3"
              variant="h7"
              paddingBottom={1}
              color="secondary.dark"
            >
              Projects
            </Typography>
            <Grid container fontSize="small">
              <Grid container fontSize="small">
                <Grid item xs={12}>
                  {dataTasks &&
                    dataTasks.map((item) => {
                      return (
                        <Box
                          key={item.id}
                          display="flex"
                          justifyContent="space-between"
                          alignItems="center"
                          border={1}
                          borderColor="secondary.light"
                          paddingY={1}
                          paddingX={2}
                          sx={{
                            transition: ".15s ease",
                            cursor: "pointer",
                            ":hover": {
                              bgcolor: "secondary.light",
                              boxShadow: "2px 2px 10px #cccccc",
                              transform: "translateY(-5px)",
                            },
                          }}
                        >
                          <Stack mr={2}>
                            <Typography
                              color={`${item.type}.main`}
                              component="h5"
                              fontWeight="600"
                            >
                              {item.icon} {item.title}
                            </Typography>
                            <Box color="secondary.dark">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: item.description,
                                }}
                              />
                            </Box>
                          </Stack>
                          <Box component="span">{item.createAt}</Box>
                          <Button
                            variant="text"
                            size="small"
                            color={item.type}
                            startIcon={<CheckBoxIcon />}
                          >
                            {item.action}
                          </Button>
                        </Box>
                      );
                    })}
                  <Box textAlign="right" color="secondary">
                    <Link href="#">see all</Link>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
