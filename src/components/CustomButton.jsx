import { Button } from "@chakra-ui/react";
import React from "react";

const CustomButton = ({ icon, text, children, ...buttonProps }) => {
  return (
    <Button variant="outlined" {...buttonProps}>
      {!!icon && { icon }}
      {!!text && text}
      {children}
    </Button>
  );
};

export default CustomButton;
