import {
  Box,
  FormControlLabel,
  Checkbox,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

export const EventEditor = () => {
  return (
    <section>
      <Typography variant="h4" gutterBottom>
        Edit Event
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Event Name"
          variant="filled"
          size="small"
          required
        ></TextField>
        <TextField
          label="Speaker Name"
          variant="filled"
          size="small"
          required
        ></TextField>
        <TextField label="Format" variant="filled" size="small"></TextField>
        <TextField label="Duration" variant="filled" size="small"></TextField>
        <TextField label="Location" variant="filled" size="small"></TextField>
      </Stack>
      <br />
      <Stack>
        <Box>
          <FormControlLabel
            label="Event Completed"
            control={<Checkbox />}
          ></FormControlLabel>
          <FormControlLabel
            label="Virtual Event"
            control={<Checkbox />}
          ></FormControlLabel>
        </Box>
        <Box>
          <Button variant="contained" startIcon={<SaveIcon />}>
            Save
          </Button>
        </Box>
      </Stack>
    </section>
  );
};
