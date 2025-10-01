import type { ThemeOptions } from "@mui/material/styles";

export type CustomThemeConfig = ThemeOptions & {
  palette?: {
    mode?: "light" | "dark";
    primary?: {
      main: string;
    };
    secondary?: {
      main: string;
    };
    error?: {
      main: string;
    };
    warning?: {
      main: string;
    };
    info?: {
      main: string;
    };
    success?: {
      main: string;
    };
    background?: {
      default: string;
      paper: string;
    };
    text?: {
      primary: string;
      secondary: string;
    };
  };
  typography?: {
    fontFamily?: string;
    fontSize?: number;
    h1?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: number;
    };
    h2?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: number;
    };
    h3?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: number;
    };
    h4?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: number;
    };
    h5?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: number;
    };
    h6?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: number;
    };
    body1?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: number;
    };
    body2?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: number;
    };
    button?: {
      fontSize?: string;
      fontWeight?: number;
      textTransform?: "none" | "capitalize" | "uppercase" | "lowercase";
    };
  };
  spacing?: number;
  shape?: {
    borderRadius?: number;
  };
  customShadow?: {
    color?: string;
    opacity?: number;
    blur?: number;
    spread?: number;
    offsetX?: number;
    offsetY?: number;
  };
}

export const defaultThemeConfig: CustomThemeConfig = {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
    error: {
      main: "#d32f2f",
    },
    warning: {
      main: "#ed6c02",
    },
    info: {
      main: "#0288d1",
    },
    success: {
      main: "#2e7d32",
    },
    background: {
      default: "#ffffff",
      paper: "#f5f5f5",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: {
      fontSize: "6rem",
      fontWeight: 300,
      lineHeight: 1.167,
    },
    h2: {
      fontSize: "3.75rem",
      fontWeight: 300,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.167,
    },
    h4: {
      fontSize: "2.125rem",
      fontWeight: 400,
      lineHeight: 1.235,
    },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.334,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.6,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
    },
    button: {
      fontSize: "0.875rem",
      fontWeight: 500,
      textTransform: "uppercase",
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 4,
  },
  customShadow: {
    color: "#000000",
    opacity: 0.2,
    blur: 4,
    spread: 0,
    offsetX: 0,
    offsetY: 2,
  },
};
