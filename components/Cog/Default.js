import * as React from "react";

import {
  Box,
  Button,
  IconButton,
  Divider,
  Popover,
  Stack,
} from "@mui/material";

import MoreIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/RefreshOutlined";
import CachedIcon from "@mui/icons-material/CachedOutlined";
import OffIcon from "@mui/icons-material/HighlightOffOutlined";

export default function Component(props) {
  const { type = "", mode = "", children = null } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const stack = type ? "row" : "column";
  const divider = stack === "row" ? "vertical" : "horizontal";

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover-cog-default" : undefined;

  return (
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
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Stack
          direction={stack}
          spacing={1}
          padding={1}
          divider={<Divider orientation={divider} flexItem />}
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
  );
}
