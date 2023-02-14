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
      {
        title: "Tab Three",
        item: "Tab Content Three",
      },
    ],
  } = props;

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (localProps) => {
    const { children, value, index, title, ...other } = localProps;
    return (
      <Box
        key={`${index}-b1`}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box key={`${index}-b2`} sx={{ p: 3 }}>
            {children.length &&
              children.map((child) => {
                return <React.Fragment key={title}>{child}</React.Fragment>;
              })}
          </Box>
        )}
      </Box>
    );
  };

  const a11yProps = (index) => {
    return {
      key: `${index + index}`,
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
          aria-label={`basic tabs ${items.length}`}
          key={value + 1}
        >
          {items.length > 0 &&
            items.map((item, i) => {
              return (
                <Tab
                  key={`${i + value}`}
                  label={item.title}
                  {...a11yProps(i)}
                />
              );
            })}
        </Tabs>
      </Box>
      {items.length > 0 &&
        items.map((item, i) => {
          return (
            <TabPanel
              key={`${item.title}-${i + value}`}
              value={value}
              index={i}
              title={item.title}
              children={[item.item]}
            />
          );
        })}
    </Box>
  );
}
