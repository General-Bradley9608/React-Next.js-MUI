import { Box, Grid, Paper, Typography } from "@mui/material";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";
/* Components */
// import Chart from "@components/Chart/ReChart";

export default function Page() {
  return (
    <DashboardLayout>
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          minHeight: 240,
          marginTop: "2rem",
        }}
      >
        <Grid container xs={12} md={8} lg={12} xl={12} spacing={4}>
          <Grid item xs={12} md={6} marginBottom={2}>
            <Typography component="h2" variant="h5">
              Components
            </Typography>
            <Box>
              Cards
              <Box>Albums</Box>
            </Box>
            <Box>
              Alert
              <Box>Albums</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} marginBottom={2}>
            <Typography component="h2" variant="h5">
              Headings
            </Typography>
            <Box>
              Cards
              <Box>Albums</Box>
            </Box>
            <Box>
              Alert
              <Box>Albums</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} marginBottom={2}>
            <Typography component="h2" variant="h5">
              Headings
            </Typography>
            <Box>
              Cards
              <Box>Albums</Box>
            </Box>
            <Box>
              Alert
              <Box>Albums</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} marginBottom={2}>
            <Typography component="h2" variant="h5">
              Headings
            </Typography>
            <Box>
              Cards
              <Box>Albums</Box>
            </Box>
            <Box>
              Alert
              <Box>Albums</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} marginBottom={2}>
            <Typography component="h2" variant="h5">
              Headings
            </Typography>
            <Box>
              Cards
              <Box>Albums</Box>
            </Box>
            <Box>
              Alert
              <Box>Albums</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} marginBottom={2}>
            <Typography component="h2" variant="h5">
              Headings
            </Typography>
            <Box>
              Cards
              <Box>Albums</Box>
            </Box>
            <Box>
              Alert
              <Box>Albums</Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </DashboardLayout>
  );
}
