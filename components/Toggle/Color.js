import * as React from "react";
import { Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const ColorModeContext = React.createContext({
  toggleColorMode: (e) => {
    e.currentTarget.dataset.mode;
  },
});

function ToggleColor() {
  const theme = useTheme();
  const mode = React.useState(theme.palette.mode);
  const { toggleColorMode } = React.useContext(ColorModeContext);
  const _mode = mode === "dark" ? "light" : "dark";
  // console.log(theme.palette.mode);
  // console.log(_mode);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: "text.primary",
        borderRadius: 0,
        mt: 2,
        mb: 0,
        fontSize: "small",
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        size="small"
        sx={{ ml: 1 }}
        data-mode={mode}
        onClick={toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon fontSize="small" />
        ) : (
          <Brightness4Icon fontSize="small" />
        )}
      </IconButton>
    </Box>
  );
}

export { ToggleColor, ColorModeContext };
