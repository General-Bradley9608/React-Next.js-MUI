import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";

/* Layouts */
import DashboardLayout from "@layouts/DashboardLayout";

export default function FormDefault() {
  return (
    <DashboardLayout>
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          minHeight: 240,
        }}
      >
        <h2>Registration</h2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          id="form-registration"
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
            />
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
            />
          </div>
        </Box>
        <h2>Settings</h2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          id="form-settings"
          noValidate
          autoComplete="off"
        >
          <div>
            {/* <h2>Settings</h2>
            <form id="settings"> */}
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              disabled
              id="filled-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
            />
            <TextField
              id="filled-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="filled"
            />
            {/* </form> */}
          </div>
        </Box>
        <h2>Check In</h2>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          id="form-check-in"
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
            />
            <TextField
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="standard"
            />
          </div>
        </Box>
      </Paper>
      <Paper
        sx={{
          p: 4,
          display: "flex",
          flexDirection: "column",
          // minHeight: 240,
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
            button: {
              marginRight: ".5rem",
            },
          }}
          id="form-settings"
          noValidate
          autoComplete="off"
        >
          <Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.25 }} />
              <TextField
                id="input-with-sx"
                label="Full Name"
                variant="standard"
                margin="dense"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.25 }} />
              <TextField
                id="input-with-sx"
                label="Email"
                variant="standard"
                margin="dense"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <PhoneIcon sx={{ color: "action.active", mr: 1, my: 0.25 }} />
              <TextField
                id="input-with-sx"
                label="Phone"
                variant="standard"
                margin="dense"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <MapIcon sx={{ color: "action.active", mr: 1, my: 0.25 }} />
              <TextField
                id="input-with-sx"
                label="Address"
                variant="standard"
                margin="dense"
                multiline
                maxRows={3}
              />
            </Box>
          </Box>
          <Box sx={{ marginBottom: "2rem", marginTop: "2rem" }}>
            <Button variant="contained">Submit</Button>
            <Button variant="contained">Submit</Button>
            <Button variant="contained">Submit</Button>
            <Button variant="contained">Submit</Button>
            <Button variant="contained">Submit</Button>
          </Box>
        </Box>
      </Paper>
    </DashboardLayout>
  );
}
