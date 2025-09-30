import { Box, Typography, TextField, Select, MenuItem, FormControl, InputLabel, Stack } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

interface TypographyControlProps {
  label: string;
  fontSize?: string;
  fontWeight?: number;
  lineHeight?: number;
  onFontSizeChange?: (size: string) => void;
  onFontWeightChange?: (weight: number) => void;
  onLineHeightChange?: (height: number) => void;
}

const FONT_WEIGHTS = [
  { value: 100, label: 'Thin (100)' },
  { value: 200, label: 'Extra Light (200)' },
  { value: 300, label: 'Light (300)' },
  { value: 400, label: 'Regular (400)' },
  { value: 500, label: 'Medium (500)' },
  { value: 600, label: 'Semi Bold (600)' },
  { value: 700, label: 'Bold (700)' },
  { value: 800, label: 'Extra Bold (800)' },
  { value: 900, label: 'Black (900)' },
];

const TypographyControl = ({
  label,
  fontSize,
  fontWeight,
  lineHeight,
  onFontSizeChange,
  onFontWeightChange,
  onLineHeightChange,
}: TypographyControlProps) => {
  const handleFontSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onFontSizeChange) {
      onFontSizeChange(event.target.value);
    }
  };

  const handleFontWeightChange = (event: SelectChangeEvent) => {
    if (onFontWeightChange) {
      onFontWeightChange(Number(event.target.value));
    }
  };

  const handleLineHeightChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onLineHeightChange) {
      const value = parseFloat(event.target.value);
      if (!isNaN(value)) {
        onLineHeightChange(value);
      }
    }
  };

  return (
    <Box
      sx={{
        mb: 2.5,
        p: 2.5,
        border: 1,
        borderColor: 'divider',
        borderRadius: 2,
        bgcolor: 'background.paper',
      }}
    >
      <Typography variant="subtitle2" gutterBottom fontWeight="600" sx={{ mb: 2 }}>
        {label}
      </Typography>
      <Stack spacing={2}>
        {fontSize !== undefined && onFontSizeChange && (
          <TextField
            label="Font Size"
            size="small"
            value={fontSize}
            onChange={handleFontSizeChange}
            placeholder="e.g., 1rem, 16px"
            helperText="Use rem, px, or em units"
          />
        )}
        {fontWeight !== undefined && onFontWeightChange && (
          <FormControl size="small" fullWidth>
            <InputLabel>Font Weight</InputLabel>
            <Select value={fontWeight.toString()} onChange={handleFontWeightChange} label="Font Weight">
              {FONT_WEIGHTS.map((weight) => (
                <MenuItem key={weight.value} value={weight.value}>
                  {weight.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {lineHeight !== undefined && onLineHeightChange && (
          <TextField
            label="Line Height"
            size="small"
            type="number"
            value={lineHeight}
            onChange={handleLineHeightChange}
            inputProps={{ step: 0.1, min: 0.5, max: 3 }}
            helperText="Multiplier (e.g., 1.5)"
          />
        )}
      </Stack>
    </Box>
  );
};

export default TypographyControl;