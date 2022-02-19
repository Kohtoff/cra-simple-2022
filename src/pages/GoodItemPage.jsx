import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'

export default function GoodItemPage() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [data, setData] = useState({})

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://61f5558a62f1e300173c40f3.mockapi.io/products/${id}`
        );
        setData(res.data)
      } catch(err) {console.log("!ERROR", err)}
    };
    getProduct()
  }, [id]);
  console.log(data);
  return <div></div>;
}
