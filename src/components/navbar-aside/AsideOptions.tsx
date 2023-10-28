import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import PaymentRoundedIcon from "@mui/icons-material/PaymentRounded";

export const ListAside = () => {
  return (
    <Box sx={{ width: 250 }}>
      <List>
        {["Home", "Panel", "Clientes", "Notificaciones", "Pagos"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <HouseRoundedIcon />
                  ) : index === 1 ? (
                    <LaptopRoundedIcon />
                  ) : index === 2 ? (
                    <AssignmentIndRoundedIcon />
                  ) : index === 3 ? (
                    <NotificationsRoundedIcon />
                  ) : (
                    <PaymentRoundedIcon />
                  )}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
      <Divider />
    </Box>
  );
};
