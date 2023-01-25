import * as React from "react";

import AssignmentIcon from "@mui/icons-material/Assignment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

import {
  Link,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  ListSubheader,
  List,
  Collapse,
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

export const secondaryListItems = (compact = false) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!compact) {
      setOpen(false);
    }
  }, [compact]);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListSubheader component="div" hidden={!compact} color="primary">
        Ui Elements
      </ListSubheader>
      <ListItemButton dense>
        <ListItemIcon>
          <AssessmentIcon />
        </ListItemIcon>
        <ListItemText primary={`Current month`} onClick={handleClick} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding>
          <ListItemButton dense sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Widgets" />
          </ListItemButton>
        </List>
      </Collapse>
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
};

export const thirdListItems = (compact = false) => (
  <React.Fragment>
    <ListSubheader component="div" hidden={!compact} color="primary">
      Widgets
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
  </React.Fragment>
);
