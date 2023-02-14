"use client";

import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";

export default function BasicTabs(props) {
  const {
    items = [
      {
        title: "Tab One",
        item: "Tab Content One",
      },
      {
        title: "Tab Two",
        item: "Tab Content Two",
      },
    ],
  } = props;
  // console.log(props);
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (localProps) => {
    const { children, value, index, ...other } = localProps;
    // console.log(children);
    return (
      <Box
        key={index}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            {children.length &&
              children.map((child, i) => {
                return (
                  <React.Fragment key={i}>
                    {child}
                    {i}
                  </React.Fragment>
                );
              })}
          </Box>
        )}
      </Box>
    );
  };

  const a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} children={[items]} />
      {/* {props?.item} */}
      {/* </TabPanel> */}
      <TabPanel value={value} index={1} children={[items]} />
      {/* Item Two */}
      {/* </TabPanel> */}
      <TabPanel value={value} index={2} children={[items]} />
      {/* Item Three */}
      {/* </TabPanel> */}
    </Box>
  );
}
