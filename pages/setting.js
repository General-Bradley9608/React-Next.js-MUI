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

import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import CommnentIcon from "@mui/icons-material/CommentBankOutlined";
import CircleIcon from "@mui/icons-material/CircleOutlined";
import MapIcon from "@mui/icons-material/MapOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/PhoneIphoneOutlined";
import WebIcon from "@mui/icons-material/Web";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PeopleIcon from "@mui/icons-material/PeopleAltOutlined";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";

/* Components */
import Orders from "@components/Orders";
import GroupButton from "@components/Group/Button";
import TabsDefault from "@components/Tabs/Default";

import shadows from "@mui/material/styles/shadows";

export default function Dashboard() {
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
          Settings
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
              justifyContent: "space-between",
              minHeight: 240,
            }}
          >
            <Box>
              <Button color="danger" variant="outlined">
                Transfer
              </Button>
              <GroupButton dense />
            </Box>
            <Box container>
              <Box item>
                <Typography
                  component="h4"
                  variant="body1"
                  color="secondary.main"
                >
                  Blog
                </Typography>
                <Box>
                  Format: <input value="dd/MM/YYYY" />
                </Box>
              </Box>
              <Box item>
                <Typography
                  component="h4"
                  variant="body1"
                  color="secondary.main"
                >
                  Blog
                </Typography>
                <Box>
                  Format: <input value="dd/MM/YYYY" />
                </Box>
              </Box>
              <Box item>
                <Typography
                  component="h4"
                  variant="body1"
                  color="secondary.main"
                >
                  Blog
                </Typography>
                <Box>
                  Format: <input value="dd/MM/YYYY" />
                </Box>
              </Box>
            </Box>
            <Box marginY={2}>
              <TabsDefault
                items={[
                  {
                    title: (
                      <Stack direction="row" justifyContent="space-between">
                        <Box padding={0}>
                          <WebIcon fontSize="small" />
                        </Box>
                        <Box marginLeft={1}>Blog Settings</Box>
                      </Stack>
                    ),
                    item: (
                      <Box
                        component="form"
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <FormControl component="fieldset">
                          <FormLabel component="legend">
                            Label Placement
                          </FormLabel>
                          <FormGroup aria-label="position" row>
                            <FormControlLabel
                              value="end"
                              control={<Checkbox />}
                              label="Disabled"
                              labelPlacement="end"
                            />
                          </FormGroup>
                        </FormControl>
                        <FormControl component="fieldset">
                          <FormLabel component="legend">
                            Title Placement
                          </FormLabel>
                          <FormGroup aria-label="position" row>
                            <FormControlLabel
                              value="end"
                              control={<Checkbox />}
                              label="Disabled"
                              labelPlacement="end"
                            />
                          </FormGroup>
                        </FormControl>
                      </Box>
                    ),
                  },
                  {
                    title: (
                      <Stack direction="row" justifyContent="space-between">
                        <Box padding={0}>
                          <ReceiptIcon fontSize="small" />
                        </Box>
                        <Box marginLeft={1}>Site Settings</Box>
                      </Stack>
                    ),
                    item: <Typography>Site</Typography>,
                  },
                  {
                    title: (
                      <Stack direction="row" justifyContent="space-between">
                        <Box padding={0}>
                          <PeopleIcon fontSize="small" />
                        </Box>
                        <Box marginLeft={1}>User Settings</Box>
                      </Stack>
                    ),
                    item: <Typography>User</Typography>,
                  },
                ]}
              />
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
