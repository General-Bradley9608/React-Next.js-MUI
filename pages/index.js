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

const styled = {
  height: "100%",
  position: "relative",
  padding: "2rem 0rem",
  zIndex: "0",
  "::before": {
    content: "' '",
    backgroundColor: "#f2f2f2",
    position: "absolute",
    zIndex: "-1",
    top: "-30rem",
    bottom: 0,
    right: "-10rem",
    width: "1152px",
    height: "980px",
    transform: "rotate(-45deg)",
    borderRadius: "20px",
  },
};

export default function Index() {
  return (
    <Container maxWidth="lg" sx={styled}>
      <Typography
        variant="h1"
        md="h5"
        fontSize={{ xs: "2rem", sm: "3rem" }}
        color="secondary.light"
      >
        MUI Administrator Theme
      </Typography>
      <div>A premium Theme for your Next.js Website Application</div>
      <Box sx={{ my: 4 }}>
        <Grid
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
              href="/blog/Blog"
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
      <Typography variant="h4" component="h1" gutterBottom>
        Next.js example
      </Typography>
      <Link href="/about" color="secondary">
        Go to the about page
      </Link>
      <ProTip />
      <Copyright />
    </Container>
  );
}
