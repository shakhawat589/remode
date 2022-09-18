import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material"
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import { Mail, Notifications } from "@mui/icons-material";
import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
});

const SearchBox = styled("div")(({ theme }) => ({
  backgroundColor: "background.default",
  color: "text.primary",
  border: "1px solid #333",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const IconBox = styled(Box)(({theme})=>({
  display:"none",
  alignItems:"center",
  gap:"20px",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }  
}));
const UserBox = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
  },
}));

const SearcInput = styled(InputBase)({
  width: "100%",
});

export const Navbar = ({ mode }) => {
  const [open, setOpen] = useState(false);
  const elem = Boolean(open);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
  const handleClose = () => {
    setOpen(null);
  };
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          remode
        </Typography>
        <BubbleChartIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBox>
          <SearcInput placeholder="Search"></SearcInput>
        </SearchBox>
        <IconBox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
            id="user-button"
            aria-controls={elem ? "user-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={elem ? "true" : undefined}
            onClick={handleClick}
          />
        </IconBox>
        <UserBox>
          <Avatar
            sx={{ width: "30px", height: "30px" }}
            alt="Remy Sharp"
            src="https://media.istockphoto.com/photos/portrait-of-handsome-smiling-young-man-with-crossed-arms-picture-id1200677760?k=20&m=1200677760&s=612x612&w=0&h=JCqytPoHb6bQqU9bq6gsWT2EX1G5chlW5aNK81Kh4Lg="
            id="user-button"
            aria-controls={elem ? "user-positioned-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={elem ? "true" : undefined}
            onClick={handleClick}
          />
        </UserBox>
      </StyledToolbar>

      <Menu
        id="user-positioned-menu"
        aria-labelledby="user-button"
        anchorEl={open}
        open={elem}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};
