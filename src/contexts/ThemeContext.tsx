import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { createTheme } from '@mui/material/styles';
import type { Theme } from '@mui/material/styles';
import { defaultThemeConfig } from '../theme/defaultTheme';
import type { CustomThemeConfig } from '../theme/defaultTheme';

interface ThemeContextType {
  themeConfig: CustomThemeConfig;
  theme: Theme;
  updateThemeConfig: (config: Partial<CustomThemeConfig>) => void;
  resetTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'mui-theme-builder-config';

const loadThemeFromStorage = (): CustomThemeConfig => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error loading theme from localStorage:', error);
  }
  return defaultThemeConfig;
};

const saveThemeToStorage = (config: CustomThemeConfig) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch (error) {
    console.error('Error saving theme to localStorage:', error);
  }
};

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [themeConfig, setThemeConfig] = useState<CustomThemeConfig>(loadThemeFromStorage);
  const [theme, setTheme] = useState<Theme>(createTheme(themeConfig));

  useEffect(() => {
    const newTheme = createTheme(themeConfig);
    setTheme(newTheme);
    saveThemeToStorage(themeConfig);
  }, [themeConfig]);

  const updateThemeConfig = (config: Partial<CustomThemeConfig>) => {
    setThemeConfig((prev) => {
      const updated = {
        ...prev,
        ...config,
        palette: {
          ...prev.palette,
          ...config.palette,
        },
        typography: {
          ...prev.typography,
          ...config.typography,
        },
        shape: {
          ...prev.shape,
          ...config.shape,
        },
      };
      return updated;
    });
  };

  const resetTheme = () => {
    setThemeConfig(defaultThemeConfig);
    localStorage.removeItem(STORAGE_KEY);
  };

  return (
    <ThemeContext.Provider value={{ themeConfig, theme, updateThemeConfig, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeContextProvider');
  }
  return context;
};