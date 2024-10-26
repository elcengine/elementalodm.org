// * Components
import CustomButton from "./CustomButton";

// * MUI Components
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Box, Typography, styled } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TaskIcon from "@mui/icons-material/Task";
import MergeTypeIcon from "@mui/icons-material/MergeType";
import ElectricalServicesIcon from "@mui/icons-material/ElectricalServices";

// * MUI Styled Components
const CustomBox = styled(Box)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down("md")]: {
    width: "85%",
  },
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  width: "70%",
  marginTop: 32,
  marginBottom: 32,
}));

const Card = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginLeft: 8,
  marginRight: 8,
}));

export default function ResearchGap() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16,
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#000339",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#000339", my: 3 }}
      >
        Research Gap
      </Typography>

      <CardContainer>
        <Card>
          <EngineeringIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Cognitive Complexity
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "20vw",
              textAlign: "center",
            }}
          >
            The MongoDB Go driver requires low-level coding, leading to
            repetitive and error-prone code for basic tasks like pagination and
            CRUD operations, which increases cognitive complexity.
          </Box>
        </Card>

        <Card>
          <ManageSearchIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Query Building
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "20vw",
              textAlign: "center",
            }}
          >
            The absence of efficient mechanisms for building complex queries and
            managing cross-database transactions hinders performance and
            consistency across multiple databases​.
          </Box>
        </Card>
      </CardContainer>

      <CardContainer>
        <Card>
          <TaskIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Entity Validation
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "20vw",
              textAlign: "center",
            }}
          >
            Existing Go ODMs do not offer built-in schema validation, forcing
            developers to write custom validation logic or rely on external
            libraries that do not integrate well with MongoDB.
          </Box>
        </Card>

        <Card>
          <MergeTypeIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              textAlign: "center",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Aggregation and Transactions Across Clusters
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "20vw",
              textAlign: "center",
            }}
          >
            Existing solutions fail to handle data aggregation and transactions
            across multiple databases or clusters, which is crucial for
            distributed systems.
          </Box>
        </Card>

        <Card>
          <ElectricalServicesIcon sx={{ fontSize: 80, color: "#000339" }} />
          <Typography
            variant="body2"
            sx={{
              fontWeight: "500",
              fontSize: "20px",
              color: "#3B3c45",
              my: 1,
            }}
          >
            Plugin Architecture
          </Typography>
          <Box
            sx={{
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "20vw",
              textAlign: "center",
            }}
          >
            Current ODMs lack a flexible plugin system to efficiently extend
            functionality, making it harder to customize or dynamically load
            features
          </Box>
        </Card>
      </CardContainer>
    </Box>
  );
}
