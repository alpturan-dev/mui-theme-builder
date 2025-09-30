# MUI Theme Builder

A visual theme builder for Material UI (MUI) that lets you create and customize themes in real-time with live preview.

## Features

- **Live Preview**: See your theme changes instantly across multiple component examples
- **Color Customization**: Customize primary, secondary, error, warning, info, and success colors
- **Typography Controls**: Adjust font families, sizes, and styles
- **Export/Import**: Export themes as TypeScript/JavaScript code or JSON, and import existing themes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Component Examples**: Preview your theme with forms, data tables, and dashboard layouts

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mui-theme-builder
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Usage

1. **Customize Colors**: Use the color pickers in the sidebar to adjust your theme's color palette
2. **Adjust Typography**: Select fonts and modify typography settings for different text variants
3. **Preview Changes**: View real-time updates in the preview panel with various component examples
4. **Export Theme**: Click the export button to download your theme configuration as code or JSON
5. **Import Theme**: Load existing theme configurations to continue customizing

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Tech Stack

- **React 19** - UI framework
- **Material UI (MUI) 7** - Component library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Emotion** - CSS-in-JS styling

## Project Structure

```
src/
├── components/
│   ├── Sidebar/          # Theme customization controls
│   ├── PreviewPanel/     # Live preview area
│   ├── controls/         # Color pickers, font selectors, etc.
│   ├── examples/         # Component preview examples
│   └── ExportImport/     # Theme export/import functionality
├── contexts/
│   └── ThemeContext.tsx  # Theme state management
├── theme/
│   └── defaultTheme.ts   # Default theme configuration
├── utils/
│   └── themeExport.ts    # Theme export utilities
└── App.tsx               # Main application component
```

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
