import React from "react";
import { Divider, Toolbar, Container } from "@mui/material";
import Slider from "../components/Slider/Slider";
import GoodsList from "../components/GoodsList/GoodsList";
import FiltersDrawer from "../components/FiltersDrawer/FiltersDrawer";
import CategoriesDropdown from "../components/CategoriesDropdown/CategoriesDropdown";
import { pages, categories } from "../data";
import SearchBar from "../components/SearchBar/SearchBar";

export default function GoodsPage() {
  return (
    <>
      <main className="main">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <FiltersDrawer />
          <SearchBar />
          <CategoriesDropdown data={categories}></CategoriesDropdown>
        </Toolbar>
        <Slider></Slider>
        <GoodsList />
      </main>
    </>
  );
}
