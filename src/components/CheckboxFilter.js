import { Stack, Box, FormControlLabel, Checkbox } from "@mui/material";
import { useState } from "react";

export const CheckboxFilter = () => {
  const [inpersonEvent, setInpersonEvent] = useState(false);
  const [virtualEvent, setVirtualEvent] = useState(false);
  const [upcomingEvent, setUpcomingEvent] = useState(false);
  const [openEvent, setOpenEvent] = useState(false);
  const [endedEvent, setEndedEvent] = useState(false);
  const [length1to2Hours, setLength1to2Hours] = useState(false);
  const [length2to4Hours, setLength2to4Hours] = useState(false);
  const [length5PlusHours, setLength5PlusHours] = useState(false);
  const [interestWebDev, setInterestWebDev] = useState(false);
  const [interestDevops, setInterestDevops] = useState(false);
  const [interestMachineLearning, setInterestMachineLearning] = useState(false);
  const [interestOpenEnded, setInterestOpenEnded] = useState(false);
  const [interestSecurity, setInterestSecurity] = useState(false);

  const handleInpersonEvents = (event) => {
    setInpersonEvent(event.target.checked);
  };

  const handleVirtualEvents = (event) => {
    setVirtualEvent(event.target.checked);
  };

  const handleUpcomingEvents = (event) => {
    setUpcomingEvent(event.target.checked);
  };

  const handleOpenEvents = (event) => {
    setOpenEvent(event.target.checked);
  };

  const handleEndedEvents = (event) => {
    setEndedEvent(event.target.checked);
  };

  const handleLength1to2Hours = (event) => {
    setLength1to2Hours(event.target.checked);
  };

  const handleLength2to4Hours = (event) => {
    setLength2to4Hours(event.target.checked);
  };

  const handleLength5PlusHours = (event) => {
    setLength5PlusHours(event.target.checked);
  };

  const handleInterestWebDev = (event) => {
    setInterestWebDev(event.target.checked);
  };

  const handleInterestDevops = (event) => {
    setInterestDevops(event.target.checked);
  };

  const handleInterestMachineLearning = (event) => {
    setInterestMachineLearning(event.target.checked);
  };

  const handleInterestOpenEnded = (event) => {
    setInterestOpenEnded(event.target.checked);
  };

  const handleInterestSecurity = (event) => {
    setInterestSecurity(event.target.checked);
  };

  return (
    <Box>
      <Stack>
        <b>Location</b>
        <FormControlLabel
          label="In-person"
          control={
            <Checkbox checked={inpersonEvent} onChange={handleInpersonEvents} />
          }
        />
        <FormControlLabel
          label="Virtual"
          control={
            <Checkbox checked={virtualEvent} onChange={handleVirtualEvents} />
          }
        />
      </Stack>
      <br />
      <Stack>
        <b>Status</b>
        <FormControlLabel
          label="Upcoming"
          control={
            <Checkbox checked={upcomingEvent} onChange={handleUpcomingEvents} />
          }
        />
        <FormControlLabel
          label="Open"
          control={<Checkbox checked={openEvent} onChange={handleOpenEvents} />}
        />
        <FormControlLabel
          label="Ended"
          control={
            <Checkbox checked={endedEvent} onChange={handleEndedEvents} />
          }
        />
      </Stack>
      <br />
      <Stack>
        <b>Duration</b>
        <FormControlLabel
          label="1–2 hours"
          control={
            <Checkbox
              checked={length1to2Hours}
              onChange={handleLength1to2Hours}
            />
          }
        />
        <FormControlLabel
          label="2–4 hours"
          control={
            <Checkbox
              checked={length2to4Hours}
              onChange={handleLength2to4Hours}
            />
          }
        />
        <FormControlLabel
          label="5+ hours"
          control={
            <Checkbox
              checked={length5PlusHours}
              onChange={handleLength5PlusHours}
            />
          }
        />
      </Stack>
      <br />
      <Stack>
        <b>Interest tags</b>
        <FormControlLabel
          label="Web development"
          control={
            <Checkbox
              checked={interestWebDev}
              onChange={handleInterestWebDev}
            />
          }
        />
        <FormControlLabel
          label="Devops"
          control={
            <Checkbox
              checked={interestDevops}
              onChange={handleInterestDevops}
            />
          }
        />
        <FormControlLabel
          label="Machine Learning/AI"
          control={
            <Checkbox
              checked={interestMachineLearning}
              onChange={handleInterestMachineLearning}
            />
          }
        />
        <FormControlLabel
          label="Open Ended"
          control={
            <Checkbox
              checked={interestOpenEnded}
              onChange={handleInterestOpenEnded}
            />
          }
        />
        <FormControlLabel
          label="Security"
          control={
            <Checkbox
              checked={interestSecurity}
              onChange={handleInterestSecurity}
            />
          }
        />
      </Stack>
    </Box>
  );
};
