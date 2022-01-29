import React from "react";
import Slider from "../components/Slider/Slider";
import GoodsList from "../components/GoodsList/GoodsList";
import FiltersDrawer from "../components/FiltersDrawer/FiltersDrawer";

export default function GoodsPage() {
  return (
    <>
      <FiltersDrawer />

      <main className="main">
        <Slider></Slider>
        <GoodsList />
      </main>
    </>
  );
}
