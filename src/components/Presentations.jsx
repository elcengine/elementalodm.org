// * MUI Components
import { Box, Typography, styled } from "@mui/material";

export default function Presentations() {
  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 16,
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Presentations
      </Typography>
    </Box>
  );
}
