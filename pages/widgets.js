import { Box, Container, Grid, Paper, Stack, Typography } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import PersonPinIcon from "@mui/icons-material/PersonPin";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";

/* Components */
import Cog from "@components/Cog/Default";
import TabsDefault from "@components/Tabs/Default";

export default function Page() {
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
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Default
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Default Full
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Rounded
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Rounded Full
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Icon
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Icon Full
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Icon Rounded
              </Typography>
              <Box>Widgets</Box>
            </Box>
            <Box marginBottom={2}>
              <Typography
                marginBottom={1}
                color="secondary"
                component="h4"
                variant="subtitle2"
              >
                Icon Rounded Background
              </Typography>
              <Box>Widgets</Box>
            </Box>
          </Paper>
        </Grid>
      </Container>
    </DashboardLayout>
  );
}
