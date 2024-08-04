import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import "./dropDown.css";

interface MyProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const DropDown: React.FC<MyProps> = ({ open, setOpen }: MyProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  //   const [open, setOpen] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLParagraphElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <p
        style={{ margin: "0%", padding: "0%", cursor: "pointer" }}
        onClick={handleClick}
      >
        Category
      </p>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        sx={{
          backgroundColor: "rgba(225,225,225,.7)",
          "& .MuiPaper-root": {
            // backgroundColor: "green",
            color: "#000",
            width: "15vw",
            mt: 1,
          },
        }}
      >
        <MenuItem
          sx={{
            "&:hover": { backgroundColor: "#0693e3" },
            "&.Mui-focusVisible": { backgroundColor: "#0693e3" },
          }}
          className="custom-menu-item"
        >
          Profile
        </MenuItem>
        <MenuItem sx={{ "&:hover": { backgroundColor: "lightgreen" } }}>
          My account
        </MenuItem>
        <MenuItem sx={{ "&:hover": { backgroundColor: "lightgreen" } }}>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
};

export default DropDown;
