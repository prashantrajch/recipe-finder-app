import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

export default function Li({items}) {
  return (
    <List disablePadding>
      <ListItem disablePadding>
        <ListItemButton >
          <ListItemText primary={`${items.quantity != null ? items.quantity : '' } ${items.unit} ${items.description}`} />
        </ListItemButton>
      </ListItem>
    </List>
  );
}
