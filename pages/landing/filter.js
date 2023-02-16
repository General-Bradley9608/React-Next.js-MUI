import * as React from "react";

// import Grid from "@mui/material/Grid";
import { Box, Container, Grid, Stack } from "@mui/material";

import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import Header from "@components/Header/Default";
import MainFeaturedPost from "@components/Blog/MainFeaturedPost";
import FeaturedPost from "@components/Blog/FeaturedPost";
import Main from "@components/Blog/Main";
import Sidebar from "@components/Blog/Sidebar";
import Footer from "@components/Blog/Footer";

// import post1 from "./blog-post.1.md";
// import post2 from "./blog-post.2.md";
// import post3 from "./blog-post.3.md";

const sections = [
  { title: "Freelancing", url: "#" },
  { title: "Design", url: "#" },
  { title: "Culture", url: "#" },
  { title: "Business", url: "#" },
  { title: "Economy", url: "#" },
  { title: "Opinion", url: "#" },
  { title: "Science", url: "#" },
  { title: "Health", url: "#" },
  { title: "Style", url: "#" },
  { title: "Travel", url: "#" },
];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12, 2022",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11, 2022",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random",
    imageLabel: "Image Text",
  },
];

// const posts = [post1, post2, post3].map((key) => {
//   return matter(key, { excerpt: false, excerpt_separator: "-->" });
// });

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "Twitter", icon: TwitterIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

export default function Blog() {
  return (
    <>
      <Container maxWidth="xxl" disableGutters>
        <Header title="Blog" sections={sections} />
        <MainFeaturedPost post={mainFeaturedPost} />
        <Container maxWidth="xxl" component="main">
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {/* <Main title="From the staff" posts={posts} /> */}
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </Container>
      </Container>
      <Container
        component="section"
        maxWidth="xxl"
        sx={{ backgroundColor: "secondary.light" }}
      >
        <Stack
          direction={{ md: "column", lg: "row" }}
          justifyContent="space-between"
          marginY={6}
          marginX="auto"
          maxWidth="xl"
          sx={{ verticalAlign: "top", paddingY: 2, paddingX: 0 }}
        >
          <Box>
            <h4>For Workers</h4>
            <ul>
              <li>Apply</li>
              <li>Freelance</li>
              <li>Apply</li>
              <li>Freelance</li>
            </ul>
          </Box>
          <Box>
            <h4>For Companies</h4>
            <ul>
              <li>Talents</li>
              <li>Post Job</li>
              <li>Talents</li>
              <li>Post Job</li>
            </ul>
          </Box>
          <Box>
            <h4>Directories</h4>
            <ul>
              <li>Talents</li>
              <li>Post Job</li>
              <li>Talents</li>
              <li>Post Job</li>
            </ul>
          </Box>
          <Box>
            <h4>Resources</h4>
            <ul>
              <li>Talents</li>
              <li>Post Job</li>
              <li>Talents</li>
              <li>Post Job</li>
            </ul>
          </Box>
          <Box>
            <h4>About Us</h4>
            <p>
              We are a companies that connect your needs
              <br />
              <small>We are a companies that connect your needs</small>
            </p>
            <p>
              We are a companies that connect your needs
              <br />
              <small>We are a companies that connect your needs</small>
            </p>
            <p>
              We are a companies that connect your needs
              <br />
              <small>We are a companies that connect your needs</small>
            </p>
          </Box>
        </Stack>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </>
  );
}
