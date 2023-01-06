import * as React from "react";
import { styled } from "@mui/material/styles";

/* Components */
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
// import Input from "@mui/material/Input";
// import ClickAwayListener from "@mui/material/ClickAwayListener";

import {
  Container,
  Box,
  Toolbar,
  List,
  Typography,
  Input,
  Divider,
  IconButton,
  Link,
} from "@mui/material";

/* Icons */
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/HomeOutlined";
import AccountIcon from "@mui/icons-material/AccountCircle";

/* Components */
import {
  mainListItems,
  secondaryListItems,
} from "@components/ListMenu/listItems";
import Copyright from "@components/Copyright";
import FloatConfig from "@components/Float/Config";
import FloatNotify from "@components/Float/Notify";
import ScrollToTop from "@components/Scroll/ToTop";

/* Config */
import { constant } from "@config/constants";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

function DashboardContent({ children }) {
  const [open, setOpen] = React.useState(true);
  const [searchOpen, setSearchOpen] = React.useState(true);
  const [openNotify, setOpenNotify] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    setOpenNotify(false);
  }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenuProfile = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleClickAway = () => {
  //   setSearchOpen(false);
  // };

  const itemsNotify = [
    {
      id: 1,
      author: "Mr. Dimsum",
      title: "Completely synergize resource taxing relationships",
      text: "Interactively coordinate proactive e-commerce via process-centric thinking. Completely pursue scalable customer service through sustainable potentialities. Collaboratively administrate turnkey channels whereas virtual e-tailers. Objectively seize scalable metrics whereas proactive e-services. Seamlessly empower fully researched growth strategies and interoperable internal or sources.",
    },
    {
      id: 2,
      author: "Ms Diane Flock",
      title:
        "Objectively innovate empowered manufactured products whereas parallel",
      text: "Interactively procrastinate high-payoff content without backward-compatible data. Quickly cultivate optimal processes and tactical architectures.",
    },
    {
      id: 3,
      author: "Lamelo Ball",
      title:
        "Proactively envisioned multimedia based expertise and cross-media growth strategies",
      text: "Quickly disseminate superior deliverables whereas web-enabled applications. Quickly drive clicks-and-mortar catalysts for change before vertical architectures.",
    },
    {
      id: 4,
      author: "Andre Vicks",
      title:
        "Phosfluorescently engage worldwide methodologies with web-enabled technology",
      text: "Completely synergize scalable e-commerce rather than high standards in e-services. Assertively iterate resource maximizing products after leading-edge intellectual capital.",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <AppBar position="absolute" open={open} color="light">
        <Toolbar
          sx={{
            pr: "24px", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
          <IconButton
            color="inherit"
            href="/"
            sx={{
              marginLeft: 0,
              marginRight: "5px",
            }}
          >
            <HomeIcon fontSize="small" />
          </IconButton>
          <Typography
            component="h2"
            variant="subtitle1"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          >
            Dashboard
          </Typography>
          <IconButton
            color="inherit"
            onClick={() => setSearchOpen(!searchOpen)}
          >
            <SearchIcon fontSize="small" />
          </IconButton>
          {/* <ClickAwayListener onClickAway={() => setSearchOpen(!searchOpen)}> */}
          <Box
            onBlur={() => setSearchOpen(!searchOpen)}
            hidden={searchOpen}
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 2, width: "12ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <Input
              placeholder="Search.."
              color="light"
              ref={inputRef}
              autoFocus
            />
          </Box>
          {/* </ClickAwayListener> */}
          <FloatNotify show={openNotify} items={itemsNotify} />
          <IconButton
            color="inherit"
            aria-label="profile of current user"
            aria-controls="menu-appbar-profile"
            aria-haspopup="true"
            onClick={handleMenuProfile}
          >
            <AccountIcon fontSize="small" />
          </IconButton>
          <Menu
            id="menu-appbar-profile"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem dense onClick={handleClose} href="/profile">
              <AccountIcon fontSize="small" /> Profile
            </MenuItem>
            <MenuItem dense onClick={handleClose}>
              <AccountIcon fontSize="small" /> My account
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{
          boxShadow: "0 .3rem .8rem rgba(0, 0, 0, .12)",
          transition: "all .2s ease-out",
          zIndex: 11,
          border: 0,
          ...(!open && {
            ".MuiDrawer-paper": {
              width: "58px",
              position: "relative",
            },
          }),
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: [1],
          }}
        >
          <Link
            href="/"
            sx={{
              transition: "all .5s ease",
              verticalAlign: "middle",
              ml: 1.5,
              ":hover": {
                filter: "brightness(1.35);",
              },
            }}
          >
            <img
              src="/logo.svg"
              alt={constant.siteName}
              height={24}
              style={{ verticalAlign: "middle" }}
            />
          </Link>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List
          component="nav"
          sx={{
            a: { textDecoration: "none" },
          }}
        >
          {mainListItems(open)}
          <Divider sx={{ my: 1 }} />
          {secondaryListItems(open)}
        </List>
      </Drawer>
      <Box
        id="back-to-top-anchor"
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="xl" sx={{ mt: 2, mb: 4, pt: 6 }}>
          <FloatConfig />
          {children}
          <Copyright />
          <ScrollToTop />
        </Container>
      </Box>
    </Box>
  );
}

export default function DashboardLayout({ children }) {
  return <DashboardContent>{children}</DashboardContent>;
}
