import * as React from "react";

/* MUI */
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

/* Components */
import ProTip from "@components/ProTip";
import Link from "@components/Link";
import Copyright from "@components/Copyright";

/* Icons */
import ApiIcon from "@mui/icons-material/Api";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const styled = {
  height: "100%",
  position: "relative",
  padding: "2rem 0rem",
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

export default function Index() {
  return (
    <Box maxWidth="xxl" sx={styled}>
      <Container maxWidth="lg">
        <Box sx={{ marginBottom: "2rem" }}>
          <Typography
            variant="h1"
            md="h5"
            fontSize={{ xs: "2rem", sm: "3rem" }}
            color="secondary.dark"
          >
            MUI Administrator Theme
          </Typography>
          <div>A premium Theme for your Next.js Website Application</div>
        </Box>
        <Box>
          <Typography color="primary" variant="h4" sx={styledH}>
            Pages
          </Typography>
          <Box marginY={4}>
            <Grid
              maxWidth="lg"
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
            >
              <Grid item xs={2} sm={4} md={4}>
                <Link
                  href="/dashboard"
                  sx={{
                    textDecoration: "none",
                    ":hover": { color: "primary.light" },
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "1",
                      p: 5,
                      borderRadius: ".5rem",
                      backgroundColor: "white",
                      ":hover": { boxShadow: "3" },
                    }}
                  >
                    <Typography variant="h5">Dashboard</Typography>
                    <Box>Administration Dashboard</Box>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link
                  href="/card"
                  sx={{
                    textDecoration: "none",
                    ":hover": { color: "primary.light" },
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "1",
                      p: 5,
                      borderRadius: ".5rem",
                      backgroundColor: "white",
                      ":hover": { boxShadow: "3" },
                    }}
                  >
                    <Typography variant="h5">Cards</Typography>
                    <Box>Card User Interface</Box>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link
                  href="/pricing"
                  sx={{
                    textDecoration: "none",
                    ":hover": { color: "primary.light" },
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "1",
                      p: 5,
                      borderRadius: ".5rem",
                      backgroundColor: "white",
                      ":hover": { boxShadow: "3" },
                    }}
                  >
                    <Typography variant="h5">Pricing</Typography>
                    <Box>Pricing User Interface</Box>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link
                  href="/auth/signin"
                  sx={{
                    textDecoration: "none",
                    ":hover": { color: "primary.light" },
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "1",
                      p: 5,
                      borderRadius: ".5rem",
                      backgroundColor: "white",
                      ":hover": { boxShadow: "3" },
                    }}
                  >
                    <Typography variant="h5">Sign In</Typography>
                    <Box>User Sign In Interface</Box>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link
                  href="/auth/signup"
                  sx={{
                    textDecoration: "none",
                    ":hover": { color: "primary.light" },
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "1",
                      p: 5,
                      borderRadius: ".5rem",

                      backgroundColor: "white",
                      ":hover": { boxShadow: "3" },
                    }}
                  >
                    <Typography variant="h5">Sign Up</Typography>
                    <Box>User Sign Up Interface</Box>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link
                  href="/blog"
                  sx={{
                    textDecoration: "none",
                    ":hover": { color: "primary.light" },
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "1",
                      p: 5,
                      borderRadius: ".5rem",

                      backgroundColor: "white",
                      ":hover": { boxShadow: "3" },
                    }}
                  >
                    <Typography variant="h5">Blog</Typography>
                    <Box>Blog Interface</Box>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link
                  href="/albums"
                  sx={{
                    textDecoration: "none",
                    ":hover": { color: "primary.light" },
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "1",
                      p: 5,
                      borderRadius: ".5rem",

                      backgroundColor: "white",
                      ":hover": { boxShadow: "3" },
                    }}
                  >
                    <Typography variant="h5">Albums</Typography>
                    <Box>Albums Interface</Box>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link
                  href="/chart"
                  sx={{
                    textDecoration: "none",
                    ":hover": { color: "primary.light" },
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "1",
                      p: 5,
                      borderRadius: ".5rem",

                      backgroundColor: "white",
                      ":hover": { boxShadow: "3" },
                    }}
                  >
                    <Typography variant="h5">Chart</Typography>
                    <Box>Charts Interface</Box>
                  </Box>
                </Link>
              </Grid>
              <Grid item xs={2} sm={4} md={4}>
                <Link
                  href="/checkout"
                  sx={{
                    textDecoration: "none",
                    ":hover": { color: "primary.light" },
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: "1",
                      p: 5,
                      borderRadius: ".5rem",

                      backgroundColor: "white",
                      ":hover": { boxShadow: "3" },
                    }}
                  >
                    <Typography variant="h5">Checkout</Typography>
                    <Box>Checkout Interface</Box>
                  </Box>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box marginY={4}>
          <Typography color="primary" variant="h4" sx={styledH}>
            Features
          </Typography>
          <Box>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 1, sm: 8, md: 12 }}
              rowGap={1}
            >
              <Grid item md={4} xs={24}>
                <Box sx={styledCard}>
                  <Typography variant="h5">Responsive Pages</Typography>
                  <Box variant="p">Mobile Responsive Pages</Box>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box sx={styledCard}>
                  <Typography variant="h5">Charts Component</Typography>
                  <Box variant="p">Chart Components in your Dashboard</Box>
                </Box>
              </Grid>
              <Grid item md={4} xs={24}>
                <Box sx={styledCard}>
                  <Typography variant="h5">Semantic HTML</Typography>
                  <Box variant="p">HTML5 Semantic HTML Tag</Box>
                </Box>
              </Grid>
              <Grid item xs={8}>
                <Box sx={styledCard}>
                  <Typography variant="h5">Button, Icons and Cards</Typography>
                  <Box variant="p">Ready to use Button, Icons and Cards</Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box marginY={4}>
          <Typography color="primary" variant="h4" sx={styledH}>
            Documentation
          </Typography>
          <Box>
            <Link
              href="/about"
              color="secondary"
              sx={{ textDecoration: "none", marginRight: "1rem" }}
            >
              <PersonPinIcon htmlColor="red" sx={{ verticalAlign: "middle" }} />{" "}
              Go to the about page
            </Link>
            <Link
              href="/documentation"
              color="secondary"
              sx={{ textDecoration: "none", marginRight: "1rem" }}
            >
              <ApiIcon htmlColor="red" sx={{ verticalAlign: "middle" }} /> Go to
              the documentation page
            </Link>
          </Box>
        </Box>
        <Box
          my={4}
          sx={{ backgroundColor: "secondary.light" }}
          borderRadius={2}
        >
          <ProTip />
        </Box>
        <Copyright />
      </Container>
    </Box>
  );
}
