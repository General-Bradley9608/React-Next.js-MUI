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
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover-cog-deposit" : undefined;

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
            <Deposit />
          </Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Box alignSelf="start" size="small">
              <IconButton
                aria-describedby={id}
                children={<MoreIcon size="small" />}
                onClick={handleClick}
              />
              <Popover
                marginThreshold={0}
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                elevation={2}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <Stack
                  direction="column"
                  spacing={1}
                  padding={1}
                  divider={<Divider orientation="horizontal" flexItem />}
                >
                  <Button
                    variant="text"
                    size="small"
                    startIcon={<RefreshIcon size="small" />}
                  >
                    Refresh
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    startIcon={<CachedIcon size="small" />}
                  >
                    Reload
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    startIcon={<OffIcon size="small" />}
                  >
                    Remove
                  </Button>
                </Stack>
              </Popover>
            </Box>
            <Orders />
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
