import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";
/* Components */
import Chart from "@components/Chart/ReChart";

export default function PageChart() {
  return (
    <DashboardLayout>
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
    </DashboardLayout>
  );
}
