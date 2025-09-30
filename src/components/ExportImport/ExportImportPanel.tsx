import { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  Typography,
  ToggleButton,
  ToggleButtonGroup,
  Alert,
  IconButton,
  Snackbar,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CloseIcon from "@mui/icons-material/Close";
import { useThemeContext } from "../../contexts/ThemeContext";
import { exportThemeAsCode } from "../../utils/themeExport";

const ExportImportPanel = () => {
  const { themeConfig, resetTheme } = useThemeContext();
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [codeLanguage, setCodeLanguage] = useState<"js" | "ts">("ts");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleExportClick = () => {
    setExportDialogOpen(true);
  };

  const handleCopyThemeCode = async () => {
    const content = exportThemeAsCode(themeConfig, codeLanguage);

    try {
      await navigator.clipboard.writeText(content);
      showSnackbar("Theme code copied to clipboard!");
    } catch {
      showSnackbar("Failed to copy to clipboard");
    }
  };

  const handleReset = () => {
    if (
      confirm(
        "Are you sure you want to reset to default theme? This cannot be undone."
      )
    ) {
      resetTheme();
      showSnackbar("Theme reset to defaults");
    }
  };

  const showSnackbar = (message: string) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);
  };

  const themeCode = exportThemeAsCode(themeConfig, codeLanguage);
  const fileExtension = codeLanguage === "ts" ? "ts" : "js";
  const fileName = `theme.${fileExtension}`;

  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }} spacing={1.5}>
        <Button
          variant="contained"
          startIcon={<CodeIcon />}
          onClick={handleExportClick}
          size="small"
          sx={{
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Export Theme
        </Button>
        <Button
          variant="outlined"
          color="error"
          onClick={handleReset}
          sx={{
            textTransform: "none",
            fontWeight: 500,
          }}
        >
          Reset to Defaults
        </Button>
      </Stack>

      {/* Export Dialog */}
      <Dialog
        open={exportDialogOpen}
        onClose={() => setExportDialogOpen(false)}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CodeIcon color="primary" />
            <Typography variant="h6" fontWeight="700">
              Export Your Theme
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent sx={{ pt: 2 }}>
          <Stack spacing={3}>
            <Alert severity="info" sx={{ borderRadius: 2 }}>
              Copy the theme code below and follow the instructions to integrate
              it into your project.
            </Alert>

            <Box
              sx={{
                p: 2.5,
                bgcolor: "background.paper",
                borderRadius: 2,
                border: 1,
                borderColor: "divider",
              }}
            >
              <Typography
                variant="subtitle2"
                gutterBottom
                fontWeight="600"
                sx={{ mb: 2 }}
              >
                Select Language
              </Typography>
              <ToggleButtonGroup
                value={codeLanguage}
                exclusive
                onChange={(_, value) => value && setCodeLanguage(value)}
                fullWidth
                sx={{
                  "& .MuiToggleButton-root": {
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 500,
                  },
                }}
              >
                <ToggleButton value="ts">TypeScript (.ts)</ToggleButton>
                <ToggleButton value="js">JavaScript (.js)</ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <Box
              sx={{
                p: 2.5,
                bgcolor: "primary.main",
                color: "primary.contrastText",
                borderRadius: 2,
              }}
            >
              <Typography variant="subtitle2" fontWeight="600" gutterBottom>
                📝 Quick Setup Guide
              </Typography>
              <Stack spacing={1.5} sx={{ mt: 2 }}>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Typography fontWeight="700" sx={{ minWidth: 24 }}>
                    1.
                  </Typography>
                  <Box>
                    <Typography fontWeight="600" gutterBottom>
                      Copy the theme code
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Click the "Copy Code" button above
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Typography fontWeight="700" sx={{ minWidth: 24 }}>
                    2.
                  </Typography>
                  <Box>
                    <Typography fontWeight="600" gutterBottom>
                      Create file: {fileName}
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      In your project's src directory (e.g., src/{fileName})
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Typography fontWeight="700" sx={{ minWidth: 24 }}>
                    3.
                  </Typography>
                  <Box>
                    <Typography fontWeight="600" gutterBottom>
                      Paste and save
                    </Typography>
                    <Typography variant="body2" sx={{ opacity: 0.9 }}>
                      Paste the copied code into the file and save
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ display: "flex", gap: 2 }}>
                  <Typography fontWeight="700" sx={{ minWidth: 24 }}>
                    4.
                  </Typography>
                  <Box>
                    <Typography fontWeight="600" gutterBottom>
                      Import and use
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        opacity: 0.9,
                        fontFamily: "monospace",
                        fontSize: "0.8rem",
                      }}
                    >
                      import {"{ theme }"} from './theme'
                    </Typography>
                  </Box>
                </Box>
              </Stack>
            </Box>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: 2,
                }}
              >
                <Typography variant="subtitle2" fontWeight="600">
                  Theme Code
                </Typography>
                <Button
                  size="medium"
                  startIcon={<ContentCopyIcon />}
                  onClick={handleCopyThemeCode}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Copy Code
                </Button>
              </Box>
              <TextField
                multiline
                rows={14}
                value={themeCode}
                slotProps={{
                  input: {
                    readOnly: true,
                    sx: {
                      fontFamily: "monospace",
                      fontSize: "0.875rem",
                      bgcolor: "grey.50",
                      borderRadius: 1,
                    },
                  },
                }}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "grey.50",
                  },
                }}
              />
            </Box>

            <Box
              sx={{
                p: 2.5,
                bgcolor: "background.paper",
                borderRadius: 2,
                border: 1,
                borderColor: "divider",
              }}
            >
              <Typography
                variant="subtitle2"
                fontWeight="600"
                gutterBottom
                sx={{ mb: 2 }}
              >
                💡 Usage Example
              </Typography>
              <TextField
                multiline
                rows={10}
                value={`import { theme } from './theme';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Your app components */}
    </ThemeProvider>
  );
}`}
                slotProps={{
                  input: {
                    readOnly: true,
                    sx: {
                      fontFamily: "monospace",
                      fontSize: "0.875rem",
                      bgcolor: "grey.50",
                      borderRadius: 1,
                    },
                  },
                }}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "grey.50",
                  },
                }}
              />
            </Box>
          </Stack>
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          <Button
            onClick={() => setExportDialogOpen(false)}
            variant="outlined"
            size="large"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        action={
          <IconButton
            size="small"
            color="inherit"
            onClick={() => setSnackbarOpen(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </>
  );
};

export default ExportImportPanel;
