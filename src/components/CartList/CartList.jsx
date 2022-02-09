import React, { useState, useEffect } from "react";
import { List } from "@mui/material";
import GoodCartCard from "../GoodCartCard/GoodCartCard";

export default function CartList(prop) {
  let { data, setTotalSum } = prop;
  console.log(data)

  const calculatedSum = () => data.reduce(
    (prev, curr) => (prev += curr.price * curr.amount),
    0
  );

  useEffect(() => {
    console.log("useEffect");

    setTotalSum(calculatedSum());
  }, [data]);


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
