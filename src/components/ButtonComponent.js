import { Button } from "@mui/material";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";

export const ButtonComponent = (props) => {
  const handleRegister = () => {
    console.log("Registration Initiated");
  };

  return (
    <Button
      variant="contained"
      size="large"
      color="primary"
      onClick={handleRegister}
      startIcon={<AppRegistrationIcon />}
    >
      {props.message}
    </Button>
  );
};
