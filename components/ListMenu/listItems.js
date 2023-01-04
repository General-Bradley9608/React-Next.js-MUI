import * as React from "react";

import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import AppRegistration from "@mui/icons-material/AppRegistration";

import {
  Link,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListSubheader,
} from "@mui/material";

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Pages
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary={<Link href="/dashboard">Dashboard</Link>} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary={<Link href="/chart">Charts</Link>} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <ListItemText primary={<Link href="/card">Cards</Link>} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary={<Link href="/auth/signin">Users</Link>} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AppRegistration />
      </ListItemIcon>
      <ListItemText primary={<Link href="/form/form">Forms</Link>} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <CardTravelIcon />
      </ListItemIcon>
      <ListItemText primary={<Link href="/reports">Reports</Link>} />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary={<Link href="/blog">Blogs</Link>} />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
