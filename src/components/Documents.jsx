// * MUI Components
import { Box, Typography, CardContent, Link, Card } from "@mui/material";

const DownloadCard = ({ label, link }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {label}
        </Typography>
        <Link
          href={link}
          // download="file.txt"
          underline="hover"
          sx={{ display: "block", mt: 2 }}
        >
          Download
        </Link>
      </CardContent>
    </Card>
  );
};

export default function Documents({ documentsRef }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
        gap: 8,
      }}
      ref={documentsRef}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Documents
      </Typography>
      <DownloadCard
        label="Project Charter"
        link="https://drive.google.com/drive/folders/11H1GxguhEeDpixDWhWNfREbBBj0W6NsX?usp=sharing"
      />
      <DownloadCard
        label="Proposal Report"
        link="https://drive.google.com/drive/folders/1HPgjcvGb1hy9WsXyghfdNsyU6cSgwNIX?usp=sharing"
      />
      <DownloadCard
        label="Status Document 1"
        link="https://drive.google.com/drive/folders/1sWYJRKKnMdJmZB1uGjlyDmSHmI7JqP_Q?usp=sharing"
      />
      <DownloadCard
        label="Status Document 2"
        link="https://drive.google.com/drive/folders/1axBAuY5JZhCpMITJ7SX_yQye7IwiX9oC?usp=sharing"
      />
      <DownloadCard
        label="Final Report"
        link="https://drive.google.com/drive/folders/1ig87_gy4jKNlQItAJtwuy6jm39L7m9ik?usp=sharing"
      />
    </Box>
  );
}
