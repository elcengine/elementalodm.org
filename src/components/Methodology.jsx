// * Images
import SystemArchitectureImg from "../media/system-architecture.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const Divider = styled("div")(({ theme }) => ({
  width: "13%",
  height: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function Methodology() {
  return (
    <Container sx={{ marginBottom: 16 }}>
      <CustomBox>
        <img
          src={SystemArchitectureImg}
          alt="House Card Images"
          style={{
            maxWidth: "30vw",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.1)",
            padding: "10px",
          }}
        />
        <Box>
          <Divider />
          <Typography
            sx={{
              fontSize: "35px",
              color: "#000339",
              fontWeight: "700",
              my: 3,
            }}
          >
            Methodology
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            Task break down of Elemental is as followes,
            <br />
            <br />
            1. Requirement Analysis: Identifies critical gaps in existing
            Go-based ODMs, focusing on performance, scalability, and developer
            experience.
            <br />
            2. System Design and Architecture: Organized into four layers—Core
            Layer, Query Builder Layer, Plugin Layer, and Validation and
            Concurrency Layer.
            <br />
            3. Core Component Development: Iterative development of key
            components such as the query builder, plugin system, validation
            system, and concurrency management.
            <br />
            4. Testing and Implementation: Involves benchmarking, integration
            testing, and user feedback to validate the system's performance and
            ensure it is scalable and ready for release.
            <br />
            <br />
            Elemental’s development focused on creating a high-performance,
            modular Object Document Mapper for Go that simplifies MongoDB
            operations. Designed with a layered architecture, it combines an
            intuitive query builder, a flexible plugin system, and robust data
            validation to streamline database interactions. This structure
            enables extensibility, allowing easy customization without altering
            core functions, while the modular design enhances performance,
            maintainability, and scalability. Rigorous testing and benchmarking
            validated Elemental’s ability to handle high concurrency and complex
            queries, offering a reliable and developer-friendly solution for
            modern Go applications. The figure illustrates the system architecture
            and clear idea of separation and interaction of every functional
            layer.
          </Typography>
        </Box>
      </CustomBox>
    </Container>
  );
}
