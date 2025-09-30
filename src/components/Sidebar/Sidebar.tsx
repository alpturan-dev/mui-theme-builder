import { useState } from "react";
import {
  Box,
  Typography,
  Tabs,
  Tab,
  Switch,
  FormControlLabel,
  Divider,
  TextField,
} from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";
import ColorPicker from "../controls/ColorPicker";
import FontSelector from "../controls/FontSelector";
import TypographyControl from "../controls/TypographyControl";

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

const Sidebar = () => {
  const { themeConfig, updateThemeConfig } = useThemeContext();
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleColorChange = (path: string, value: string) => {
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
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  fontFamily: font,
                },
              })
            }
          />

          <Divider sx={{ my: 2 }} />

          <TextField
            label="Base Font Size"
            size="small"
            type="number"
            value={themeConfig.typography?.fontSize || 14}
            onChange={(e) =>
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  fontSize: Number(e.target.value),
                },
              })
            }
            slotProps={{
              htmlInput: { min: 10, max: 24 },
            }}
            helperText="Base size in pixels"
            sx={{ mb: 2 }}
            fullWidth
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
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h1: { ...themeConfig.typography?.h1, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h1: { ...themeConfig.typography?.h1, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeConfig({
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
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h2: { ...themeConfig.typography?.h2, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h2: { ...themeConfig.typography?.h2, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeConfig({
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
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h3: { ...themeConfig.typography?.h3, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h3: { ...themeConfig.typography?.h3, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeConfig({
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
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h4: { ...themeConfig.typography?.h4, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h4: { ...themeConfig.typography?.h4, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeConfig({
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
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h5: { ...themeConfig.typography?.h5, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h5: { ...themeConfig.typography?.h5, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeConfig({
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
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h6: { ...themeConfig.typography?.h6, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  h6: { ...themeConfig.typography?.h6, fontWeight: weight },
                },
              })
            }
            onLineHeightChange={(height) =>
              updateThemeConfig({
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
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  body1: { ...themeConfig.typography?.body1, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeConfig({
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
              updateThemeConfig({
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
              updateThemeConfig({
                typography: {
                  ...themeConfig.typography,
                  body2: { ...themeConfig.typography?.body2, fontSize: size },
                },
              })
            }
            onFontWeightChange={(weight) =>
              updateThemeConfig({
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
              updateThemeConfig({
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
              updateThemeConfig({
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
              updateThemeConfig({
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
        </TabPanel>
      </Box>
    </Box>
  );
};

export default Sidebar;
