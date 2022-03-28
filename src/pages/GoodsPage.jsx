import React, { useState, useEffect } from "react";
import { Toolbar, Pagination, Box } from "@mui/material";
import Slider from "../components/Slider/Slider";
import GoodsList from "../components/GoodsList/GoodsList";
import FiltersDrawer from "../components/FiltersDrawer/FiltersDrawer";
import CategoriesDropdown from "../components/CategoriesDropdown/CategoriesDropdown";
import { categories } from "../data";
import SearchBar from "../components/SearchBar/SearchBar";
import axios from "axios";

export default function GoodsPage() {
  const [goods, setGoods] = useState([]);
  const [page, setPage] = useState(1);
  // const [activeFilters, setActiveFilters] = useState({
  //   isNew: false,
  //   isSale: false,
  //   isInStock: false,
  //   categories: [],
  //   rating: [],
  //   price: [],
  // });

  useEffect(() => {
    const getGoods = async () => {
      try {
        const res = await axios.get(
          `https://61f5558a62f1e300173c40f3.mockapi.io/products?l=10&p=${page}`
        );
        setGoods(res.data);
      } catch (err) {}
    };
    getGoods();
  }, [page]);

  const handleSetPage = (event, value) => {
    setGoods([]);
    setPage(value)
  }

  return (
    <>
      <main className="main">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <FiltersDrawer />
          <SearchBar />
          <CategoriesDropdown data={categories}></CategoriesDropdown>
        </Toolbar>
        <Slider></Slider>
        {(goods || goods.length > 0) && (
          <>
            <GoodsList goods={goods} />
            <Box item md={12} my={10} display="flex" justifyContent="center">
              <Pagination count={10} showFirstButton showLastButton onChange={handleSetPage} />
            </Box>
          </>
        )}
      </main>
    </>
  );
}
