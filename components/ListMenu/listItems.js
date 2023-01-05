import * as React from "react";

import AssignmentIcon from "@mui/icons-material/Assignment";

import {
  Link,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListSubheader,
} from "@mui/material";

/* routes */
import { routeDashboard } from "@config/routes";

export const mainListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset color="primary">
      Pages
    </ListSubheader>
    {Object.values(routeDashboard).map((route) => {
      return (
        <ListItemButton dense key={route.to}>
          <ListItemIcon>{route.icon}</ListItemIcon>
          <ListItemText primary={<Link href={route.href}>{route.name}</Link>} />
        </ListItemButton>
      );
    })}
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton dense>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton dense>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton dense>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
