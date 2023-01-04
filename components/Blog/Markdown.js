import * as React from "react";
import ReactMarkdown from "markdown-to-jsx";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function MarkdownListItem(props) {
  return <Box component="li" sx={{ mt: 1, typography: "body1" }} {...props} />;
}

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "h4",
        component: "h2",
      },
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: "h7", component: "h4" },
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: "subtitle" },
      // props: { gutterBottom: true, variant: "h6" },
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: "caption",
        paragraph: true,
      },
    },
    p: {
      component: Typography,
      props: { paragraph: true, variant: "subtitle2", color: "secondary" },
    },
    a: { component: Link },
    li: {
      component: MarkdownListItem,
    },
  },
};

export default function Markdown(props) {
  return <ReactMarkdown options={options} {...props} />;
}
