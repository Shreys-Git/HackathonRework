import { Stack, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

export const FilterButtonComponent = () => {
  const [presentationType, handlePresentationType] = useState([]);
  const handlePresentationChange = (event, updatedType) => {
    handlePresentationType(updatedType);
  };
  return (
    <Stack direction="row">
      <ToggleButtonGroup
        value={presentationType}
        onChange={handlePresentationChange}
        aria-label="filter toggle group"
      >
        <ToggleButton value="whitepaper">White Paper</ToggleButton>
        <ToggleButton value="secondtype">Second Type</ToggleButton>
        <ToggleButton value="thirdtype">Third Type</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
};
