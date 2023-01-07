import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

/* Config */
import { constant } from "@config/constants";
import Copyright from "@components/Copyright";

const theme = createTheme();

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  const style = {
    boxContainer: {
      position: "relative",
      zIndex: 0,
      width: "100%",
      height: "100vh",
      display: "block",
      overflow: "hidden",
      // backgroundImage:
      //   "url(https://images.unsplash.com/photo-1586074299757-dc655f18518c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=1152&q=80)",
      "::before, ::after": {
        content: '" "',
        position: "absolute",
        zIndex: -1,
        backgroundColor: "secondary.light",
        display: "block",
        width: "1128px",
        height: "1200px",
        // borderRadius: "10px",
        // transform: "rotate(20deg)",
        bottom: 0,
        clipPath: "polygon(15% 0%, 100% 0, 85% 100%, 0% 100%)",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=1200&q=80)",
        backgroundRepeat: "no-repeat",
        // borderStyle: "solid",
        // borderWidth: "0 50px 86.6px 50px",
        // borderColor: "transparent transparent #007bff transparent",
      },
      "::before": {
        left: "-35rem",
      },
      "::after": {
        top: 0,
        right: "-35rem",
      },
    },
  };
  return (
    // <ThemeProvider theme={theme}>
    <Box component="main" sx={style.boxContainer}>
      <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link
            href="/"
            sx={{
              transition: "all .5s ease",
              verticalAlign: "middle",
              mx: "auto",
              mb: 2,
              ":hover": {
                filter: "brightness(1.35);",
              },
            }}
          >
            <img
              src="/logo.svg"
              alt={constant.siteName}
              height={24}
              style={{ verticalAlign: "middle" }}
            />
          </Link>
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  size="small"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      size="small"
                      value="allowExtraEmails"
                      color="primary"
                    />
                  }
                  label={
                    <Typography variant="body2" component="p">
                      I want to receive inspiration, marketing promotions and
                      updates via email.
                    </Typography>
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/auth/signin" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </Box>
  );
}
