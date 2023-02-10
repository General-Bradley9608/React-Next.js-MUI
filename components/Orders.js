import * as React from "react";
import {
  Button,
  Box,
  Divider,
  IconButton,
  Link,
  Popover,
  Stack,
  Badge,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Title from "./Title";

/* Icons */
import MoreIcon from "@mui/icons-material/MoreVert";
import RefreshIcon from "@mui/icons-material/RefreshOutlined";
import CachedIcon from "@mui/icons-material/CachedOutlined";
import OffIcon from "@mui/icons-material/HighlightOffOutlined";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, status, amount) {
  return { id, date, name, shipTo, paymentMethod, status, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    "VISA ⠀•••• 3719",
    "warning",
    312.44
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    "VISA ⠀•••• 2574",
    "success",
    866.99
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    "MC ⠀•••• 1253",
    "info",
    100.81
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    "AMEX ⠀•••• 2000",
    "primary",
    654.39
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    "VISA ⠀•••• 5919",
    "danger",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "popover-cog-deposit" : undefined;

  return (
    <Box>
      <Box padding={0} display="flex" justifyContent="space-between">
        <Box>
          <Title>Recent Orders</Title>
        </Box>
        <Box>
          <IconButton
            aria-describedby={id}
            children={<MoreIcon size="small" />}
            onClick={handleClick}
          />
          <Popover
            marginThreshold={0}
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            elevation={2}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Stack
              direction="column"
              spacing={1}
              padding={1}
              divider={<Divider orientation="horizontal" flexItem />}
            >
              <Button
                variant="text"
                size="small"
                startIcon={<RefreshIcon size="small" />}
              >
                Refresh
              </Button>
              <Button
                variant="text"
                size="small"
                startIcon={<CachedIcon size="small" />}
              >
                Reload
              </Button>
              <Button
                variant="text"
                size="small"
                startIcon={<OffIcon size="small" />}
              >
                Remove
              </Button>
            </Stack>
          </Popover>
        </Box>
      </Box>
      <Box marginTop={2} marginBottom={2}>
        <Table
          size="large"
          sx={{
            "thead > tr:first-child": {
              backgroundColor: "secondary.light",
              th: {
                fontWeight: "bold",
                color: "secondary.dark",
              },
            },
            tbody: {
              "tr:nth-child(odd):hover": {
                backgroundColor: "secondary.light",
              },
            },
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Ship To</TableCell>
              <TableCell>Payment Method</TableCell>
              <TableCell>Sale Amount</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.shipTo}</TableCell>
                <TableCell>{row.paymentMethod}</TableCell>
                <TableCell>{`$${row.amount}`}</TableCell>
                <TableCell align="center">
                  <Badge color={row.status} badgeContent={row.status} />
                </TableCell>
                <TableCell>
                  <Stack spacing={0.5} direction="row">
                    <Button variant="outlined" size="small">
                      Edit
                    </Button>
                    <Button variant="outlined" size="small">
                      Update
                    </Button>
                    <Button variant="outlined" size="small">
                      View
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <Link color="primary" href="#" onClick={preventDefault}>
        See more orders
      </Link>
    </Box>
  );
}
