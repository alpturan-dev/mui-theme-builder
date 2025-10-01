import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Divider,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";
import ColorPicker from "../controls/ColorPicker";
import FontSelector from "../controls/FontSelector";
import TypographyControl from "../controls/TypographyControl";
import ShadowControl from "../controls/ShadowControl";
import type { CustomThemeConfig } from "../../theme/defaultTheme";

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
      id={`sidebar-tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const presetThemes: Record<string, Partial<CustomThemeConfig>> = {
  "Material Default": {
    palette: {
      mode: "light",
      primary: { main: "#1976d2" },
      secondary: { main: "#dc004e" },
      error: { main: "#d32f2f" },
      warning: { main: "#ed6c02" },
      info: { main: "#0288d1" },
      success: { main: "#2e7d32" },
      background: { default: "#ffffff", paper: "#f5f5f5" },
      text: { primary: "rgba(0, 0, 0, 0.87)", secondary: "rgba(0, 0, 0, 0.6)" },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontSize: "6rem", fontWeight: 300, lineHeight: 1.167 },
      h2: { fontSize: "3.75rem", fontWeight: 300, lineHeight: 1.2 },
      h3: { fontSize: "3rem", fontWeight: 400, lineHeight: 1.167 },
      h4: { fontSize: "2.125rem", fontWeight: 400, lineHeight: 1.235 },
      h5: { fontSize: "1.5rem", fontWeight: 400, lineHeight: 1.334 },
      h6: { fontSize: "1.25rem", fontWeight: 500, lineHeight: 1.6 },
      body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 },
      body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.43 },
    },
    spacing: 8,
    shape: { borderRadius: 4 },
    customShadow: {
      color: "#000000",
      opacity: 0.2,
      blur: 4,
      spread: 0,
      offsetX: 0,
      offsetY: 2,
    },
  },
  "Ocean Blue": {
    palette: {
      mode: "light",
      primary: { main: "#006494" },
      secondary: { main: "#13293d" },
      error: { main: "#c62828" },
      warning: { main: "#f57c00" },
      info: { main: "#0277bd" },
      success: { main: "#2e7d32" },
      background: { default: "#f0f4f8", paper: "#ffffff" },
      text: { primary: "#13293d", secondary: "rgba(19, 41, 61, 0.7)" },
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: { fontSize: "5rem", fontWeight: 700, lineHeight: 1.2 },
      h2: { fontSize: "3.5rem", fontWeight: 700, lineHeight: 1.2 },
      h3: { fontSize: "2.75rem", fontWeight: 600, lineHeight: 1.2 },
      h4: { fontSize: "2rem", fontWeight: 600, lineHeight: 1.3 },
      h5: { fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.4 },
      h6: { fontSize: "1.25rem", fontWeight: 600, lineHeight: 1.5 },
      body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 },
      body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
    },
    spacing: 8,
    shape: { borderRadius: 8 },
    customShadow: {
      color: "#006494",
      opacity: 0.15,
      blur: 8,
      spread: 0,
      offsetX: 0,
      offsetY: 3,
    },
  },
  "Forest Green": {
    palette: {
      mode: "light",
      primary: { main: "#2d6a4f" },
      secondary: { main: "#95d5b2" },
      error: { main: "#c62828" },
      warning: { main: "#f57c00" },
      info: { main: "#0288d1" },
      success: { main: "#2e7d32" },
      background: { default: "#f1faee", paper: "#ffffff" },
      text: { primary: "#1b4332", secondary: "rgba(27, 67, 50, 0.7)" },
    },
    typography: {
      fontFamily: '"Merriweather", "Georgia", serif',
      h1: { fontSize: "5.5rem", fontWeight: 300, lineHeight: 1.2 },
      h2: { fontSize: "4rem", fontWeight: 300, lineHeight: 1.25 },
      h3: { fontSize: "3rem", fontWeight: 400, lineHeight: 1.3 },
      h4: { fontSize: "2.25rem", fontWeight: 400, lineHeight: 1.35 },
      h5: { fontSize: "1.75rem", fontWeight: 400, lineHeight: 1.4 },
      h6: { fontSize: "1.375rem", fontWeight: 500, lineHeight: 1.5 },
      body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.7 },
      body2: { fontSize: "0.9375rem", fontWeight: 400, lineHeight: 1.6 },
    },
    spacing: 10,
    shape: { borderRadius: 12 },
    customShadow: {
      color: "#2d6a4f",
      opacity: 0.12,
      blur: 12,
      spread: 0,
      offsetX: 0,
      offsetY: 4,
    },
  },
  "Sunset Orange": {
    palette: {
      mode: "light",
      primary: { main: "#f77f00" },
      secondary: { main: "#d62828" },
      error: { main: "#c62828" },
      warning: { main: "#f57c00" },
      info: { main: "#0288d1" },
      success: { main: "#2e7d32" },
      background: { default: "#fcf6f5", paper: "#ffffff" },
      text: { primary: "#003049", secondary: "rgba(0, 48, 73, 0.7)" },
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Arial", sans-serif',
      h1: { fontSize: "5.5rem", fontWeight: 800, lineHeight: 1.1 },
      h2: { fontSize: "4rem", fontWeight: 700, lineHeight: 1.15 },
      h3: { fontSize: "3rem", fontWeight: 700, lineHeight: 1.2 },
      h4: { fontSize: "2.25rem", fontWeight: 600, lineHeight: 1.25 },
      h5: { fontSize: "1.625rem", fontWeight: 600, lineHeight: 1.3 },
      h6: { fontSize: "1.375rem", fontWeight: 600, lineHeight: 1.4 },
      body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 },
      body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
    },
    spacing: 8,
    shape: { borderRadius: 16 },
    customShadow: {
      color: "#f77f00",
      opacity: 0.25,
      blur: 16,
      spread: 0,
      offsetX: 0,
      offsetY: 4,
    },
  },
  "Purple Dream": {
    palette: {
      mode: "light",
      primary: { main: "#7209b7" },
      secondary: { main: "#f72585" },
      error: { main: "#c62828" },
      warning: { main: "#f57c00" },
      info: { main: "#0288d1" },
      success: { main: "#2e7d32" },
      background: { default: "#fdf0f8", paper: "#ffffff" },
      text: { primary: "#3c096c", secondary: "rgba(60, 9, 108, 0.7)" },
    },
    typography: {
      fontFamily: '"Quicksand", "Roboto", "Arial", sans-serif',
      h1: { fontSize: "5.5rem", fontWeight: 700, lineHeight: 1.15 },
      h2: { fontSize: "4rem", fontWeight: 600, lineHeight: 1.2 },
      h3: { fontSize: "3rem", fontWeight: 600, lineHeight: 1.25 },
      h4: { fontSize: "2.25rem", fontWeight: 500, lineHeight: 1.3 },
      h5: { fontSize: "1.625rem", fontWeight: 500, lineHeight: 1.35 },
      h6: { fontSize: "1.375rem", fontWeight: 500, lineHeight: 1.4 },
      body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 },
      body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
    },
    spacing: 12,
    shape: { borderRadius: 20 },
    customShadow: {
      color: "#7209b7",
      opacity: 0.2,
      blur: 20,
      spread: 0,
      offsetX: 0,
      offsetY: 6,
    },
  },
  "Midnight": {
    palette: {
      mode: "dark",
      primary: { main: "#4dabf7" },
      secondary: { main: "#ffd43b" },
      error: { main: "#ff6b6b" },
      warning: { main: "#ffa94d" },
      info: { main: "#74c0fc" },
      success: { main: "#51cf66" },
      background: { default: "#0a0e27", paper: "#1a1d3a" },
      text: { primary: "#e0e7ff", secondary: "rgba(224, 231, 255, 0.7)" },
    },
    typography: {
      fontFamily: '"Montserrat", "Roboto", "Arial", sans-serif',
      h1: { fontSize: "5.5rem", fontWeight: 700, lineHeight: 1.1 },
      h2: { fontSize: "4rem", fontWeight: 600, lineHeight: 1.15 },
      h3: { fontSize: "3rem", fontWeight: 600, lineHeight: 1.2 },
      h4: { fontSize: "2.25rem", fontWeight: 500, lineHeight: 1.25 },
      h5: { fontSize: "1.625rem", fontWeight: 500, lineHeight: 1.3 },
      h6: { fontSize: "1.375rem", fontWeight: 500, lineHeight: 1.4 },
      body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.6 },
      body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.5 },
    },
    spacing: 8,
    shape: { borderRadius: 6 },
    customShadow: {
      color: "#4dabf7",
      opacity: 0.3,
      blur: 12,
      spread: 0,
      offsetX: 0,
      offsetY: 4,
    },
  },
  "Cyberpunk": {
    palette: {
      mode: "dark",
      primary: { main: "#00ffff" },
      secondary: { main: "#ff00ff" },
      error: { main: "#ff3366" },
      warning: { main: "#ffcc00" },
      info: { main: "#00ffff" },
      success: { main: "#00ff99" },
      background: { default: "#0d1117", paper: "#161b22" },
      text: { primary: "#f0f6fc", secondary: "rgba(240, 246, 252, 0.7)" },
    },
    typography: {
      fontFamily: '"Rajdhani", "Roboto Mono", "Courier New", monospace',
      h1: { fontSize: "6rem", fontWeight: 700, lineHeight: 1.1 },
      h2: { fontSize: "4.5rem", fontWeight: 700, lineHeight: 1.1 },
      h3: { fontSize: "3.5rem", fontWeight: 600, lineHeight: 1.15 },
      h4: { fontSize: "2.5rem", fontWeight: 600, lineHeight: 1.2 },
      h5: { fontSize: "1.75rem", fontWeight: 600, lineHeight: 1.25 },
      h6: { fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.3 },
      body1: { fontSize: "1rem", fontWeight: 500, lineHeight: 1.5 },
      body2: { fontSize: "0.9375rem", fontWeight: 500, lineHeight: 1.4 },
    },
    spacing: 6,
    shape: { borderRadius: 2 },
    customShadow: {
      color: "#00ffff",
      opacity: 0.5,
      blur: 20,
      spread: 0,
      offsetX: 0,
      offsetY: 0,
    },
  },
};

const Sidebar = () => {
  const { themeConfig, updateThemeConfig } = useThemeContext();
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPreset, setSelectedPreset] = useState("");

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const applyPresetTheme = (presetName: string) => {
    if (presetName && presetThemes[presetName]) {
      setSelectedPreset(presetName);
      updateThemeConfig(presetThemes[presetName]);
    }
  };

  // Wrapper function that resets preset when manual changes are made
  const updateThemeWithReset = (config: Partial<CustomThemeConfig>) => {
    setSelectedPreset("");
    updateThemeConfig(config);
  };

  const handleColorChange = (path: string, value: string) => {
    setSelectedPreset(""); // Reset preset selection when manual changes are made
    const keys = path.split(".");
    if (keys.length === 2) {
      updateThemeConfig({
        palette: {
          ...themeConfig.palette,
          [keys[0]]: {
            ...(themeConfig.palette?.[
              keys[0] as keyof typeof themeConfig.palette
            ] as Record<string, unknown>),
            [keys[1]]: value,
          },
        },
      });
    }
  };

  const handleModeToggle = () => {
    const newMode = themeConfig.palette?.mode === "light" ? "dark" : "light";
    updateThemeConfig({
      palette: {
        ...themeConfig.palette,
        mode: newMode,
        // Update background and text colors based on mode
        background: {
          default: newMode === "dark" ? "#121212" : "#ffffff",
          paper: newMode === "dark" ? "#1e1e1e" : "#f5f5f5",
        },
        text: {
          primary:
            newMode === "dark"
              ? "rgba(255, 255, 255, 0.87)"
              : "rgba(0, 0, 0, 0.87)",
          secondary:
            newMode === "dark"
              ? "rgba(255, 255, 255, 0.6)"
              : "rgba(0, 0, 0, 0.6)",
        },
      },
    });
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        borderRight: 1,
        borderColor: "divider",
        bgcolor: "background.default",
        pb: 6,
      }}
    >
      <Box sx={{ p: 3, pt: 2, pb: 0 }}>
        <Typography variant="h5" fontWeight="700" sx={{ mb: 0.5 }}>
          Theme Builder
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Customize your Material UI theme
        </Typography>
      </Box>

      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: 500,
              fontSize: "0.9rem",
              minHeight: 48,
            },
          }}
        >
          <Tab label="Colors" />
          <Tab label="Typography" />
          <Tab label="Layout" />
        </Tabs>
      </Box>

      <Box sx={{ flexGrow: 1, overflowY: "auto", px: 3 }}>
        {/* Colors Tab */}
        <TabPanel value={activeTab} index={0}>
          <FormControl fullWidth size="small" sx={{ mb: 3 }}>
            <InputLabel id="preset-theme-label">Preset Themes</InputLabel>
            <Select
              labelId="preset-theme-label"
              id="preset-theme-select"
              value={selectedPreset}
              label="Preset Themes"
              onChange={(e) => applyPresetTheme(e.target.value)}
            >
              <MenuItem value="">
                <em>Custom</em>
              </MenuItem>
              {Object.keys(presetThemes).map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Divider sx={{ my: 2 }} />

          <FormControlLabel
            control={
              <Switch
                checked={themeConfig.palette?.mode === "dark"}
                onChange={handleModeToggle}
              />
            }
            label={`${
              themeConfig.palette?.mode === "dark" ? "Dark" : "Light"
            } Mode`}
            sx={{ mb: 2 }}
          />

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" gutterBottom fontWeight="medium">
            Primary Colors
          </Typography>
          <ColorPicker
            label="Primary"
            value={themeConfig.palette?.primary?.main || "#1976d2"}
            onChange={(color) => handleColorChange("primary.main", color)}
            showPalette
          />
          <ColorPicker
            label="Secondary"
            value={themeConfig.palette?.secondary?.main || "#dc004e"}
            onChange={(color) => handleColorChange("secondary.main", color)}
            showPalette
          />

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" gutterBottom fontWeight="medium">
            Status Colors
          </Typography>
          <ColorPicker
            label="Error"
            value={themeConfig.palette?.error?.main || "#d32f2f"}
            onChange={(color) => handleColorChange("error.main", color)}
          />
          <ColorPicker
            label="Warning"
            value={themeConfig.palette?.warning?.main || "#ed6c02"}
            onChange={(color) => handleColorChange("warning.main", color)}
          />
          <ColorPicker
            label="Info"
            value={themeConfig.palette?.info?.main || "#0288d1"}
            onChange={(color) => handleColorChange("info.main", color)}
          />
          <ColorPicker
            label="Success"
            value={themeConfig.palette?.success?.main || "#2e7d32"}
            onChange={(color) => handleColorChange("success.main", color)}
          />

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" gutterBottom fontWeight="medium">
            Background Colors
          </Typography>
          <ColorPicker
            label="Default Background"
            value={themeConfig.palette?.background?.default || "#ffffff"}
            onChange={(color) => handleColorChange("background.default", color)}
          />
          <ColorPicker
            label="Paper Background"
            value={themeConfig.palette?.background?.paper || "#f5f5f5"}
            onChange={(color) => handleColorChange("background.paper", color)}
          />

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" gutterBottom fontWeight="medium">
            Text Colors
          </Typography>
          <ColorPicker
            label="Primary Text"
            value={themeConfig.palette?.text?.primary || "rgba(0, 0, 0, 0.87)"}
            onChange={(color) => handleColorChange("text.primary", color)}
          />
          <ColorPicker
            label="Secondary Text"
            value={themeConfig.palette?.text?.secondary || "rgba(0, 0, 0, 0.6)"}
            onChange={(color) => handleColorChange("text.secondary", color)}
          />
        </TabPanel>

        {/* Typography Tab */}
        <TabPanel value={activeTab} index={1}>
          <FontSelector
            label="Font Family"
            value={
              themeConfig.typography?.fontFamily ||
              '"Roboto", "Helvetica", "Arial", sans-serif'
            }
            onChange={(font) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  fontFamily: font,
                },
              })
            }
          />

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" gutterBottom fontWeight="medium">
            Heading Styles
          </Typography>

          <TypographyControl
            label="H1"
            fontSize={themeConfig.typography?.h1?.fontSize || "6rem"}
            fontWeight={themeConfig.typography?.h1?.fontWeight || 300}
            lineHeight={themeConfig.typography?.h1?.lineHeight || 1.167}
            onFontSizeChange={(size) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h1: { ...themeConfig.typography?.h1, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h1: { ...themeConfig.typography?.h1, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h1: { ...themeConfig.typography?.h1, lineHeight: height },
                },
              })
            }
          />

          <TypographyControl
            label="H2"
            fontSize={themeConfig.typography?.h2?.fontSize || "3.75rem"}
            fontWeight={themeConfig.typography?.h2?.fontWeight || 300}
            lineHeight={themeConfig.typography?.h2?.lineHeight || 1.2}
            onFontSizeChange={(size) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h2: { ...themeConfig.typography?.h2, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h2: { ...themeConfig.typography?.h2, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h2: { ...themeConfig.typography?.h2, lineHeight: height },
                },
              })
            }
          />

          <TypographyControl
            label="H3"
            fontSize={themeConfig.typography?.h3?.fontSize || "3rem"}
            fontWeight={themeConfig.typography?.h3?.fontWeight || 400}
            lineHeight={themeConfig.typography?.h3?.lineHeight || 1.167}
            onFontSizeChange={(size) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h3: { ...themeConfig.typography?.h3, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h3: { ...themeConfig.typography?.h3, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h3: { ...themeConfig.typography?.h3, lineHeight: height },
                },
              })
            }
          />

          <TypographyControl
            label="H4"
            fontSize={themeConfig.typography?.h4?.fontSize || "2.125rem"}
            fontWeight={themeConfig.typography?.h4?.fontWeight || 400}
            lineHeight={themeConfig.typography?.h4?.lineHeight || 1.235}
            onFontSizeChange={(size) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h4: { ...themeConfig.typography?.h4, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h4: { ...themeConfig.typography?.h4, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h4: { ...themeConfig.typography?.h4, lineHeight: height },
                },
              })
            }
          />

          <TypographyControl
            label="H5"
            fontSize={themeConfig.typography?.h5?.fontSize || "1.5rem"}
            fontWeight={themeConfig.typography?.h5?.fontWeight || 400}
            lineHeight={themeConfig.typography?.h5?.lineHeight || 1.334}
            onFontSizeChange={(size) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h5: { ...themeConfig.typography?.h5, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h5: { ...themeConfig.typography?.h5, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h5: { ...themeConfig.typography?.h5, lineHeight: height },
                },
              })
            }
          />

          <TypographyControl
            label="H6"
            fontSize={themeConfig.typography?.h6?.fontSize || "1.25rem"}
            fontWeight={themeConfig.typography?.h6?.fontWeight || 500}
            lineHeight={themeConfig.typography?.h6?.lineHeight || 1.6}
            onFontSizeChange={(size) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h6: { ...themeConfig.typography?.h6, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h6: { ...themeConfig.typography?.h6, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  h6: { ...themeConfig.typography?.h6, lineHeight: height },
                },
              })
            }
          />

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" gutterBottom fontWeight="medium">
            Body Text Styles
          </Typography>

          <TypographyControl
            label="Body 1"
            fontSize={themeConfig.typography?.body1?.fontSize || "1rem"}
            fontWeight={themeConfig.typography?.body1?.fontWeight || 400}
            lineHeight={themeConfig.typography?.body1?.lineHeight || 1.5}
            onFontSizeChange={(size) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  body1: { ...themeConfig.typography?.body1, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  body1: {
                    ...themeConfig.typography?.body1,
                    fontWeight: weight,
                  },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  body1: {
                    ...themeConfig.typography?.body1,
                    lineHeight: height,
                  },
                },
              })
            }
          />

          <TypographyControl
            label="Body 2"
            fontSize={themeConfig.typography?.body2?.fontSize || "0.875rem"}
            fontWeight={themeConfig.typography?.body2?.fontWeight || 400}
            lineHeight={themeConfig.typography?.body2?.lineHeight || 1.43}
            onFontSizeChange={(size) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  body2: { ...themeConfig.typography?.body2, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  body2: {
                    ...themeConfig.typography?.body2,
                    fontWeight: weight,
                  },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeWithReset({
                typography: {
                  ...themeConfig.typography,
                  body2: {
                    ...themeConfig.typography?.body2,
                    lineHeight: height,
                  },
                },
              })
            }
          />
        </TabPanel>

        {/* Layout Tab (Spacing & Shape) */}
        <TabPanel value={activeTab} index={2}>
          <Typography variant="subtitle2" gutterBottom fontWeight="medium">
            Spacing
          </Typography>
          <TextField
            label="Spacing Unit"
            size="small"
            type="number"
            value={themeConfig.spacing || 8}
            onChange={(e) =>
              updateThemeWithReset({
                spacing: Number(e.target.value),
              })
            }
            slotProps={{
              htmlInput: { min: 2, max: 16, step: 1 },
            }}
            helperText="Base spacing unit in pixels (default: 8px). Used for padding, margins, and gaps throughout the theme."
            fullWidth
            sx={{ mb: 3 }}
          />

          <Divider sx={{ my: 2 }} />

          <Typography variant="subtitle2" gutterBottom fontWeight="medium">
            Shape
          </Typography>
          <TextField
            label="Border Radius"
            size="small"
            type="number"
            value={themeConfig.shape?.borderRadius || 4}
            onChange={(e) =>
              updateThemeWithReset({
                shape: {
                  ...themeConfig.shape,
                  borderRadius: Number(e.target.value),
                },
              })
            }
            slotProps={{
              htmlInput: { min: 0, max: 32, step: 1 },
            }}
            helperText="Default border radius in pixels for buttons, cards, and other components"
            fullWidth
          />

          <Box
            sx={{
              mt: 3,
              p: 2,
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" gutterBottom fontWeight="medium">
              Preview
            </Typography>
            <Box
              sx={{
                mt: 1,
                p: 2,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                borderRadius: `${themeConfig.shape?.borderRadius || 4}px`,
              }}
            >
              Border radius: {themeConfig.shape?.borderRadius || 4}px
            </Box>
            <Box
              sx={{
                mt: 1,
                p: themeConfig.spacing || 1,
                bgcolor: "secondary.main",
                color: "secondary.contrastText",
                borderRadius: `${themeConfig.shape?.borderRadius || 4}px`,
              }}
            >
              Spacing unit: {themeConfig.spacing || 8}px
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="subtitle2" gutterBottom fontWeight="medium">
            Shadow
          </Typography>
          <ShadowControl
            color={themeConfig.customShadow?.color || "#000000"}
            opacity={themeConfig.customShadow?.opacity || 0.2}
            blur={themeConfig.customShadow?.blur || 4}
            spread={themeConfig.customShadow?.spread || 0}
            offsetX={themeConfig.customShadow?.offsetX || 0}
            offsetY={themeConfig.customShadow?.offsetY || 2}
            onColorChange={(color) =>
              updateThemeWithReset({
                customShadow: {
                  ...themeConfig.customShadow,
                  color,
                },
              })
            }
            onOpacityChange={(opacity) =>
              updateThemeWithReset({
                customShadow: {
                  ...themeConfig.customShadow,
                  opacity,
                },
              })
            }
            onBlurChange={(blur) =>
              updateThemeWithReset({
                customShadow: {
                  ...themeConfig.customShadow,
                  blur,
                },
              })
            }
            onSpreadChange={(spread) =>
              updateThemeWithReset({
                customShadow: {
                  ...themeConfig.customShadow,
                  spread,
                },
              })
            }
            onOffsetXChange={(offsetX) =>
              updateThemeWithReset({
                customShadow: {
                  ...themeConfig.customShadow,
                  offsetX,
                },
              })
            }
            onOffsetYChange={(offsetY) =>
              updateThemeWithReset({
                customShadow: {
                  ...themeConfig.customShadow,
                  offsetY,
                },
              })
            }
          />

          <Box
            sx={{
              mt: 3,
              p: 3,
              border: 1,
              borderColor: "divider",
              borderRadius: 1,
            }}
          >
            <Typography variant="body2" gutterBottom fontWeight="medium">
              Shadow Preview
            </Typography>
            <Box
              sx={{
                mt: 2,
                p: 3,
                bgcolor: "background.paper",
                borderRadius: `${themeConfig.shape?.borderRadius || 4}px`,
                boxShadow: `${themeConfig.customShadow?.offsetX || 0}px ${themeConfig.customShadow?.offsetY || 2}px ${themeConfig.customShadow?.blur || 4}px ${themeConfig.customShadow?.spread || 0}px ${themeConfig.customShadow?.color || "#000000"}${Math.round((themeConfig.customShadow?.opacity || 0.2) * 255).toString(16).padStart(2, '0')}`,
                textAlign: "center",
              }}
            >
              <Typography variant="body1">Shadow Effect</Typography>
            </Box>
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Sidebar;
