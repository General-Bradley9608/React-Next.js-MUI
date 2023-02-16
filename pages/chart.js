import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";

/* Components */
import Cog from "@components/Cog/Default";
import Chart from "@components/Chart/ReChart";
import TabsDefault from "@components/Tabs/Default";

export default function Page() {
  function renderChart() {
    return (
      <Stack justifyContent="space-between" direction="column" spacing={0}>
        <Stack justifyContent="space-between" direction="row" spacing={0}>
          <Box>
            <Typography component="h4" variant="body1">
              Chart
            </Typography>
          </Box>
          <Box>
            <Cog />
          </Box>
        </Stack>
        <Box>
          <Chart />
        </Box>
      </Stack>
    );
  }

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
            <TabsDefault
              items={[
                { title: "Chart JS", item: renderChart() },
                { title: "Chart JS Two", item: renderChart() },
                { title: "Chart JS Three", item: renderChart() },
              ]}
            />
          </Paper>
        </Grid>
      </Container>
    </DashboardLayout>
  );
}
