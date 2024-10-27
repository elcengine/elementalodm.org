// * Components
import Navbar from "./Navbar";
import CustomButton from "./CustomButton";

// * Images
import HeroImg from "./../media/svg/server.svg";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomHomeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  gap: theme.spacing(5),
  marginTop: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
  },
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#000336",
  fontWeight: "bold",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "40px",
  },
}));

export default function Home({ homeRef, allRefs }) {
  const toGithub = () => {
    window.location.href = "https://github.com/elcengine/elemental";
  };

  const toDocs = () => {
    window.location.href = "http://docs.elementalodm.org/";
  };

  return (
    <Box
      sx={{
        backgroundColor: "#E6F0FF",
        minHeight: "80vh",
        paddingBottom: 2,
        marginBottom: 6,
      }}
      ref={homeRef}
    >
      <Container>
        <Navbar allRefs={allRefs} />

        <CustomHomeBox>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: "18px",
                color: "#687690",
                fontWeight: "500",
                mt: 10,
                mb: 4,
              }}
            >
              Welcome to Elemental
            </Typography>
            <Title variant="h2">A modern MongoDB ODM for Golang.</Title>
            <Typography
              variant="body2"
              sx={{ fontSize: "18px", color: "#5A6473", my: 4 }}
            >
              Try now!
            </Typography>
            <Box display="flex" flexDirection="row" gap={4}>
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Github"
                onClick={toGithub}
              />
              <CustomButton
                backgroundColor="#0F1B4C"
                color="#fff"
                buttonText="Documentation"
                onClick={toDocs}
              />
            </Box>
          </Box>

          <Box sx={{ flex: 1.25 }}>
            <img
              src={HeroImg}
              alt="hero illustration"
              style={{ maxWidth: "100%" }}
            />
          </Box>
        </CustomHomeBox>
      </Container>
    </Box>
  );
}
