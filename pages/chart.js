import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";
/* Components */
import Chart from "@components/Chart/ReChart";

export default function PageChart() {
  return (
    <DashboardLayout>
      <Container maxWidth="xl">
        <Grid item xs={12} md={8} lg={9} marginY={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              minHeight: 240,
            }}
          >
            <Chart />
          </Paper>
        </Grid>
      </Container>
    </DashboardLayout>
  );
}
