import React from "react";
import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(90deg, #2196F3, #21CBF3)", // blue gradient
        color: "white",
        textAlign: "center",
        py: 3,
        mt: 4,
        boxShadow: "0px -2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
        Weather App
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        © {new Date().getFullYear()} | Created by{" "}
        <span style={{ fontWeight: "600", color: "#FFD700" }}>Mukul Sharma</span>
      </Typography>
      <Typography variant="body2" sx={{ mt: 1 }}>
        Powered by{" "}
        <Link
          href="https://openweathermap.org/"
          target="_blank"
          rel="noopener"
          underline="hover"
          sx={{ color: "#fff", fontWeight: "500" }}
        >
          OpenWeather API
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
