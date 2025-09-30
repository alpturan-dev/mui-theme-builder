import { Box, Typography, Select, MenuItem, FormControl } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

interface FontSelectorProps {
  label: string;
  value: string;
  onChange: (font: string) => void;
}

// Common Google Fonts options
const FONT_OPTIONS = [
  { value: '"Roboto", "Helvetica", "Arial", sans-serif', label: 'Roboto (Default)' },
  { value: '"Inter", sans-serif', label: 'Inter' },
  { value: '"Open Sans", sans-serif', label: 'Open Sans' },
  { value: '"Lato", sans-serif', label: 'Lato' },
  { value: '"Poppins", sans-serif', label: 'Poppins' },
  { value: '"Montserrat", sans-serif', label: 'Montserrat' },
  { value: '"Raleway", sans-serif', label: 'Raleway' },
  { value: '"Nunito", sans-serif', label: 'Nunito' },
  { value: '"Playfair Display", serif', label: 'Playfair Display' },
  { value: '"Merriweather", serif', label: 'Merriweather' },
  { value: '"PT Sans", sans-serif', label: 'PT Sans' },
  { value: '"Source Sans Pro", sans-serif', label: 'Source Sans Pro' },
  { value: '"Ubuntu", sans-serif', label: 'Ubuntu' },
  { value: '"Oswald", sans-serif', label: 'Oswald' },
  { value: 'system-ui, -apple-system, "Segoe UI", sans-serif', label: 'System UI' },
  { value: 'Georgia, serif', label: 'Georgia' },
  { value: '"Courier New", monospace', label: 'Courier New' },
];

const FontSelector = ({ label, value, onChange }: FontSelectorProps) => {
  const handleChange = (event: SelectChangeEvent) => {
    onChange(event.target.value);
  };

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="body2" gutterBottom fontWeight="medium">
        {label}
      </Typography>
      <FormControl fullWidth size="small">
        <Select value={value} onChange={handleChange}>
          {FONT_OPTIONS.map((option) => (
            <MenuItem key={option.value} value={option.value} sx={{ fontFamily: option.value }}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default FontSelector;