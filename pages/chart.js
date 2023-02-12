import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";
/* Components */
import Cog from "@components/Cog/Default";
import Chart from "@components/Chart/ReChart";
import TabPanel from "@components/TabPanel/Default";

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
            <TabPanel
              item={
                <Stack justifyContent="space-evenly" direction="row">
                  <Chart />
                  <Cog />
                </Stack>
              }
            />
          </Paper>
        </Grid>
      </Container>
    </DashboardLayout>
  );
}
