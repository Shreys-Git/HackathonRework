import { Stack, Box, IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export const Searchbar = () => {
  return (
    <Box sx={{ marginBottom: "2rem", width: "100%" }}>
      <Stack direction="row">
        <TextField
          label="Search..."
          size="small"
          sx={{ width: "100%" }}
        ></TextField>
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};
