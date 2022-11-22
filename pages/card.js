import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";
/* Components */
import Card from "@components/Card/MediaCard";

export default function PageCard() {
  return (
    <DashboardLayout>
      <Typography variant="h4">Cards</Typography>
      <Grid columns={4}>
        <Grid item xs={12} md={8} lg={9}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </Paper>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
