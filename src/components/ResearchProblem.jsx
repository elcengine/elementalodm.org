// * Images
import houseCardImg from "../media/research-problem.png";

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

export default function ResearchProblem() {
  return (
    <Container sx={{ marginBottom: 16 }}>
      <CustomBox>
        <img
          src={houseCardImg}
          alt="House Card Images"
          style={{ maxWidth: "30vw" }}
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
            Research Problem
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            Golang rise in popularity is hindered by the lack of a stable ODM
            (Object Document Mapper) to efficiently interact with NoSQL
            databases like MongoDB. Existing options like Mgo and MGM are
            outdated or insufficient for modern applications, forcing developers
            to rely on MongoDB official Go driver, which requires repetitive and
            error-prone low-level coding for basic tasks like CRUD operations
            and pagination. This increases cognitive complexity and reduces
            productivity. Additionally, Go lacks advanced ODM features common in
            other languages, such as schema validation, instance methods, and
            transaction management, which leads to fragmented code and a higher
            likelihood of bugs. The absence of a plugin architecture further
            limits customization and flexibility, while the lack of support for
            distributed transactions and cross-database aggregation impedes the
            development of scalable applications.The proposed Elemental system
            aims to address these gaps by providing a stable, feature-rich ODM
            with support for schema validation, plugin architecture, efficient
            query building, and distributed transaction management, ultimately
            enhancing the maintainability and scalability of applications built
            with Go and MongoDB.
          </Typography>
        </Box>
      </CustomBox>
    </Container>
  );
}
