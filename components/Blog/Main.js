import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Markdown from "./Markdown";

import TimerIcon from "@mui/icons-material/TimerOutlined";
import UserIcon from "@mui/icons-material/AccountCircleOutlined";

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
          py: 2,
        },
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post, index) => (
        <Box
          key={post.data.date + index}
          sx={{ bgcolor: "grey.100", mb: 2, px: 2, pb: 2 }}
          boxShadow="lg"
        >
          <Typography variant="h6" component="h3" pt={2}>
            {post.data.title}
          </Typography>
          <Markdown className="markdown">
            {post.content}
            {/* {post.excerpt} */}
          </Markdown>
          <TimerIcon sx={{ verticalAlign: "middle", mr: 0.5 }} />
          {post.data.date} -{" "}
          <UserIcon sx={{ verticalAlign: "middle", mr: 0.5 }} />
          {post.data.author}
        </Box>
      ))}
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired, // PropTypes.string
  title: PropTypes.string.isRequired,
};

export default Main;
