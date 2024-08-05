import { useState } from "react";
import IMAGES from "../../assets/images";
import CarouselSlider from "../../components/carousal/Carousal";
import CustomCard from "../../components/custom-card/CustomCard";
import Navbar from "../../components/navbar/Navbar";
import {
  Category,
  categoryLinks,
  productCard,
} from "../../constants/LandingPage";
import HomeLayout from "../../layouts/main-layout";
import "./landingPageStyle.css";
import CustomButton from "../../components/custom-button/CustomButton";

const LandingPage: React.FC = () => {
  const [productShow, setProductShow] = useState<string>(
    "BEAUTY & PERSONAL CAR"
  );

  // Handler to update the selected category
  const handleCategoryClick = (category: string) => {
    setProductShow(category);
  };

  return (
    <HomeLayout
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <div>
        <div
          className="pt-md-0 pt-sm-2 bg-danger"
          style={{ marginBottom: "10px" }}
        >
          <CarouselSlider />
        </div>
        {/* <div className="row mx-lg-5 mx-sm-2 mx-xs-1 mt-md-4 mt-sm-2 mt-xs-2"> */}
        <div className="row mx-2 mx-md-5 my-3">
          {Category.map((item, index) => (
            <div
              className="col-md-3 col-xs-12 col-sm-6 mb-4"
              key={index}
              onClick={() => handleCategoryClick(item.title)}
            >
              <div className="categoryImg">
                <img src={item.img} alt="" className="img1" />
                <div className="categoryItemName py-0.5">
                  <p>{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* our products */}
        <div className="productContainer my-5">
          <div className="productDetail">
            <p className="heading">OUR PRODUCTS</p>
            <p className="para">browse top picks across all categories</p>
          </div>
          <div className="categoryBar my-5 px-5">
            {categoryLinks.map((item) => (
              <p
                key={item}
                onClick={() => handleCategoryClick(item)}
                className={productShow === item ? "selected" : ""}
              >
                {item}
              </p>
            ))}
          </div>
          <div className="my-5">
            {productShow === "BEAUTY & PERSONAL CAR" ? (
              <CustomCard option={productCard} />
            ) : (
              <p>Hello World</p>
            )}
          </div>
        </div>
        {/*  */}
        <div className="newArrivals ml-2">
          <p className="heading">All in One Place</p>
          <p className="para">Your one-stop shop for everything fabulous.</p>
          <div className="d-flex mt-4">
            <CustomButton title="Browse All" />
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default LandingPage;
