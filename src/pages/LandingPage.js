import React from "react";
import { Description } from "../components/Description";
import { ButtonComponent } from "../components/ButtonComponent";

export const LandingPage = () => {
  const message = "Register";
  return (
    <React.Fragment>
      <ButtonComponent message={message} />
      <Description />
    </React.Fragment>
  );
};
