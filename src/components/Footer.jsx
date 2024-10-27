// * MUI Components
import { Box, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 8,
      }}
    >
      <Box
        sx={{
          padding: "20px",
          textAlign: "center",
          borderTop: "1px solid #ddd",
        }}
      >
        <Typography variant="h6" component="div" gutterBottom>
          Elemental ODM
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Contact Number:{" "}
          <Link href="tel:+1234567890" color="inherit">
            +94 76 617 6116
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Emails:{" "}
          <Link href="mailto:info@company.com" color="inherit">
            shifan611@gmail.com, akalanka47000@gmail.com, devshe20@gmail.com, amylaksara@gmail.com
          </Link>
        </Typography>
        <Typography
          variant="caption"
          color="textSecondary"
          sx={{ marginTop: "10px", display: "block" }}
        >
          2024 Elemental ODM
        </Typography>
      </Box>
    </Box>
  );
}
