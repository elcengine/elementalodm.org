// * MUI Components
import { Box, Typography, styled } from "@mui/material";

export default function Documents({ documentsRef }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
      }}
      ref={documentsRef}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Documents
      </Typography>
    </Box>
  );
}
