import { ButtonProps, Button, colors } from "@mui/material";
import React from "react";

type IUFMainButtonProps = ButtonProps & {
  children: React.ReactNode;
  warning?: Boolean;
};

export const UFMainButton: React.FC<IUFMainButtonProps> = ({ warning = false, children, ...rest }) => {
  return (
    <Button {...rest} fullWidth variant={warning ? "outlined" : "contained"} disableFocusRipple disableRipple disableTouchRipple>
      {children}
    </Button>
  );
};
