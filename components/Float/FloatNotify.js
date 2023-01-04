import React, { useState } from "react";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

import NotificationsIcon from "@mui/icons-material/Notifications";
import { Box, Fab, Button, Fade, IconButton, Badge } from "@mui/material";

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
        <Badge badgeContent={4} color="secondary">
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
        {items &&
          items.length &&
          items.map((item) => (
            <div key={item.id}>
              <Typography sx={{ p: 0, m: 1 }} variant="subtitle2">
                {item.title}
              </Typography>
              <Typography sx={{ p: 0, m: 1 }} variant="caption">
                {item.text}
              </Typography>
            </div>
          ))}
      </Popover>
    </>
  );
}
