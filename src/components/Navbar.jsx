import { useState } from "react";

// * Components
import CustomButton from "./CustomButton";

// * Images
import logoImg from "../media/logo.png";

// * MUI Components
import {
  Box,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";

// * MUI Icons
import MenuIcon from "@mui/icons-material/Menu";
import {
  Contacts,
  FeaturedPlayList,
  Home,
  ListAlt,
  MiscellaneousServices,
  Transform,
} from "@mui/icons-material";

// * Styled Components
const NavbarContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(5),
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(3),
  },
}));

const NavbarLogo = styled("img")(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLinkBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  columnGap: 25,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const NavbarLink = styled(Typography)(({ theme }) => ({
  color: "#4F5361",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "transform 0.08s ease",
  "&:hover": {
    transform: "scale(1.08)",
  },
}));

const MenuBox = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

// * Functions
const ListComponent = () => (
  <List
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "space-between",
      justifyContent: "center",
      width: 200,
    }}
  >
    {["Home", "Features", "Services", "Products", "About"].map(
      (text, index) => (
        <ListItem key={text} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              {index === 0 && <Home />}
              {index === 1 && <FeaturedPlayList />}
              {index === 2 && <MiscellaneousServices />}
              {index === 3 && <ListAlt />}
              {index === 4 && <Contacts />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        </ListItem>
      )
    )}
  </List>
);

export default function Navbar({ allRefs }) {
  const [showMenu, setShowMenu] = useState(false);

  const scroll = (name) => {
    if (!allRefs) return;
    const ref = allRefs[name];
    if (!ref) return;
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavbarContainer>
      <Box>
        <MenuBox onClick={(e) => setShowMenu(true)}>
          <MenuIcon />
        </MenuBox>
        <Drawer
          anchor="left"
          open={showMenu}
          onClose={(e) => setShowMenu(false)}
        >
          <ListComponent />
        </Drawer>
        <NavbarLogo src={logoImg} alt="logo" />
      </Box>

      <NavbarLinkBox>
        <NavbarLink onClick={() => scroll("homeRef")}>Home</NavbarLink>
        <NavbarLink onClick={() => scroll("domainRef")}>Domain</NavbarLink>
        <NavbarLink>Milestones</NavbarLink>
        <NavbarLink>Documents</NavbarLink>
        <NavbarLink>Slides</NavbarLink>
        <NavbarLink>About Us</NavbarLink>
        <NavbarLink>Contact Us</NavbarLink>
      </NavbarLinkBox>
    </NavbarContainer>
  );
}
