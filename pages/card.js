import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";
/* Components */
import CardDefault from "@components/Card/MediaCard";

export default function Page() {
  const post = {
    title: "lorem ipsum dolor sit amet",
    description: "lorem ipsum dolor sit amet",
  };
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
            <CardDefault />
            <CardDefault />
            <CardDefault />
            <CardDefault />
            <CardDefault />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                image={post.image}
                alt={post.imageLabel}
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                image={post.image}
                alt={post.imageLabel}
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                image={post.image}
                alt={post.imageLabel}
              />
            </Card>
          </CardActionArea>
        </Grid>
        <Grid item xs={12} md={6}>
          <CardActionArea component="a" href="#">
            <Card sx={{ display: "flex" }}>
              <CardContent sx={{ flex: 1 }}>
                <Typography component="h2" variant="h5">
                  {post.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {post.date}
                </Typography>
                <Typography variant="subtitle1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="subtitle1" color="primary">
                  Continue reading...
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                sx={{ width: 160, display: { xs: "none", sm: "block" } }}
                image={post.image}
                alt={post.imageLabel}
              />
            </Card>
          </CardActionArea>
        </Grid>
      </Grid>
    </DashboardLayout>
  );
}
