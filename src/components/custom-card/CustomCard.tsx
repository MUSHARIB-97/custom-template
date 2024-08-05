import React, { useState } from "react";
import "./customCard.css";
import IMAGES from "../../assets/images";
import CustomButton from "../custom-button/CustomButton";

interface MyProps {
  option: any[];
}

const CustomCard: React.FC<MyProps> = ({ option }) => {
  const [openSideDetail, setOpenSideDetail] = useState<boolean>(false);
  const [counter, setCounter] = useState<number>(0);

  const handleSideDetail = () => {
    setOpenSideDetail((prev) => !prev);
  };

  return (
    <div className="row my-4 mx-md-5 mx-1">
      {option.map((item) => (
        <div className="col-md-3 col-sm-6 col-xs-6 mb-4" key={item.id}>
          <div className="cardContainer">
            <div className="cardImgContainer">
              <img src={item.imgVisible} alt="" className="cardImg" />
              <img
                src={item.hoverImg}
                alt=""
                className="cardImg cardImgHover"
              />
            </div>
            <div className="cardDetails">
              <p>{item.title}</p>
              <p>{item.disc}</p>
            </div>
            <div className="sideOption">
              <div className="visibilityContainer" onClick={handleSideDetail}>
                <img src={IMAGES.view} alt="" className="visibilityImg" />
              </div>
              <div className="favoriteContainer">
                <img src={IMAGES.star} alt="" className="favoriteImg" />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div
        className={`sidePrductContainer ${
          openSideDetail ? "sidePrductContainerOpen" : ""
        }`}
      >
        <div className="sideProductDetail">
          <div className="closeContainer" onClick={handleSideDetail}>
            <img src={IMAGES.close} alt="" />
          </div>
          <div className="productImgContainer">
            <img src={IMAGES.makeUp} alt="" className="productImg" />
          </div>
          <div className="my-4 mx-2">
            <div className="heading">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                exercitationem repudiandae dolor nam laboriosam quas aliquam
                inventore fugit illum dolorem, unde iusto ad voluptates voluptas
                atque officiis delectus beatae repellendus.
              </p>
            </div>
            <div className="priceContainer my-2">
              <p className="price">$70/- item</p>
            </div>
            <div className="amount d-flex gap-4">
              <div className="counter d-flex gap-2">
                <p onClick={() => setCounter(counter - 1)}>-</p>
                <p>{counter}</p>
                <p onClick={() => setCounter(counter + 1)}>+</p>
              </div>
              <div className="d-flex align-center gap-4">
                <CustomButton title="Add to cart" />
                <CustomButton
                  title=" Checkout"
                  style={{ backgroundColor: "red" }}
                />
              </div>
            </div>
            <div>
              <p>4 total Items </p>
              <p>75$ Total Amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
