import * as React from "react";

/* MUI */
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Toolbar,
  ButtonGroup,
  Avatar,
} from "@mui/material";

import { deepOrange, green } from "@mui/material/colors";

import AddIcon from "@mui/icons-material/AddCircleOutline";
import VerifyIcon from "@mui/icons-material/VerifiedOutlined";
import PersonIcon from "@mui/icons-material/Person";
import FolderIcon from "@mui/icons-material/CheckOutlined";

/* Components */
import Link from "@components/Link";
import Copyright from "@components/Copyright";

/* Config */
import { constant } from "@config/constants";

/* Routes */
// import { routePage, routeDocumentation } from "@config/routes";

const dataCards = [
  {
    id: 1,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 2,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 3,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 4,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 5,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 6,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 7,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 8,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 9,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 10,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 11,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 12,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 13,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 14,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 14,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
  {
    id: 15,
    title: "Shining new feature",
    image:
      "https://images.unsplash.com/photo-1603969280040-3bbb77278211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80",
    description:
      "We added a new feature base on suggestion from our beloved users",
    createdAt: "20 Jan, 2023",
    postBy: "Dykraf",
    category: "Enhancement",
  },
];

const styled = {
  height: "100%",
  position: "relative",
  padding: "2rem 0rem 0rem 0rem",
  zIndex: "0",
  overflow: "hidden",
  "::before, ::after": {
    content: "' '",
    backgroundColor: "secondary.light",
    position: "absolute",
    zIndex: "-1",
    borderRadius: "20px",
    bottom: 0,
    transform: "rotate(-45deg)",
  },
  "::before": {
    top: "-30rem",
    right: "-10rem",
    width: "1152px",
    height: "980px",
  },
  "::after": {
    left: "-10rem",
    width: "1024px",
    height: "780px",
  },
};

const styledCard = {
  boxShadow: "1",
  borderRadius: "10px",
  minHeight: 240,
  p: 5,
  backgroundColor: "white",
  ":hover": { boxShadow: "3" },
};

const styledH = {
  display: "block",
  marginTop: "1rem",
  marginBottom: "1rem",
};

export default function Page() {
  return (
    <Box sx={styled}>
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: "2rem" }}>
          <Box mx="auto" textAlign="center" py={2}>
            <Link
              href="/"
              sx={{
                transition: "all .5s ease",
                verticalAlign: "middle",
                ml: 0,
                ":hover": {
                  filter: "brightness(1.35);",
                },
              }}
            >
              <img
                src="/logo.svg"
                alt={constant.siteName}
                height={34}
                style={{ verticalAlign: "middle" }}
              />
            </Link>
            <Typography
              variant="h1"
              md="h5"
              mt={3}
              fontSize={{ xs: "1.75rem", sm: "2rem" }}
              color="secondary.dark"
            >
              Material UI Financial Dashboard Administrator Theme
            </Typography>
            <div>A premium Theme for your Next.js Website Application</div>
            <Box my={3}>
              <Typography variant="h6" color="secondary">
                6,071 curated design resources to speed up your creative
                workflow. Join a growing family of 613,636 designers and makers
                from around the world.
              </Typography>
            </Box>
            <Button variant="contained">START YOUR SEARCH</Button>
          </Box>
        </Box>
      </Container>
      <Container
        disableGutters
        maxWidth="xxl"
        sx={{
          backgroundColor: "white",
          minHeight: "100vh",
          height: "100%",
          pb: 4,
        }}
      >
        <Container maxWidth="xl">
          <Box
            component="section"
            sx={{ textAlign: "center", marginX: "auto", pb: 0, pt: 2 }}
          >
            <Toolbar
              disableGutters
              component="nav"
              sx={{
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                mb: 2,
                a: {
                  textDecoration: "none",
                  ":hover": { textDecoration: "underline" },
                },
              }}
            >
              <Link href="/gallery" mr={3} variant="h6">
                Featured
              </Link>
              <Link href="/gallery" mr={3} variant="h6">
                Trending
              </Link>
              <Link href="/gallery" mr={3} variant="h6">
                New Releases
              </Link>
            </Toolbar>
          </Box>
          <Box marginX={4}>
            <Grid
              container
              maxWidth="xl"
              marginX="auto"
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
            >
              {dataCards.map((item) => {
                return (
                  <Grid
                    key={item.id + 1}
                    item
                    xs={12}
                    sm={4}
                    md={3}
                    width="100%"
                    height="100%"
                  >
                    <Link
                      href={"#"}
                      sx={{
                        textDecoration: "none",
                        height: "100%",
                        display: "block",
                        ":hover": { color: "primary.light" },
                      }}
                    >
                      <Box
                        sx={{
                          boxShadow: "1",
                          p: 0,
                          borderRadius: ".5rem",
                          backgroundColor: "white",
                          transition: "box-shadow .35s ease",
                          overflow: "hidden",
                          mx: "auto",
                          textAlign: "center",
                          position: "relative",
                          maxHeight: "320px",
                          height: "210px",
                          backgroundSize: "cover",
                          backgroundPosition: "center center",
                          backgroundImage: `url(${item.image})`,
                          ":hover": {
                            boxShadow: 24,
                            ".cpopover": {
                              visibility: "visible",
                              zIndex: 1,
                            },
                          },
                          ".cpopover": {
                            visibility: "hidden",
                          },
                        }}
                      >
                        <Box
                          className="cpopover"
                          sx={{
                            transition: ".25s ease",
                            position: "absolute",
                            backgroundColor: "rgba(0,0,0,0.75)",
                            left: 0,
                            right: 0,
                            bottom: 0,
                            top: 0,
                            zIndex: 0,
                            display: "flex",
                            flexWrap: "wrap",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            alignContent: "stretch",
                          }}
                        >
                          <ButtonGroup>
                            <Button
                              variant="contained"
                              startIcon={<VerifyIcon />}
                            >
                              Visit
                            </Button>
                            <Button variant="contained" startIcon={<AddIcon />}>
                              Wishlist
                            </Button>
                          </ButtonGroup>
                        </Box>
                      </Box>
                      <Box px={1} py={2}>
                        <Typography
                          variant="subtitle1"
                          fontWeight="600"
                          color={deepOrange[500]}
                        >
                          {item.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          component="p"
                          color="secondary.main"
                        >
                          {item.description}
                        </Typography>
                        <Grid
                          container
                          marginX="auto"
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          marginY={1}
                        >
                          <Grid item display="flex" alignItems="center">
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 18,
                                height: 18,
                                bgcolor: deepOrange[500],
                              }}
                            >
                              <PersonIcon fontSize="small" />
                            </Avatar>
                            <Typography
                              variant="caption"
                              component="span"
                              color="secondary"
                              ml={0.85}
                            >
                              {item.postBy}
                            </Typography>
                          </Grid>
                          <Grid item display="flex" alignItems="center">
                            <Avatar
                              variant="rounded"
                              sx={{
                                width: 18,
                                height: 18,
                                bgcolor: green[500],
                              }}
                            >
                              <FolderIcon fontSize="small" />
                            </Avatar>
                            <Typography
                              variant="caption"
                              component="span"
                              color="secondary"
                              ml={0.85}
                            >
                              {item.category}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Box>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
            <Box textAlign="center" mt={4} mb={8}>
              <Button variant="contained" marginX="auto">
                More Gallery
              </Button>
            </Box>
          </Box>
        </Container>
        <Copyright />
      </Container>
    </Box>
  );
}
