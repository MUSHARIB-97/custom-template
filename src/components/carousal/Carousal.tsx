import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import IMAGES from "../../assets/images";
import "./styles.css";
import { slider } from "../../constants/LandingPage";

function CarouselSlider() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div className="position-relative h-90">
      <Carousel
        className="parentContainer"
        activeIndex={activeIndex}
        onSelect={handleSelect}
        indicators={false}
        // style={{height:"40vh"}}
      >
        {slider.map((item, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-flex w-100 carousalImg"
              src={item?.img}
              alt={`Slide ${index + 1}`}
              // style={{height:"50vh"}}
            />
            <div className="caption-slide-one">
              <p className="Heading">{item.heading}</p>
              <p className="disc">{item.title}</p>
              <div className="item-show-button">
                <p className="item-show-button-text">SHOW NOW</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="custom-indicators">
        {slider.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleSelect(index)}
            className={activeIndex === index ? "active" : ""}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default CarouselSlider;
