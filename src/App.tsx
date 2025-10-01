import { useState } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import {
  Box,
  Drawer,
  IconButton,
  useMediaQuery,
  useTheme as useMuiTheme,
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PaletteIcon from "@mui/icons-material/Palette";
import { ThemeContextProvider, useThemeContext } from "./contexts/ThemeContext";
import Sidebar from "./components/Sidebar/Sidebar";
import PreviewPanel from "./components/PreviewPanel/PreviewPanel";

const SIDEBAR_WIDTH = "30%";
const MOBILE_BREAKPOINT = "md";

const AppContent = () => {
  const { theme } = useThemeContext();
  const muiTheme = useMuiTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down(MOBILE_BREAKPOINT));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        {/* App Header */}
        <AppBar
          position="static"
          elevation={0}
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            bgcolor: "background.default",
            color: "text.primary",
          }}
        >
          <Toolbar>
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
            )}
            <PaletteIcon sx={{ mr: 1.5, color: "primary.main" }} />
            <Typography variant="h6" component="div" fontWeight="700">
              MUI Theme Builder
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ display: { xs: "none", sm: "block" } }}
            >
              Create & customize Material UI themes
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
          {/* Sidebar - Desktop Persistent, Mobile Drawer */}
          {isMobile ? (
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better mobile performance
              }}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "80%",
                  maxWidth: 400,
                },
              }}
            >
              <Sidebar />
            </Drawer>
          ) : (
            <Box
              sx={{
                width: SIDEBAR_WIDTH,
                flexShrink: 0,
              }}
            >
              <Sidebar />
            </Box>
          )}

          {/* Main Content Area */}
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              width: isMobile ? "100%" : `calc(100% - ${SIDEBAR_WIDTH})`,
            }}
          >
            <PreviewPanel />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

function App() {
  return (
    <ThemeContextProvider>
      <AppContent />
    </ThemeContextProvider>
  );
}

export default App;
