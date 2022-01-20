import React from "react";
import Slider from "../Slider/Slider";
import GoodsList from "../GoodsList/GoodsList";

export default function GoodsPage() {
  return (
    <main className="main">
      <Slider></Slider>
        <GoodsList/>
    </main>
  );
}
