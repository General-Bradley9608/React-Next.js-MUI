import * as React from "react";

import PropTypes from "prop-types";

import BalanceIcon from "@mui/icons-material/BalanceOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import OutputIcon from "@mui/icons-material/OutputOutlined";
import SummarizeIcon from "@mui/icons-material/SummarizeOutlined";
import ReportIcon from "@mui/icons-material/ReportOutlined";

import {
  Grid,
  Stack,
  Typography,
  IconButton,
  MenuItem,
  Link,
  Popover,
} from "@mui/material";

/* 
function BalanceCard (props) {
  const { post } = props;
}
*/
function BalanceCard() {
  const balanceData = [
    {
      id: 1,
      name: "Primary Account",
      accNumber: "9129 **** **** 3429",
      fund: 1200000,
      variant: "danger",
    },
    {
      id: 2,
      name: "Success Account",
      accNumber: "9034 **** **** 1900",
      fund: 300000,
      variant: "success",
    },
    {
      id: 3,
      name: "Info Account",
      accNumber: "2414 **** **** 4292",
      fund: 210000,
      variant: "info",
    },
  ];

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
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={{
            xs: 1,
            sm: 2,
            md: 1,
          }}
        >
          {balanceData &&
            balanceData.map((item) => {
              return (
                <Grid
                  key={item.id}
                  container
                  alignItems="top"
                  elevation={0}
                  sx={{
                    border: "2px solid #f2f2f2",
                    p: 2,
                    borderRadius: "12px",
                    color: "white",
                    transition: ".5s ease",
                    boxShadow:
                      "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)",
                    backgroundColor: `${item.variant}.main`,
                    backgroundImage:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0))",
                    ":hover": {
                      boxShadow:
                        "0 2px 12px 0 rgb(218 218 253 / 75%), 0 2px 12px 0 rgb(206 206 238 / 64%)",
                    },
                  }}
                >
                  <Grid item sm={12} md={9}>
                    <Typography variant="h7" component="h4">
                      {item.name}
                    </Typography>
                  </Grid>
                  <Grid item sm={12} md={3} textAlign="right">
                    <BalanceIcon fontSize="large" />
                  </Grid>
                  <Grid item sm={12} md={12}>
                    <Typography variant="h5" component="h5">
                      $ {item.fund}
                    </Typography>
                    <Grid
                      container
                      sx={{
                        ".mui-style-1poimk-MuiPaper-root-MuiMenu-paper-MuiPaper-root-MuiPopover-paper":
                          {
                            boxShadow: "0 !important;",
                          },
                      }}
                    >
                      <Grid item lg={10}>
                        <Typography>{item.accNumber}</Typography>
                      </Grid>
                      <Grid item lg={2} textAlign="right">
                        <IconButton
                          id={`menu-trax${item.id}`}
                          size="small"
                          aria-label="user transaction actions"
                          aria-controls={`popmenu-${item.id}`}
                          aria-haspopup="true"
                          onClick={handleTraxMenu}
                          aria-expanded={anchorEl ? "true" : undefined}
                        >
                          <MoreIcon color="light" fontSize="medium" />
                        </IconButton>
                        <Popover
                          keepMounted
                          id={`popmenu-${item.id}`}
                          anchorEl={anchorEl}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right",
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                          }}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                          elevation={1}
                          PaperProps={{ component: "nav" }}
                        >
                          <MenuItem dense component="div">
                            <Link
                              href="#transfer"
                              component="h4"
                              variant="body2"
                              underline="none"
                              py={0.5}
                              px={0}
                            >
                              <OutputIcon
                                fontSize="medium"
                                sx={{ verticalAlign: "middle", mr: 0.5 }}
                              />
                              Transfer
                            </Link>
                          </MenuItem>
                          <MenuItem dense component="div">
                            <Link
                              href="#statement"
                              component="h4"
                              variant="body2"
                              underline="none"
                              py={0.5}
                              px={0}
                            >
                              <SummarizeIcon
                                fontSize="medium"
                                sx={{ verticalAlign: "middle", mr: 0.5 }}
                              />
                              Statement
                            </Link>
                          </MenuItem>
                          <MenuItem dense component="div">
                            <Link
                              href="#statement"
                              component="h4"
                              variant="body2"
                              underline="none"
                              py={0.5}
                              px={0}
                            >
                              <ReportIcon
                                fontSize="medium"
                                sx={{ verticalAlign: "middle", mr: 0.5 }}
                              />
                              Freeze Account
                            </Link>
                          </MenuItem>
                        </Popover>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
        </Stack>
      </Grid>
    </Grid>
  );
}

BalanceCard.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageLabel: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default BalanceCard;
