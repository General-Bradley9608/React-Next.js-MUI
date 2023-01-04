import * as React from "react";

import { styled } from "@mui/material/styles";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonBase from "@mui/material/ButtonBase";

/* Components */
import ProTip from "@components/ProTip";
import Link from "@components/Link";
import Copyright from "@components/Copyright";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Page
        </Typography>
        <div>
          Leverage agile frameworks to provide a robust synopsis for high level
          overviews. Iterative approaches to corporate strategy foster
          collaborative thinking to further the overall value proposition.
          <br />
          <br />
          Organically grow the holistic world view of disruptive innovation via
          workplace diversity and empowerment. Bring to the table win-win
          survival strategies to ensure proactive domination. At the end of the
          day, going forward, a new normal that has evolved from generation X is
          on the runway heading towards a streamlined cloud solution. User
          generated content in real-time will have multiple touchpoints for
          offshoring.
          <br />
          <br />
          Capitalize on low hanging fruit to identify a ballpark value added
          activity to beta test. Override the digital divide with additional
          clickthroughs from DevOps. Nanotechnology immersion along the
          information highway will close the loop on focusing solely on the
          bottom line.
        </div>
        <Container maxWidth="sm">
          <Paper
            sx={{
              p: 2,
              marginLeft: "auto",
              marginRight: "auto",
              marginBottom: "2rem",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img
                    alt="complex"
                    src="https://images.unsplash.com/photo-1672501713256-2c2112e27b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=987&q=80"
                  />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Standard license
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      Full resolution 1920x1080 • JPEG
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ID: 1030114
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography sx={{ cursor: "pointer" }} variant="body2">
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    $19.00
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
        <div>
          <Button variant="contained" component={Link} noLinkStyle href="/">
            Go to the main page
          </Button>
        </div>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
