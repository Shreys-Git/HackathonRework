import React from "react";
import { EventCreator } from "../components/EventCreator";
import { EventEditor } from "../components/EventEditor";

export const AdminPage = () => {
  return (
    <React.Fragment>
      <EventCreator />
      <EventEditor />
    </React.Fragment>
  );
};
