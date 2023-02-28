import React from "react";
import Typography from "@mui/material/Typography";
import { Container, CssBaseline } from "@mui/material";

export const InfoPage = () => {
  return (
    <Container>
      <CssBaseline />
      <Typography paragraph  variant="h3" sx={{ textAlign: "center", color: "warning.light" }}>
        Portofolio under construction!
      </Typography>
      <Typography
        paragraph
        sx={{ pl: 20, textAlign: "start", color: "primary.main" }}
      >
        <li>App containes of hardcodet data, and is not scalable yet</li>
      </Typography>
    </Container>
  );
};
