import * as React from "react";
import BalanceIcon from "@mui/icons-material/BalanceOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import {
  Grid,
  Stack,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Link,
} from "@mui/material";

export default function BalanceCard() {
  const balanceData = [{}];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleTraxMenu = (evt) => {
    setAnchorEl(evt.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
            alignItems="top"
            sx={{
              border: "2px solid #f2f2f2",
              p: 2,
              borderRadius: "12px",
              color: "white",
              boxShadow:
                "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%) !important;",
              backgroundColor: "danger.main",
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0)) !important;",
              ":hover": {
                boxShadow:
                  "0 2px 12px 0 rgb(218 218 253 / 75%), 0 2px 12px 0 rgb(206 206 238 / 64%) !important;",
              },
            }}
          >
            <Grid item lg={9}>
              <Typography variant="h7" component="h4">
                Primary Account
              </Typography>
            </Grid>
            <Grid item lg={3} textAlign="right">
              <BalanceIcon fontSize="large" />
            </Grid>
            <Grid item lg={12}>
              <Typography variant="h5" component="h5">
                $ 1200000
              </Typography>
              <Grid container>
                <Grid item lg={10}>
                  <Typography>9129 **** **** 3429</Typography>
                </Grid>
                <Grid item lg={2} textAlign="right">
                  <IconButton
                    size="small"
                    aria-label="user transaction action"
                    aria-controls="menu-trax"
                    aria-haspopup="true"
                    onClick={handleTraxMenu}
                  >
                    <MoreIcon color="light" fontSize="medium" />
                  </IconButton>
                  <Menu
                    id="menu-trax"
                    keepMounted
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    sx={{
                      a: { textDecoration: "none" },
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem dense>
                      <Link href="#transfer">Transfer</Link>
                    </MenuItem>
                    <MenuItem dense>
                      <Link href="#statement">Statement</Link>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="top"
            sx={{
              border: "2px solid #f2f2f2",
              p: 2,
              borderRadius: "12px",
              color: "white",
              boxShadow:
                "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%) !important;",
              backgroundColor: "success.main",
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0)) !important;",
              ":hover": {
                boxShadow:
                  "0 2px 12px 0 rgb(218 218 253 / 75%), 0 2px 12px 0 rgb(206 206 238 / 64%) !important;",
              },
            }}
          >
            <Grid item lg={9}>
              <Typography variant="h7" component="h4">
                Success Account
              </Typography>
            </Grid>
            <Grid item lg={3} textAlign="right">
              <BalanceIcon fontSize="large" />
            </Grid>
            <Grid item lg={12}>
              <Typography variant="h5" component="h5">
                $ 1200000
              </Typography>
              <Grid container>
                <Grid item lg={10}>
                  <Typography>9129 **** **** 3429</Typography>
                </Grid>
                <Grid item lg={2} textAlign="right">
                  <IconButton
                    size="small"
                    aria-label="user transaction action"
                    aria-controls="menu-trax"
                    aria-haspopup="true"
                    onClick={handleTraxMenu}
                  >
                    <MoreIcon color="light" fontSize="medium" />
                  </IconButton>
                  <Menu
                    id="menu-trax"
                    keepMounted
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    sx={{
                      a: { textDecoration: "none" },
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem dense>
                      <Link href="#transfer">Transfer</Link>
                    </MenuItem>
                    <MenuItem dense>
                      <Link href="#statement">Statement</Link>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            alignItems="top"
            sx={{
              border: "2px solid #f2f2f2",
              p: 2,
              borderRadius: "12px",
              color: "white",
              boxShadow:
                "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%) !important;",
              backgroundColor: "info.main",
              backgroundImage:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0)) !important;",
              ":hover": {
                boxShadow:
                  "0 2px 12px 0 rgb(218 218 253 / 75%), 0 2px 12px 0 rgb(206 206 238 / 64%) !important;",
              },
            }}
          >
            <Grid item lg={9}>
              <Typography variant="h7" component="h4">
                Info Account
              </Typography>
            </Grid>
            <Grid item lg={3} textAlign="right">
              <BalanceIcon fontSize="large" />
            </Grid>
            <Grid item lg={12}>
              <Typography variant="h5" component="h5">
                $ 1200000
              </Typography>
              <Grid container>
                <Grid item lg={10}>
                  <Typography>9129 **** **** 3429</Typography>
                </Grid>
                <Grid item lg={2} textAlign="right">
                  <IconButton
                    size="small"
                    aria-label="user transaction action"
                    aria-controls="menu-trax"
                    aria-haspopup="true"
                    onClick={handleTraxMenu}
                  >
                    <MoreIcon color="light" fontSize="medium" />
                  </IconButton>
                  <Menu
                    id="menu-trax"
                    keepMounted
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    sx={{
                      a: { textDecoration: "none" },
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem dense>
                      <Link href="#transfer">Transfer</Link>
                    </MenuItem>
                    <MenuItem dense>
                      <Link href="#statement">Statement</Link>
                    </MenuItem>
                  </Menu>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </Grid>
  );
}
