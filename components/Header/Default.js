import * as React from "react";
import PropTypes from "prop-types";

import {
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

function Header(props) {
  const { sections, title = "test" } = props;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="xl"
        >
          <Box>
            <Grid
              container
              justifyContent="space-between"
              alignContent="center"
            >
              <Grid item>
                <Button
                  id="fade-button1"
                  aria-controls={open ? "fade-menu1" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  sx={{ paddingX: 2, mr: 2 }}
                  // onClick={handleClick}
                >
                  <Link
                    href="/"
                    sx={{
                      transition: "all .5s ease",
                      verticalAlign: "middle",
                      ml: 0,
                      ":hover": {
                        filter: "brightness(1.35);",
                      },
                    }}
                  >
                    <img
                      src="/logo.svg"
                      // alt={constant.siteName}
                      height={18}
                      style={{ verticalAlign: "middle" }}
                    />
                  </Link>
                </Button>
                <Menu
                  id="fade-menu1"
                  MenuListProps={{
                    "aria-labelledby": "fade-button1",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Grid>
              {/* <Divider orientation="vertical" flexItem /> */}

              <Grid item>
                <Button
                  id="fade-button2"
                  aria-controls={open ? "fade-menu2" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  // onClick={handleClick}
                >
                  All-Access
                </Button>
                {/* <Menu
                  id="fade-menu2"
                  MenuListProps={{
                    "aria-labelledby": "fade-button2",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu> */}
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item>
                <Button
                  id="fade-button3"
                  aria-controls={open ? "fade-menu3" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Templates
                </Button>
                <Menu
                  id="fade-menu3"
                  MenuListProps={{
                    "aria-labelledby": "fade-button3",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Grid>
              <Divider orientation="vertical" flexItem />

              <Grid item>
                <Button
                  id="fade-button4"
                  aria-controls={open ? "fade-menu4" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Assets
                </Button>
                <Menu
                  id="fade-menu4"
                  MenuListProps={{
                    "aria-labelledby": "fade-button4",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Grid>
              <Divider orientation="vertical" flexItem />

              <Grid item>
                <Button
                  id="fade-button5"
                  aria-controls={open ? "fade-menu5" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  Tools
                </Button>
                <Menu
                  id="fade-menu5"
                  MenuListProps={{
                    "aria-labelledby": "fade-button5",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              </Grid>
              <Divider orientation="vertical" flexItem />

              <Grid item>
                <Button
                  id="fade-button6"
                  aria-controls={open ? "fade-menu6" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  // onClick={handleClick}
                >
                  Studio
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box>
            <Grid
              container
              justifyContent="space-between"
              alignContent="center"
            >
              <Grid item>
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Button variant="outlined" size="small">
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Stack>
      </Toolbar>
      {sections ? (
        <Toolbar
          component="nav"
          variant="dense"
          sx={{ justifyContent: "space-between", overflowX: "auto" }}
        >
          {sections.map((section) => (
            <Link
              color="primary"
              noWrap
              key={section.title}
              variant="body2"
              href={section.url}
              sx={{
                px: 2,
                py: 0.5,
                flexShrink: 0,
                borderRadius: 5,
                border: 1,
                mr: 1,
                textDecoration: "none",
                color: "primary.100",
                bgcolor: "grey.100",
                ":hover": {
                  color: "grey.600",
                  bgcolor: "grey.300",
                },
              }}
            >
              {section.title}
            </Link>
          ))}
        </Toolbar>
      ) : null}
    </React.Fragment>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};

export default Header;
