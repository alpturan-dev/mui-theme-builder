import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormLabel,
  Switch,
  Divider,
  Alert,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

const FormExample = () => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        User Registration Form
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
        Complete all required fields to create a new account
      </Typography>

      <Alert severity="info" sx={{ mb: 3 }}>
        All fields marked with * are required
      </Alert>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Personal Information
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="First Name *"
              fullWidth
              variant="outlined"
              placeholder="John"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Last Name *"
              fullWidth
              variant="outlined"
              placeholder="Doe"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Email Address *"
              type="email"
              fullWidth
              variant="outlined"
              placeholder="john.doe@example.com"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Phone Number"
              type="tel"
              fullWidth
              variant="outlined"
              placeholder="+1 (555) 123-4567"
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              label="Address"
              fullWidth
              variant="outlined"
              placeholder="123 Main St"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="City"
              fullWidth
              variant="outlined"
              placeholder="New York"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <Select defaultValue="" label="State">
                <MenuItem value="">Select State</MenuItem>
                <MenuItem value="NY">New York</MenuItem>
                <MenuItem value="CA">California</MenuItem>
                <MenuItem value="TX">Texas</MenuItem>
                <MenuItem value="FL">Florida</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 3 }}>
            <TextField
              label="ZIP Code"
              fullWidth
              variant="outlined"
              placeholder="10001"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Account Details
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Username *"
              fullWidth
              variant="outlined"
              placeholder="johndoe123"
              helperText="Must be unique"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <FormControl fullWidth>
              <InputLabel>Account Type *</InputLabel>
              <Select defaultValue="" label="Account Type *">
                <MenuItem value="">Select Type</MenuItem>
                <MenuItem value="personal">Personal</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="enterprise">Enterprise</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Password *"
              type="password"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Confirm Password *"
              type="password"
              fullWidth
              variant="outlined"
              error
              helperText="Passwords do not match"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Preferences
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 3 }}>
          <FormLabel component="legend">Notification Preferences</FormLabel>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Email notifications"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="SMS notifications"
          />
          <FormControlLabel control={<Checkbox />} label="Push notifications" />
          <FormControlLabel
            control={<Checkbox />}
            label="Newsletter subscription"
          />
        </Box>

        <Box sx={{ mb: 3 }}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Preferred Contact Method</FormLabel>
            <RadioGroup defaultValue="email" row>
              <FormControlLabel
                value="email"
                control={<Radio />}
                label="Email"
              />
              <FormControlLabel
                value="phone"
                control={<Radio />}
                label="Phone"
              />
              <FormControlLabel value="sms" control={<Radio />} label="SMS" />
            </RadioGroup>
          </FormControl>
        </Box>

        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={<Switch defaultChecked />}
            label="Make my profile public"
          />
          <FormControlLabel
            control={<Switch />}
            label="Enable two-factor authentication"
          />
        </Box>

        <Typography variant="h6" sx={{ mt: 4, mb: 2 }}>
          Terms & Conditions
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Box sx={{ mb: 3 }}>
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the Terms of Service and Privacy Policy *"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I want to receive promotional offers and updates"
          />
        </Box>

        <Box
          sx={{ display: "flex", gap: 2, justifyContent: "flex-end", mt: 4 }}
        >
          <Button variant="outlined" size="large" startIcon={<CancelIcon />}>
            Cancel
          </Button>
          <Button variant="contained" size="large" startIcon={<SaveIcon />}>
            Create Account
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default FormExample;
