import type { CustomThemeConfig } from '../theme/defaultTheme';

/**
 * Export theme configuration as JSON
 */
export const exportThemeAsJSON = (themeConfig: CustomThemeConfig): string => {
  return JSON.stringify(themeConfig, null, 2);
};

/**
 * Download theme configuration as JSON file
 */
export const downloadThemeJSON = (themeConfig: CustomThemeConfig, filename = 'theme-config.json') => {
  const json = exportThemeAsJSON(themeConfig);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Export theme as JavaScript/TypeScript code
 */
export const exportThemeAsCode = (themeConfig: CustomThemeConfig, language: 'js' | 'ts' = 'ts'): string => {
  const isTypeScript = language === 'ts';

  const typeImport = isTypeScript
    ? "import type { ThemeOptions } from '@mui/material/styles';\n\n"
    : '';

  const typeAnnotation = isTypeScript ? ': ThemeOptions' : '';

  return `${typeImport}import { createTheme } from '@mui/material/styles';

export const themeConfig${typeAnnotation} = ${JSON.stringify(themeConfig, null, 2)};

export const theme = createTheme(themeConfig);

export default theme;
`;
};

/**
 * Download theme as JavaScript/TypeScript file
 */
export const downloadThemeCode = (
  themeConfig: CustomThemeConfig,
  language: 'js' | 'ts' = 'ts',
  filename?: string
) => {
  const defaultFilename = language === 'ts' ? 'theme.ts' : 'theme.js';
  const code = exportThemeAsCode(themeConfig, language);
  const blob = new Blob([code], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename || defaultFilename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

/**
 * Generate usage code snippet
 */
export const generateUsageSnippet = (language: 'js' | 'ts' = 'ts'): string => {
  const isTypeScript = language === 'ts';
  const extension = isTypeScript ? 'ts' : 'js';
  const reactImport = isTypeScript
    ? "import type { FC } from 'react';"
    : '';

  return `// Import the theme
import { theme } from './theme.${extension}';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
${reactImport}

// Wrap your app with ThemeProvider
${isTypeScript ? 'const App: FC = () => {' : 'function App() {'}
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Your app components */}
    </ThemeProvider>
  );
${isTypeScript ? '};' : '}'}

export default App;
`;
};

/**
 * Import theme configuration from JSON string
 */
export const importThemeFromJSON = (json: string): CustomThemeConfig | null => {
  try {
    const config = JSON.parse(json);
    // Basic validation
    if (typeof config !== 'object' || config === null) {
      throw new Error('Invalid theme configuration');
    }
    return config as CustomThemeConfig;
  } catch (error) {
    console.error('Error parsing theme JSON:', error);
    return null;
  }
};

/**
 * Read file and import theme configuration
 */
export const importThemeFromFile = (file: File): Promise<CustomThemeConfig | null> => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const config = importThemeFromJSON(content);
      resolve(config);
    };
    reader.onerror = () => {
      resolve(null);
    };
    reader.readAsText(file);
  });
};