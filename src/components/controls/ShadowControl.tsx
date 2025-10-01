import { Box, Typography, TextField, Slider, Stack } from '@mui/material';
import ColorPicker from './ColorPicker';

interface ShadowControlProps {
  color: string;
  opacity: number;
  blur: number;
  spread: number;
  offsetX: number;
  offsetY: number;
  onColorChange: (color: string) => void;
  onOpacityChange: (opacity: number) => void;
  onBlurChange: (blur: number) => void;
  onSpreadChange: (spread: number) => void;
  onOffsetXChange: (offsetX: number) => void;
  onOffsetYChange: (offsetY: number) => void;
}

const ShadowControl = ({
  color,
  opacity,
  blur,
  spread,
  offsetX,
  offsetY,
  onColorChange,
  onOpacityChange,
  onBlurChange,
  onSpreadChange,
  onOffsetXChange,
  onOffsetYChange,
}: ShadowControlProps) => {
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
        Shadow Configuration
      </Typography>
      <Stack spacing={2.5}>
        <ColorPicker
          label="Shadow Color"
          value={color}
          onChange={onColorChange}
        />

        <Box>
          <Typography variant="body2" gutterBottom>
            Opacity
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Slider
              value={opacity}
              onChange={(_, value) => onOpacityChange(value as number)}
              min={0}
              max={1}
              step={0.01}
              sx={{ flexGrow: 1 }}
            />
            <TextField
              size="small"
              type="number"
              value={opacity}
              onChange={(e) => onOpacityChange(parseFloat(e.target.value))}
              inputProps={{ step: 0.01, min: 0, max: 1 }}
              sx={{ width: 80 }}
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="body2" gutterBottom>
            Blur Radius (px)
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Slider
              value={blur}
              onChange={(_, value) => onBlurChange(value as number)}
              min={0}
              max={50}
              step={1}
              sx={{ flexGrow: 1 }}
            />
            <TextField
              size="small"
              type="number"
              value={blur}
              onChange={(e) => onBlurChange(parseInt(e.target.value))}
              inputProps={{ step: 1, min: 0, max: 50 }}
              sx={{ width: 80 }}
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="body2" gutterBottom>
            Spread (px)
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Slider
              value={spread}
              onChange={(_, value) => onSpreadChange(value as number)}
              min={-20}
              max={20}
              step={1}
              sx={{ flexGrow: 1 }}
            />
            <TextField
              size="small"
              type="number"
              value={spread}
              onChange={(e) => onSpreadChange(parseInt(e.target.value))}
              inputProps={{ step: 1, min: -20, max: 20 }}
              sx={{ width: 80 }}
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="body2" gutterBottom>
            Offset X (px)
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Slider
              value={offsetX}
              onChange={(_, value) => onOffsetXChange(value as number)}
              min={-20}
              max={20}
              step={1}
              sx={{ flexGrow: 1 }}
            />
            <TextField
              size="small"
              type="number"
              value={offsetX}
              onChange={(e) => onOffsetXChange(parseInt(e.target.value))}
              inputProps={{ step: 1, min: -20, max: 20 }}
              sx={{ width: 80 }}
            />
          </Stack>
        </Box>

        <Box>
          <Typography variant="body2" gutterBottom>
            Offset Y (px)
          </Typography>
          <Stack direction="row" spacing={2} alignItems="center">
            <Slider
              value={offsetY}
              onChange={(_, value) => onOffsetYChange(value as number)}
              min={-20}
              max={20}
              step={1}
              sx={{ flexGrow: 1 }}
            />
            <TextField
              size="small"
              type="number"
              value={offsetY}
              onChange={(e) => onOffsetYChange(parseInt(e.target.value))}
              inputProps={{ step: 1, min: -20, max: 20 }}
              sx={{ width: 80 }}
            />
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default ShadowControl;
