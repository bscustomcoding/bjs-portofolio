import React from "react";
import Typography from "@mui/material/Typography";
import { Container, CssBaseline, Paper } from "@mui/material";

export const InfoPage = () => {
  return (
    <Container>
       <CssBaseline />
      <Typography
        variant="h2"
        sx={{my: 4, textAlign: 'center', color: 'primary.main' }}
      >
        Welcome to my Portofolio
      </Typography>
      <Typography
        paragraph
        sx={{my: 4, textAlign: 'center', color: 'primary.main' }}
      >
        This is a Portofolio under construction. React/TypeScript/Mui
      </Typography>
    </Container>
  );
};
