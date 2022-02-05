import React, { useState, useEffect } from "react";
import { List } from "@mui/material";
import GoodCartCard from "../GoodCartCard/GoodCartCard";

export default function CartList(prop) {
  let { data, setTotalSum } = prop;

  const calculatedSum = () => data.reduce(
    (prev, curr) => (prev += curr.price * curr.amount),
    0
  );

  useEffect(() => {
    console.log("useEffect");

    setTotalSum(calculatedSum());
  }, [data]);

  const handleChangeAmount = (id, newValue) => {
    const targetIndex = data.findIndex((item) => item.id === id);
    data[targetIndex].amount = newValue
    setTotalSum(calculatedSum())
  };

  const handleRemove = (id) => (data = data.filter((item) => item.id === id));
  return (
    <List sx={{ height: "85%", overflow: "auto" }}>
      {data.map((item) => (
        <GoodCartCard
          key={item.id}
          handleChangeAmount={handleChangeAmount}
          handleRemove={handleRemove}
          data={item}
        />
      ))}
    </List>
  );
}
