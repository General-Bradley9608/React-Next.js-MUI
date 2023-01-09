import * as React from "react";

import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SummarizeIcon from "@mui/icons-material/Summarize";

import {
  Link,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListSubheader,
} from "@mui/material";

/* routes */
import { routeDashboard } from "@config/routes";

export const mainListItems = (compact = true) => (
  <React.Fragment>
    <ListSubheader component="div" hidden={!compact} color="primary">
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

export const secondaryListItems = (compact = false) => (
  <React.Fragment>
    <ListSubheader component="div" hidden={!compact} color="primary">
      Ui Elements
    </ListSubheader>
    <ListItemButton dense>
      <ListItemIcon>
        <AssessmentIcon />
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
        <SummarizeIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);
