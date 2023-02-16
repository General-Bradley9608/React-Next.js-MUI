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
              <TabsDefault
                items={[
                  { title: "Tab One Title", item: "Tab One Content" },
                  { title: "Tab Two Title", item: "Tab Two Content" },
                  { title: "Tab Three Title", item: "Tab Three Content" },
                ]}
              />
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
              <TabsDefault
                variant="fullWidth"
                items={[
                  { title: "Tab One Title", item: "Tab One Content" },
                  { title: "Tab Two Title", item: "Tab Two Content" },
                  { title: "Tab Three Title", item: "Tab Three Content" },
                  { title: "Tab Four Title", item: "Tab Four Content" },
                  { title: "Tab Five Title", item: "Tab Five Content" },
                ]}
              />
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
              <TabsDefault
                type="outlined"
                items={[
                  { title: "Tab One Title", item: "Tab One Content" },
                  { title: "Tab Two Title", item: "Tab Two Content" },
                  { title: "Tab Three Title", item: "Tab Three Content" },
                ]}
              />
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
              <TabsDefault
                type="outlined"
                variant="fullWidth"
                items={[
                  { title: "Tab One Title", item: "Tab One Content" },
                  { title: "Tab Two Title", item: "Tab Two Content" },
                  { title: "Tab Three Title", item: "Tab Three Content" },
                  { title: "Tab Four Title", item: "Tab Four Content" },
                  { title: "Tab Five Title", item: "Tab Five Content" },
                ]}
              />
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
              <TabsDefault
                items={[
                  {
                    title: "Tab One Title",
                    item: "Tab One Content",
                    props: {
                      icon: <PhoneIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                  {
                    title: "Tab Two Title",
                    item: "Tab Two Content",
                    props: {
                      icon: <PhoneMissedIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                  {
                    title: "Tab Three Title",
                    item: "Tab Three Content",
                    props: {
                      icon: <PersonPinIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                ]}
              />
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
              <TabsDefault
                variant="fullWidth"
                items={[
                  {
                    title: "Tab One Title",
                    item: "Tab One Content",
                    props: {
                      icon: <PhoneIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                  {
                    title: "Tab Two Title",
                    item: "Tab Two Content",
                    props: {
                      icon: <PhoneMissedIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                  {
                    title: "Tab Three Title",
                    item: "Tab Three Content",
                    props: {
                      icon: <PhoneIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                  {
                    title: "Tab Four Title",
                    item: "Tab Four Content",
                    props: {
                      icon: <PhoneMissedIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                  {
                    title: "Tab Five Title",
                    item: "Tab Five Content",
                    props: {
                      icon: <PersonPinIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                ]}
              />
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
              <TabsDefault
                type="rounded"
                items={[
                  {
                    title: "Tab One Title",
                    item: "Tab One Content",
                    props: {
                      icon: <PhoneIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                  {
                    title: "Tab Two Title",
                    item: "Tab Two Content",
                    props: {
                      icon: <PhoneMissedIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                  {
                    title: "Tab Three Title",
                    item: "Tab Three Content",
                    props: {
                      icon: <PersonPinIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: { minHeight: "36px" },
                    },
                  },
                ]}
              />
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
              <TabsDefault
                items={[
                  {
                    title: "Tab One Title",
                    item: "Tab One Content",
                    props: {
                      icon: <PhoneIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: {
                        minHeight: 47,
                        backgroundColor: "secondary.light",
                      },
                    },
                  },
                  {
                    title: "Tab Two Title",
                    item: "Tab Two Content",
                    props: {
                      icon: <PhoneMissedIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: {
                        minHeight: 47,
                        backgroundColor: "secondary.light",
                      },
                    },
                  },
                  {
                    title: "Tab Three Title",
                    item: "Tab Three Content",
                    props: {
                      icon: <PersonPinIcon fontSize="small" />,
                      iconPosition: "start",
                      sx: {
                        minHeight: 47,
                        backgroundColor: "secondary.light",
                      },
                    },
                  },
                ]}
              />
            </Box>
          </Paper>
        </Grid>
      </Container>
    </DashboardLayout>
  );
}
