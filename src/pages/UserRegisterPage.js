import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import { FilterButtonComponent } from "../components/FilterButtonComponent";
import { Searchbar } from "../components/SearchBar";
import { CheckboxFilter } from "../components/CheckboxFilter";
import { EventCard } from "../components/EventCard";
import { sampleEventData } from "../data/SampleEventData";
export const UserRegisterPage = () => {
  return (
    <Box sx={{ margin: "2rem" }}>
      <Searchbar />

      <Grid container>
        <Grid item xs={2}>
          <CheckboxFilter />
        </Grid>
        <Grid item xs={10}>
          <Stack>
            <FilterButtonComponent />

            {sampleEventData.map((event, index) => (
              <EventCard
                key={index}
                imageUrl={event.imageUrl}
                eventDate={event.eventDate}
                eventName={event.eventName}
                registerNumber={event.registerNumber}
                author={event.author}
                duration={event.duration}
                location={event.location}
                type={event.type}
                tags={event.tags}
                isAdmin={false}
              />
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};
