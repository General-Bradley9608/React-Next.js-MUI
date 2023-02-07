import { Toolbar, Typography, IconButton } from "@mui/material";
import CommnentIcon from "@mui/icons-material/CommentBankOutlined";

export default function Component(props) {
  const {
    title = "Hi, Administrator",
    type = "secondary",
    children = null,
  } = props;

  return (
    <Toolbar>
      <Typography component="h6" variant="subtitle2" color={`${type}.main`}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label={title}
          size="small"
        >
          <CommnentIcon color={type} />
        </IconButton>
        {title}
      </Typography>
      {children}
    </Toolbar>
  );
}
