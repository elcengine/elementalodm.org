// * MUI Components
import { Box, Container, Typography, styled } from "@mui/material";
import LooksOneIcon from "@mui/icons-material/LooksOne";
import LooksTwoIcon from "@mui/icons-material/LooksTwo";
import Looks3Icon from "@mui/icons-material/Looks3";
import Looks4Icon from "@mui/icons-material/Looks4";

// * Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(10),
  alignItems: "center",
  marginTop: 32,
}));

const CardHolder = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: 32,
}));

const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 32,
  alignItems: "center",
  border: "1px solid #E0E0E0",
  borderRadius: "10px",
  padding: 32,
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.3)",
  },
}));

const LargeText = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  color: "#000339",
  fontWeight: "600",
}));

const SmallText = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  color: "#5A6473",
  lineHeight: "27px",
}));

const Divider = styled("div")(({ theme }) => ({
  width: "7%",
  height: "5px",
  backgroundColor: "#000339",
  [theme.breakpoints.down("md")]: {
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

export default function ResearchObjectives() {
  return (
    <Container sx={{ marginBottom: 16 }}>
      <Divider />
      <Typography
        sx={{
          fontSize: "35px",
          color: "#000339",
          fontWeight: "700",
          my: 3,
        }}
      >
        Research Objectives
      </Typography>
      <CustomBox>
        <CardHolder>
          <LooksOneIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Efficient Query Builder for Go and Document Databases
            </LargeText>
            <SmallText>
              The goal is to design a flexible and performant query builder in
              Go for document databases, enabling efficient data operations and
              intuitive query construction. This builder will support defining
              models and embedding query logic as instance methods, making it
              easy to build and execute complex queries within the model itself.
              Pagination features will allow efficient handling of large
              datasets, while soft deletes and cascading updates provide
              flexible data management options. Additionally, it will support
              population methods for joining related documents, improving query
              efficiency and readability.
            </SmallText>
          </Card>
        </CardHolder>

        <CardHolder>
          <LooksTwoIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Efficient Plugin Architecture and Data Pipeline for Plugins
            </LargeText>
            <SmallText>
              This objective focuses on developing a modular plugin architecture
              that can efficiently handle and extend system functionality. By
              analyzing plugin-based architecture versus traditional monolithic
              designs, the aim is to determine the most effective approach,
              balancing modularity with performance. Safe hook points will be
              established to allow plugins to inject custom logic without
              compromising data consistency, while runtime context sharing will
              be carefully managed to maintain data integrity. An auditing
              mechanism will log plugin-driven modifications, ensuring
              traceability and accountability.
            </SmallText>
          </Card>
        </CardHolder>

        <CardHolder>
          <Looks3Icon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>
              Identify and build a mechanism for Request validation directly
              against a database
            </LargeText>
            <SmallText>
              Encapsulating the MongoDB driver within a robust, extensible
              pattern, this objective ensures that data handling is reliable and
              standardized across the application. The encapsulation will
              include schema validation to enforce data consistency and
              early-stage database validation to intercept errors before they
              reach the controller level. Additionally, migration support will
              streamline schema updates, and data seeding capabilities will
              facilitate easy setup and testing by preloading databases with
              required data. This approach creates a solid foundation for
              managing and evolving database structure and content.
            </SmallText>
          </Card>
        </CardHolder>

        <CardHolder>
          <Looks4Icon sx={{ fontSize: 80, color: "#000339" }} />
          <Card>
            <LargeText>Data Aggregation Across Clusters</LargeText>
            <SmallText>
              This objective is to design a highly efficient system for
              aggregating data from multiple clusters, allowing concurrent
              access and transactional integrity across different databases. The
              solution will ensure data consistency and manage duplicates while
              writing to multiple sources, providing safe, concurrent read/write
              operations without risk of data loss. By analyzing existing
              concurrency algorithms and optimizing for our specific needs, the
              system will handle high-traffic operations smoothly, enabling
              seamless multi-cluster data aggregation and management.
            </SmallText>
          </Card>
        </CardHolder>
      </CustomBox>
    </Container>
  );
}
