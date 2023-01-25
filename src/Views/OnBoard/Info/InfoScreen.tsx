import React from "react";
import { TheemeContext } from '../../../StateManagement/ThemeProvider';
import { Route, Routes } from "react-router-dom";
import Typography from "@mui/material/Typography";

export const InfoPage = () => {
    const { themePalette } = React.useContext(TheemeContext);
  return (
    <div>
      <Typography
        paragraph
        style={{ color: themePalette.palette.text.primary }}
      >
        Welcome to my Portofolio
      </Typography>
      <Typography
        paragraph
        style={{ color: themePalette.palette.text.primary }}
      >
        This is a Portofolio under construction. React/TypeScript
      </Typography>
    </div>
  );
};
