// * MUI Components
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Link,
} from "@mui/material";

// * Images
import shifan from "../media/people/shifan.jpg";
import akalanka from "../media/people/akalanka.jpeg";
import sheronie from "../media/people/sheronie.jpeg";
import laksara from "../media/people/laksara.jpg";
import drAnuradha from "../media/people/Dr_Anuradha.jpg";
import msSamanthi from "../media/people/Ms_Samanthi.jpg";

function PersonCardd({ imageSrc, name, email }) {
  return (
    <Card sx={{ width: 300, boxShadow: 3, borderRadius: 2 }}>
      <Box
        component="img"
        src={imageSrc}
        alt={`${name}'s picture`}
        sx={{
          width: "100%",
          height: 200,
          objectFit: "scale-down",
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
        }}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {email}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`mailto:${email}`} underline="hover" color="primary">
          Contact
        </Link>
      </CardActions>
    </Card>
  );
}

export default function AboutUs({ aboutUsRef }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
      }}
      ref={aboutUsRef}
    >
      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        About Us
      </Typography>

      <Typography
        variant="h3"
        sx={{ fontSize: "28px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Supervisors
      </Typography>
      <Box display={"flex"} flexDirection={"row"} gap={8}>
        <PersonCardd
          imageSrc={drAnuradha}
          name={"Prof. Anuradha Karunasena"}
          email={"anuradha.k@sliit.lk"}
        />
        <PersonCardd
          imageSrc={msSamanthi}
          name={"Ms. Samanthi E.R Siriwardana"}
          email={"Samanthi.s@sliit.lk"}
        />
      </Box>

      <Typography
        variant="h3"
        sx={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#000339",
          mb: 3,
          mt: 8,
        }}
      >
        Our Team
      </Typography>
      <Box display={"flex"} flexDirection={"row"} gap={8}>
        <PersonCardd
          imageSrc={shifan}
          name={"Shifan Mohamed"}
          email={"shifan611@gmail.com"}
        />
        <PersonCardd
          imageSrc={akalanka}
          name={"Akalanka Perera"}
          email={"akalanka128@gmail.com"}
        />
        <PersonCardd
          imageSrc={sheronie}
          name={"Sheronie Perera"}
          email={"sheroniperera20@gmail.com"}
        />
        <PersonCardd
          imageSrc={shifan}
          name={"Yasindu Laksara"}
          email={"amylaksara@gmail.com"}
        />
      </Box>
    </Box>
  );
}
