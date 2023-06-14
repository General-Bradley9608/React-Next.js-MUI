import * as React from "react";
import { Box, Tab, Tabs } from "@mui/material";
import PropTypes from "prop-types";

function BasicTabs(props) {
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
    type = "",
    ...rest
  } = props;

  const [value, setValue] = React.useState(0);
  const style = type
    ? {
        ".MuiButtonBase-root.Mui-selected": {
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          borderColor: "secondary.main",
          padding: "12px 16px",
          lineHeight: "1.75",
          border: "2px",
          display: "block",
          borderColor: "none",
          backgroundColor: "secondary.light",
          svg: { verticalAlign: "middle" },
        },
      }
    : "";

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const TabPanel = (localProps) => {
    const { children, value, index, title, ...other } = localProps;
    return (
      <Box
        key={`${index}-${value}b1`}
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box key={`${index}-b2`} sx={{ p: 3 }}>
            {children.length &&
              children.map((child, i) => {
                return <React.Fragment key={title + i}>{child}</React.Fragment>;
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
          key={value + 1}
          value={value}
          onChange={handleChange}
          aria-label={`basic tabs ${items.length}`}
          {...(type ? { sx: style } : "")}
          {...(rest ? rest : {})}
        >
          {items.length > 0 &&
            items.map((item, i) => {
              return (
                <Tab
                  key={`${i + value}`}
                  label={item.title}
                  {...(item.props ? { ...item.props } : {})}
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

BasicTabs.propTypes = {
  type: PropTypes.string,
  items: PropTypes.array,
  rest: PropTypes.object,
};

export default BasicTabs;
