import React, { useState } from "react";

import ClickAwayListener from "@mui/material/ClickAwayListener";

import { Box, Fab, Button, Fade } from "@mui/material";
import Close from "@mui/icons-material/Close";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Settings from "@mui/icons-material/Settings";

export default function FloatConfig() {
  const [open, setOpen] = useState(false);

  const fabHover = {
    transition: "transform .25s ease",
    ":hover": { transform: "rotate(90deg)" },
  };

  function onClickConfigBtn() {
    setOpen(!open);
  }

  const handleClickAway = () => {
    setOpen(false);
  };

  function onBlurConfigBtn() {
    setOpen(false);
  }

  function renderConfig() {
    return (
      <Box
        // onBlur={onBlurConfigBtn}
        // onMouseOut={onBlurConfigBtn}
        sx={{
          textAlign: "center",
          backgroundColor: "white",
          borderRadius: 1,
          color: "primary",
          width: "226px",
          display: "block",
          padding: "1rem",
          margin: "0 auto .88rem auto",
          size: ".66rem",
          boxShadow: 1,
          button: {
            mr: ".425rem",
          },
        }}
      >
        <Fab color="primary" aria-label="add" size="small">
          <FavoriteIcon fontSize="sm" />
        </Fab>
        <Fab color="secondary" aria-label="add" size="small">
          <FavoriteIcon fontSize="sm" />
        </Fab>
        <Fab color="success" aria-label="add" size="small">
          <FavoriteIcon fontSize="sm" />
        </Fab>
        <Fab color="info" aria-label="add" size="small">
          <FavoriteIcon fontSize="sm" />
        </Fab>
        <Box sx={{ mt: "1rem", mx: "auto", textAlign: "center" }}>
          <Button variant="contained" color="primary">
            Wide
          </Button>
          <Button variant="contained" color="primary">
            Large
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        sx={{
          float: "right",
          top: "5em",
          right: ".88rem",
          position: "absolute",
          zIndex: 1,
          verticalAlign: "middle",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
          }}
        >
          {open ? <Fade in={open}>{renderConfig()}</Fade> : ""}
          <Fab
            color="primary"
            aria-label="add"
            size="small"
            onClick={onClickConfigBtn}
            sx={fabHover}
            // onBlur={onBlurConfigBtn}
            // onMouseLeave={onBlurConfigBtn}
          >
            {!open ? <Settings /> : <Close />}
            {/* <AddIcon /> */}
          </Fab>
        </Box>
      </Box>
    </ClickAwayListener>
  );
}
