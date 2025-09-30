import { Box, TextField, Typography, Paper } from '@mui/material';
import type { ChangeEvent } from 'react';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (color: string) => void;
  showPalette?: boolean;
}

const ColorPicker = ({ label, value, onChange, showPalette = false }: ColorPickerProps) => {
  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const color = event.target.value;
    // Basic validation for hex colors
    if (color.match(/^#[0-9A-Fa-f]{0,6}$/)) {
      onChange(color);
    }
  };

  return (
    <Box sx={{ mb: 2.5 }}>
      <Typography variant="body2" gutterBottom fontWeight="500" sx={{ mb: 1 }}>
        {label}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'center' }}>
        {/* Color swatch and native picker */}
        <Paper
          elevation={0}
          sx={{
            width: 48,
            height: 48,
            bgcolor: value,
            border: 2,
            borderColor: 'divider',
            cursor: 'pointer',
            position: 'relative',
            overflow: 'hidden',
            flexShrink: 0,
            borderRadius: 1.5,
            transition: 'all 0.2s',
            '&:hover': {
              borderColor: 'primary.main',
              transform: 'scale(1.05)',
            },
          }}
        >
          <input
            type="color"
            value={value}
            onChange={handleColorChange}
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              opacity: 0,
              cursor: 'pointer',
            }}
          />
        </Paper>

        {/* Hex input */}
        <TextField
          size="small"
          value={value}
          onChange={handleTextChange}
          placeholder="#000000"
          sx={{
            flexGrow: 1,
            '& .MuiInputBase-input': {
              fontFamily: 'monospace',
              fontSize: '0.9rem',
            },
          }}
        />
      </Box>

      {/* Color palette preview */}
      {showPalette && (
        <Box sx={{ mt: 1.5, display: 'flex', gap: 1, alignItems: 'center' }}>
          <Typography variant="caption" color="text.secondary" sx={{ mr: 1, minWidth: 50 }}>
            Palette:
          </Typography>
          <Box
            sx={{
              width: 32,
              height: 32,
              bgcolor: value,
              filter: 'brightness(1.3)',
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              flexShrink: 0,
            }}
            title="Light variant"
          />
          <Box
            sx={{
              width: 32,
              height: 32,
              bgcolor: value,
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              flexShrink: 0,
            }}
            title="Main color"
          />
          <Box
            sx={{
              width: 32,
              height: 32,
              bgcolor: value,
              filter: 'brightness(0.7)',
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              flexShrink: 0,
            }}
            title="Dark variant"
          />
        </Box>
      )}
    </Box>
  );
};

export default ColorPicker;