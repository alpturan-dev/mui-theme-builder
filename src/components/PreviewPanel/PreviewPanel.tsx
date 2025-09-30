import { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Button,
  TextField,
  Checkbox,
  Radio,
  RadioGroup,
  FormControlLabel,
  Switch,
  Chip,
  Alert,
  Card,
  CardContent,
  CardActions,
  Divider,
  Stack,
  Tabs,
  Tab,
} from "@mui/material";
import DashboardExample from "../examples/DashboardExample";
import FormExample from "../examples/FormExample";
import DataTableExample from "../examples/DataTableExample";
import ExportImportPanel from "../ExportImport/ExportImportPanel";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`preview-tabpanel-${index}`}
      aria-labelledby={`preview-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const PreviewPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.default",
      }}
    >
      <Box
        sx={{
          p: 2,
          pb: 0,
          bgcolor: "background.paper",
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1.5 }}>
          <Typography variant="h6" fontWeight="600">
            Live Preview
          </Typography>
          <ExportImportPanel />
        </Box>

        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          scrollButtons="auto"
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
            },
          }}
        >
          <Tab label="Dashboard" />
          <Tab label="Form Page" />
          <Tab label="Data Table" />
          <Tab label="Typography" />
          <Tab label="Buttons" />
          <Tab label="Form Inputs" />
          <Tab label="Chips & Alerts" />
          <Tab label="Cards" />
        </Tabs>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: "auto", px: 3, pb: 3 }}>
        {/* Dashboard Example Tab */}
        <TabPanel value={activeTab} index={0}>
          <DashboardExample />
        </TabPanel>

        {/* Form Example Tab */}
        <TabPanel value={activeTab} index={1}>
          <FormExample />
        </TabPanel>

        {/* Data Table Example Tab */}
        <TabPanel value={activeTab} index={2}>
          <DataTableExample />
        </TabPanel>
        {/* Typography Tab */}
        <TabPanel value={activeTab} index={3}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Typography Specimens
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="h1" gutterBottom>
              h1. Heading
            </Typography>
            <Typography variant="h2" gutterBottom>
              h2. Heading
            </Typography>
            <Typography variant="h3" gutterBottom>
              h3. Heading
            </Typography>
            <Typography variant="h4" gutterBottom>
              h4. Heading
            </Typography>
            <Typography variant="h5" gutterBottom>
              h5. Heading
            </Typography>
            <Typography variant="h6" gutterBottom>
              h6. Heading
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              body1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus id dignissim justo.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              body2. Secondary text with muted appearance for less important
              information.
            </Typography>
          </Paper>
        </TabPanel>

        {/* Buttons Tab */}
        <TabPanel value={activeTab} index={4}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Button Variants
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Typography variant="subtitle2" gutterBottom>
              Contained Buttons
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              flexWrap="wrap"
              useFlexGap
              sx={{ mb: 3 }}
            >
              <Button variant="contained" color="primary">
                Primary
              </Button>
              <Button variant="contained" color="secondary">
                Secondary
              </Button>
              <Button variant="contained" color="error">
                Error
              </Button>
              <Button variant="contained" color="warning">
                Warning
              </Button>
              <Button variant="contained" color="info">
                Info
              </Button>
              <Button variant="contained" color="success">
                Success
              </Button>
            </Stack>
            <Typography variant="subtitle2" gutterBottom>
              Outlined & Text Buttons
            </Typography>
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Button variant="outlined" color="primary">
                Outlined Primary
              </Button>
              <Button variant="outlined" color="secondary">
                Outlined Secondary
              </Button>
              <Button variant="text" color="primary">
                Text Primary
              </Button>
              <Button variant="text" color="secondary">
                Text Secondary
              </Button>
            </Stack>
          </Paper>
        </TabPanel>

        {/* Form Inputs Tab */}
        <TabPanel value={activeTab} index={5}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Form Components
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack spacing={3}>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Text Fields
                </Typography>
                <Stack spacing={2}>
                  <TextField label="Standard" variant="outlined" />
                  <TextField label="Filled" variant="filled" />
                  <TextField
                    label="Error State"
                    variant="outlined"
                    error
                    helperText="This field is required"
                  />
                </Stack>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Checkboxes
                </Typography>
                <Box>
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Checked"
                  />
                  <FormControlLabel control={<Checkbox />} label="Unchecked" />
                  <FormControlLabel
                    control={<Checkbox disabled />}
                    label="Disabled"
                  />
                </Box>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Radio Buttons
                </Typography>
                <RadioGroup row defaultValue="option1">
                  <FormControlLabel
                    value="option1"
                    control={<Radio />}
                    label="Option 1"
                  />
                  <FormControlLabel
                    value="option2"
                    control={<Radio />}
                    label="Option 2"
                  />
                  <FormControlLabel
                    value="option3"
                    control={<Radio />}
                    label="Option 3"
                  />
                </RadioGroup>
              </Box>
              <Box>
                <Typography variant="subtitle2" gutterBottom>
                  Switches
                </Typography>
                <Box>
                  <FormControlLabel
                    control={<Switch defaultChecked />}
                    label="Enabled"
                  />
                  <FormControlLabel control={<Switch />} label="Disabled" />
                </Box>
              </Box>
            </Stack>
          </Paper>
        </TabPanel>

        {/* Chips & Alerts Tab */}
        <TabPanel value={activeTab} index={6}>
          <Stack spacing={3}>
            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Chips
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                <Chip label="Default" />
                <Chip label="Primary" color="primary" />
                <Chip label="Secondary" color="secondary" />
                <Chip label="Success" color="success" />
                <Chip label="Error" color="error" />
                <Chip label="Warning" color="warning" />
                <Chip label="Info" color="info" />
              </Stack>
            </Paper>

            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h5" gutterBottom>
                Alerts
              </Typography>
              <Divider sx={{ mb: 2 }} />
              <Stack spacing={2}>
                <Alert severity="error">This is an error alert</Alert>
                <Alert severity="warning">This is a warning alert</Alert>
                <Alert severity="info">This is an info alert</Alert>
                <Alert severity="success">This is a success alert</Alert>
              </Stack>
            </Paper>
          </Stack>
        </TabPanel>

        {/* Cards Tab */}
        <TabPanel value={activeTab} index={7}>
          <Paper elevation={2} sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Card Components
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
              <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Card Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is a card component with some sample content to
                    demonstrate the theme styling.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Action
                  </Button>
                  <Button size="small" color="secondary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>

              <Card sx={{ maxWidth: 345 }} variant="outlined">
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Outlined Card
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    This is an outlined variant of the card component.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Action</Button>
                </CardActions>
              </Card>
            </Stack>
          </Paper>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default PreviewPanel;
