// * Images
import houseCardImg from "../media/houseCard.png";

// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(10),
  alignItems: "start",
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

const VerticalDivider = styled("div")(({ theme }) => ({
  width: "5px",
  height: "40vh",
  borderRadius: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LargeText = styled(Typography)(({ theme }) => ({
  fontSize: "64px",
  color: "#000",
  fontWeight: "700",
  [theme.breakpoints.down("md")]: {
    fontSize: "32px",
  },
}));

const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  color: "#7B8087",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    fontSize: "14px",
  },
}));

export default function Literature({ domainRef }) {
  return (
    <Container sx={{ marginTop: 8, marginBottom: 16 }} ref={domainRef}>
      <Typography
        sx={{ color: "#000339", fontSize: "35px", fontWeight: "bold" }}
      >
        Domain
      </Typography>
      <Divider />
      <CustomBox marginTop={4}>
        <Box>
          <Typography
            sx={{
              fontSize: "35px",
              color: "#000339",
              fontWeight: "700",
              my: 3,
            }}
          >
            Literature Review
          </Typography>

          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
            }}
          >
            Go was designed to solve challenges such as slow build times and
            uncontrolled dependencies that arise in large-scale software
            systems, making it particularly suitable for high-performance
            applications and distributed systems​ [1]. Therefore, an effective
            Object Relational Mapper is essential for simplifying the
            interaction between Go applications and NoSQL databases. Current
            tools like MGM and Mongo-Driver already provide useful abstractions
            for NoSQL databases, but each has its limitations [2]. These
            limitations make it critical to develop a more comprehensive NoSQL
            ORM tailored to Go, which can handle complex data models and
            relationships while offering cross-database compatibility and
            optimized performance. The simplicity of Go’s syntax, along with its
            built-in concurrency support and cross-platform compatibility,
            enables the efficient mapping of relational data to Go’s struct
            types while keeping the system performant. This efficiency is
            crucial for database-driven applications, which require frequent,
            optimized database interactions [3]. Therefore, creating an ORM for
            Go would help developers manage database interactions more
            seamlessly while leveraging the language’s strengths in scalability
            and performance​ [1].
          </Typography>
        </Box>
        <Box minHeight="100%" marginY={"auto"}>
          <VerticalDivider />
        </Box>
        <Box height={"100%"}>
          <Typography
            sx={{
              fontSize: "28px",
              color: "#000339",
              fontWeight: "500",
              mb: 3,
              mt: 5,
            }}
          >
            References
          </Typography>
          <Typography
            sx={{
              fontSize: "16px",
              color: "#5A6473",
              lineHeight: "27px",
              minWidth: "24vw",
            }}
          >
            [1] J. K. B, N. Shivraj, N. Rakshith, and N. M, “Study on go
            programming language,” International Journal of Advanced Research in
            Science Communication and Technology, pp. 330–333, Nov. 2021, doi:
            10.48175/ijarsct-2126.
            <br />
            [2] Tramposo, “Database Interactions in Go: From SQL to NoSQL,” DEV
            Community, Oct. 01, 2024.
            https://dev.to/tramposo/database-interactions-in-go-from-sql-to-nosql-225a
            <br />
            [3] I. Balbaert, The Way to Go: A Thorough Introduction to the Go
            Programming Language. 2012. [Online]. Available:
            https://openlibrary.org/books/OL25538095M/The_way_to_go
            <br />
            [4] GeeksforGeeks, “Interesting facts about Golang,” GeeksforGeeks,
            Sep. 08, 2020.
            https://www.geeksforgeeks.org/interesting-facts-about-golang/
            <br />
            [5] “Stack Overflow Developer Survey 2017,” Stack Overflow.
            https://survey.stackoverflow.co/2017#most-loved-dreaded-and-wanted
          </Typography>
        </Box>
      </CustomBox>
    </Container>
  );
}
