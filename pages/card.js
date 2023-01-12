import {
  Box,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Paper,
} from "@mui/material";

/* Icons */
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import HomeIcon from "@mui/icons-material/HomeOutlined";
import StarIcon from "@mui/icons-material/StarBorderOutlined";
import BadgeIcon from "@mui/icons-material/FolderOpenTwoTone";
import PublishIcon from "@mui/icons-material/TimerTwoTone";
import ReadIcon from "@mui/icons-material/ChevronRightTwoTone";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";
/* Components */
import CardMedias from "@components/Card/Medias";

export default function Page() {
  const post = {
    title: "lorem ipsum dolor sit amet",
    description: "lorem ipsum dolor sit amet",
    image:
      "https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&h=720&q=80",
    createdAt: "11 January, 2023",
  };
  return (
    <DashboardLayout>
      <Typography variant="h6" marginTop={2}>
        Cards
      </Typography>
      <Box component="section">
        <Grid container mb={4} spacing={2}>
          <Grid item sm={12} md={6} lg={3}>
            <CardMedias />
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <CardMedias />
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <CardMedias />
          </Grid>
          <Grid item sm={12} md={6} lg={3}>
            <CardMedias />
          </Grid>
        </Grid>
      </Box>
      <Box component="section" my={6}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper
              sx={{
                p: 2,
                background: `url(${post.image}) top center no-repeat`,
                backgroundSize: "cover",
                position: "relative",
                display: "block",
                height: "100%",
                minHeight: "320px",
                zIndex: 0,
                color: "white",
                ":before": {
                  content: "' '",
                  position: "absolute",
                  left: 0,
                  right: 0,
                  zIndex: -1,
                  width: "100%",
                  heigth: "100%",
                  top: 0,
                  bottom: 0,
                  right: 0,
                  background:
                    "linear-gradient(180deg,rgba(2,0,36,0) 25%,rgba(0,0,0,.8));",
                },
              }}
            >
              <Box sx={{ position: "absolute", bottom: "0" }}>
                <Typography
                  component="h5"
                  variant="h5"
                  sx={{
                    position: "relative",
                    ":before": {
                      content: "' '",
                      height: "2px",
                      width: "5%",
                      backgroundColor: "#ffffff",
                      position: "absolute",
                      bottom: "-0.25rem",
                    },
                  }}
                >
                  Image of the cards
                </Typography>
                <Box
                  component="p"
                  fontSize="small"
                  sx={{
                    textTransform: "capitalize",
                  }}
                >
                  <BadgeIcon
                    fontSize="small"
                    sx={{
                      verticalAlign: "middle",
                      mr: 0.5,
                    }}
                  />
                  {post.description}
                  <PublishIcon
                    fontSize="small"
                    sx={{
                      verticalAlign: "middle",
                      mx: 0.5,
                    }}
                  />
                  {post.createdAt}
                </Box>
                <Box component="p" color="white">
                  Leverage agile frameworks to provide a robust synopsis for
                  high level overviews. Iterative approaches to corporate
                  strategy foster collaborative thinking to further the overall
                  value proposition.
                  <Button
                    endIcon={<ReadIcon />}
                    variant="default"
                    color="primary"
                  >
                    Read More
                  </Button>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 2,
                    background: `url(${post.image}) top center no-repeat`,
                    backgroundSize: "cover",
                    position: "relative",
                    display: "block",
                    height: "100%",
                    minHeight: "320px",
                    zIndex: 0,
                    color: "white",
                    textShadow: "2px 2px 15px #000000",
                    ":before": {
                      content: "' '",
                      position: "absolute",
                      left: 0,
                      right: 0,
                      zIndex: -1,
                      width: "100%",
                      heigth: "100%",
                      top: 0,
                      bottom: 0,
                      right: 0,
                      background:
                        "linear-gradient(180deg,rgba(2,0,36,0) 15%,rgba(0,0,0,.8));",
                    },
                  }}
                >
                  <Box>
                    <Button
                      variant="contained"
                      disableElevation
                      color="primary"
                      startIcon={<StarIcon />}
                    >
                      1.2
                    </Button>
                  </Box>
                  <Box sx={{ position: "absolute", bottom: "1rem" }}>
                    <Typography component="h4" variant="h5">
                      Image of the cards
                    </Typography>
                    <Box component="span">{post.description}</Box>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper
                  sx={{
                    p: 2,
                    background: `url(${post.image}) top center no-repeat`,
                    backgroundSize: "cover",
                    position: "relative",
                    display: "block",
                    height: "100%",
                    minHeight: "320px",
                    zIndex: 0,
                    color: "white",
                    textShadow: "2px 2px 15px #000000",
                    ":before": {
                      content: "' '",
                      position: "absolute",
                      left: 0,
                      right: 0,
                      zIndex: -1,
                      width: "100%",
                      heigth: "100%",
                      top: 0,
                      bottom: 0,
                      right: 0,
                      background:
                        "linear-gradient(180deg,rgba(2,0,36,0) 15%,rgba(0,0,0,.8));",
                    },
                  }}
                >
                  <Box>
                    <Button
                      variant="contained"
                      disableElevation
                      color="primary"
                      startIcon={<StarIcon />}
                    >
                      1.2
                    </Button>
                  </Box>
                  <Box sx={{ position: "absolute", bottom: "1rem" }}>
                    <Typography component="h4" variant="h5">
                      Image of the cards
                    </Typography>
                    <Box component="span">{post.description}</Box>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box component="section">
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <CardActionArea component="a" href="#">
              <Card sx={{ display: "flex" }}>
                <CardContent sx={{ flex: 1 }}>
                  <Typography component="h3" variant="h6">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {post.date}
                  </Typography>
                  <Typography variant="subtitle2" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="caption" color="primary">
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
                  <Typography component="h3" variant="h6">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {post.date}
                  </Typography>
                  <Typography variant="subtitle2" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="caption" color="primary">
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
                  <Typography component="h3" variant="h6">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {post.date}
                  </Typography>
                  <Typography variant="subtitle2" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="caption" color="primary">
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
                  <Typography component="h3" variant="h6">
                    {post.title}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {post.date}
                  </Typography>
                  <Typography variant="subtitle2" paragraph>
                    {post.description}
                  </Typography>
                  <Typography variant="caption" color="primary">
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
      </Box>
    </DashboardLayout>
  );
}
