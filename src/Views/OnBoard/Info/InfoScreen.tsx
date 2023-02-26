import React from "react";
import Typography from "@mui/material/Typography";
import { Container, CssBaseline } from "@mui/material";

export const InfoPage = () => {
  return (
    <Container>
       <CssBaseline />
      <Typography
        variant="h3"
        sx={{my: 4, textAlign: 'center', color: 'primary.main' }}
      >
        Welcome to my Portofolio
      </Typography>
      <Typography
        paragraph
        sx={{ textAlign: 'center', color: 'primary.main' }}
      >
        Portofolio under construction. Made in React/TypeScript/Mui
      </Typography>
      <Typography
        paragraph
        sx={{ pl: 20, textAlign: 'start', color: 'primary.main' }}
      >
       <li>
       App does not support mobile and ipad yet, implmented soon 
        </li> 
        <li>
        App has no backend, but logic is made for future implementation.
        </li>
      </Typography>
    </Container>
  );
};
