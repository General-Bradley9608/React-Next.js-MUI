import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Divider,
  Paper,
  Popover,
  Stack,
  Typography,
} from "@mui/material";

import ChatIcon from "@mui/icons-material/ChatOutlined";
import MapIcon from "@mui/icons-material/MapOutlined";
import EmailIcon from "@mui/icons-material/EmailOutlined";
import PhoneIcon from "@mui/icons-material/PhoneIphoneOutlined";
import MoreIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/RefreshOutlined";
import CachedIcon from "@mui/icons-material/CachedOutlined";
import OffIcon from "@mui/icons-material/HighlightOffOutlined";

export default function Component(props) {
  const { items, cog = false } = props;
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover-cog" : undefined;

  return (
    <Paper
      sx={{
        p: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      {cog ? (
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
            <Stack direction="column" spacing={1} padding={1}>
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
      ) : (
        ""
      )}
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
      <Divider flexItem textAlign="center" variant="middle" sx={{ mt: 2 }} />
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
        <Button startIcon={<ChatIcon />} variant="outlined" size="small">
          Chat
        </Button>
      </Box>
    </Paper>
  );
}
