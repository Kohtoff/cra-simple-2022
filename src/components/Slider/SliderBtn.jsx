import React from 'react'
import './Slider.css'
import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";


export default function SliderBtn(props) {
    const {direction, moveSlide} = props
    return (
        <button className={'slider-btn slider-btn--' + (direction === 'next' ? 'next' : 'prev')}
        onClick={moveSlide}
        >
            {direction === 'next' ? <ArrowForwardIos /> : <ArrowBackIosNew/>}
        </button>
    )
}
