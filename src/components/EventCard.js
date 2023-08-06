import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ButtonComponent } from "./ButtonComponent";

import LabelIcon from "@mui/icons-material/Label";
import EditIcon from "@mui/icons-material/Edit";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MicIcon from "@mui/icons-material/Mic";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export const EventCard = ({
  imageUrl,
  eventDate,
  eventName,
  registerNumber,
  author,
  duration,
  location,
  type,
  tags,
  isAdmin,
}) => {
  return (
    <Card sx={{ border: "1px solid", marginBottom: "1rem" }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {eventName}
        </Typography>

        <Grid container>
          <Grid item xs={4}>
            <Stack direction="row">
              <MicIcon />
              <Typography variant="body1">{author}</Typography>
            </Stack>
            <Stack direction="row">
              <LocationOnIcon />
              <Typography variant="body1">{location}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack direction="row">
              <WatchLaterIcon />
              <Typography variant="body1">{duration}</Typography>
            </Stack>
            <Stack direction="row">
              <CalendarMonthIcon />
              <Typography variant="body1">{eventDate}</Typography>
            </Stack>

            <Stack direction="row">
              <LabelIcon />
              <Typography variant="body1">{type}</Typography>
            </Stack>
          </Grid>

          <Grid item xs={2}>
            {!isAdmin && (
              <Box>
                <ButtonComponent message="Register" />
              </Box>
            )}
            {isAdmin && (
              <Box>
                <Button startIcon={<EditIcon />}>Edit</Button>
              </Box>
            )}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
