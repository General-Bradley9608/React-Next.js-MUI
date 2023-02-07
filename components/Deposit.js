import * as React from "react";
// import { Grid, Box, Divider, Link, Paper, Typography } from "@mui/material";
import {
  // Avatar,
  Box,
  Button,
  Grid,
  Link,
  IconButton,
  Divider,
  Paper,
  Popover,
  Stack,
  Typography,
} from "@mui/material";

// import ChatIcon from "@mui/icons-material/ChatOutlined";
// import MapIcon from "@mui/icons-material/MapOutlined";
// import EmailIcon from "@mui/icons-material/EmailOutlined";
// import PhoneIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/RefreshOutlined";
import CachedIcon from "@mui/icons-material/CachedOutlined";
import OffIcon from "@mui/icons-material/HighlightOffOutlined";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

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
      },
      {
        id: 2,
        title: "Time Deposit",
        summary: "$3,450.00",
        accNo: "0141 1920 2310 1234",
        dateOpen: "15 March, 2019",
        dateMature: "15, March, 2024",
        interest: "$450.00",
      },
      {
        id: 3,
        title: "Time Deposit",
        summary: "$3,450.00",
        accNo: "0141 1920 2310 1234",
        dateOpen: "15 March, 2019",
        dateMature: "15, March, 2024",
        interest: "$450.00",
      },
      {
        id: 4,
        title: "Time Deposit",
        summary: "$3,450.00",
        accNo: "0141 1920 2310 1234",
        dateOpen: "15 March, 2019",
        dateMature: "15, March, 2024",
        interest: "$450.00",
      },
    ],
    cog = false,
  } = props;

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
    <Box display="flex">
      {/* <Box alignSelf="end" size="small"> */}
      <Grid container spacing={4}>
        {items && items.length > 0
          ? items.map((obj) => {
              return (
                <Grid key={obj.id} item lg={3}>
                  <Title>{obj.title}</Title>
                  <Typography component="p" variant={"h5"}>
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
                    <Typography component="h5" variant="body" color="primary">
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
                    color="primary.main"
                    variant="body"
                  >
                    Interest: {obj.interest}
                  </Typography>
                  <Box marginY={1.25}>
                    <Link color="primary" href="#" onClick={preventDefault}>
                      View balance
                    </Link>
                  </Box>
                </Grid>
              );
            })
          : ""}
      </Grid>
      {/* </Box> */}
      <Box alignSelf="end" size="small">
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
            direction="row"
            spacing={1}
            padding={1}
            divider={<Divider orientation="vertical" flexItem />}
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
    </Box>
  );
}
