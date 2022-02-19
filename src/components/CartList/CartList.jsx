import React from "react";
import { List } from "@mui/material";
import GoodCartCard from "../GoodCartCard/GoodCartCard";

export default function CartList(prop) {
  let {
    data,
  } = prop;


  return (
    <List sx={{ height: "85%", overflow: "auto" }}>
      {data.map((item) => (
        <GoodCartCard
          key={item.id}
          data={item}
        />
      ))}
    </List>
  );
}
