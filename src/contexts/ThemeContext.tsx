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
    // Generate shadow string from customShadow config
    const generateShadow = () => {
      if (!themeConfig.customShadow) return undefined;

      const { color, opacity, blur, spread, offsetX, offsetY } = themeConfig.customShadow;
      const hexOpacity = Math.round((opacity || 0.2) * 255).toString(16).padStart(2, '0');
      const shadowColor = `${color || '#000000'}${hexOpacity}`;

      return `${offsetX || 0}px ${offsetY || 2}px ${blur || 4}px ${spread || 0}px ${shadowColor}`;
    };

    const customShadow = generateShadow();

    const newTheme = createTheme({
      ...themeConfig,
      typography: {
        ...themeConfig.typography,
        fontSize: 14, // Fixed base font size
      },
      shadows: themeConfig.shadows || [
        'none',
        customShadow || '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
        customShadow || '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
        customShadow || '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
        customShadow || '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
        customShadow || '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
        customShadow || '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
        customShadow || '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
        customShadow || '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
        customShadow || '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
        customShadow || '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
        customShadow || '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
        customShadow || '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
        customShadow || '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
        customShadow || '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
        customShadow || '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
        customShadow || '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
        customShadow || '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
        customShadow || '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
        customShadow || '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
        customShadow || '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
        customShadow || '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
        customShadow || '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
        customShadow || '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
        customShadow || '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
      ],
    });

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
        customShadow: {
          ...prev.customShadow,
          ...config.customShadow,
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