"use client";

import React from "react";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Box,
  Fab,
  Button,
  Fade,
  Grid,
  Avatar,
  IconButton,
  Badge,
  Divider,
} from "@mui/material";

export default function FloatNotify({ show, items }) {
  const [anchorEl, setAnchorEl] = React.useState(show);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <IconButton color="inherit" onClick={handleClick}>
        <Badge badgeContent={4} color="danger">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Box
          sx={{
            width: "320px",
            height: "320px",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            fontSize="small"
            sx={{ a: { textDecoration: "none" } }}
          >
            <Box my={1} mx={2} component="span">
              Messages:
            </Box>
            <Box my={1} mx={2} component="span">
              <a href="#">See all</a>
            </Box>
          </Grid>
          <Divider />
          {items &&
            items.length &&
            items.map((item) => (
              <Grid
                key={item.id}
                container
                spacing={2}
                m={0.5}
                pr={4}
                sx={{
                  bgColor: "secondary.main",
                }}
              >
                <Grid item>
                  <Avatar sx={{ border: "1px solid grey" }}>
                    W
                    <Badge
                      badgeContent={""}
                      color="success"
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    />
                  </Avatar>
                  {/* <small>21 Second Ago</small> */}
                </Grid>
                <Grid item xs container wrap="wrap">
                  <Typography
                    sx={{ p: 0, m: 1, fontWeight: "600" }}
                    variant="caption"
                    component={"p"}
                  >
                    {item.author}
                  </Typography>
                  <Typography sx={{ m: 1 }} variant="caption" component="p">
                    {item.text}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    sx={{ p: 0, m: 1, lineHeight: 1.25, fontWeight: "200" }}
                    variant="subtitle2"
                  >
                    {item.title}
                  </Typography>
                </Grid>
              </Grid>
            ))}
        </Box>
      </Popover>
    </>
  );
}
