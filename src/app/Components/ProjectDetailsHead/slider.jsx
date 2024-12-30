"use client";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent",
        border: "none",
        color: "white", // Customize the arrow color
        fontSize: "30px",  }}
      onClick={onClick}
    ><FaArrowCircleRight className="hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-125" /></div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent",
        border: "none",
        color: "white", // Customize the arrow color
        fontSize: "30px",}}
      onClick={onClick}
    ><FaArrowCircleLeft className="hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-125" /></div>
  );
}

const SlickSlider = ({ images }) => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 767;

  const [loaded, setLoaded] = useState(
    images.map(() => false), // Initialize loading state for each image
  );

  const handleImageLoad = (index) => {
    setLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    variableWidth: isMobile ? false : true,
    arrows: true, // Enable the arrows
    prevArrow:  <SamplePrevArrow />,
    nextArrow:  <SampleNextArrow/> ,
  };





  return (
    <div className="slick-slider-container h-[470px] overflow-hidden">
      <Slider {...settings}>
        {images.map((ele, index) => (
          <div className="max-h-[460px] px-5" key={index}>
            {!loaded[index] && (
              <div className="w-full h-[460px] bg-gray-300 animate-pulse"></div>
            )}
            <Image
              src={ele}
              alt={`Slide ${index}`}
              width={500}
              height={500}
              className={`w-full h-[460px] object-cover ${
                !loaded[index] ? "hidden" : ""
              }`}
              onLoadingComplete={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
