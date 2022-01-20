import { Typography } from "@mui/material";
import React, { useState } from "react";
import "./Slider.css";
import SliderBtn from "./SliderBtn";
import { slides as data }  from "../../data";



export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (data.length !== slideIndex) {
      setSlideIndex(slideIndex + 1);
    } else {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(data.length);
    }
  };

  return (
    <div className="container-slider">
      {data.map((slide, index) => (
        <div
          className={
            "slide " + (index + 1 === slideIndex ? "active-slide" : "")
          }
          key={slide.id}
        >
          <img src={slide.img} alt="slider img" />
          <div className="slide-info">
            <Typography variant='h4' className="slide__title">{slide.title}</Typography>
            <Typography variant='p' component='p' className="slide__desc">{slide.desc}</Typography>
            <button className="slide__view-more-btn">View more</button>
          </div>
        </div>
      ))}
      <SliderBtn moveSlide={prevSlide} direction={"prev"} />
      <SliderBtn moveSlide={nextSlide} direction={"next"} />
    </div>
  );
}
