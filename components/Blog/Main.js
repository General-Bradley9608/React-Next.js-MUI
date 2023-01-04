import * as React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";

function Main(props) {
  const { posts, title } = props;
  posts.map((post) => (post.excerpt = post.excerpt.replace("\n<!-- ", "")));

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => (
        <Markdown className="markdown" key={post.data.date + index + 1}>
          {post.content}
        </Markdown>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired, // PropTypes.string
  title: PropTypes.string.isRequired,
};

export default Main;
