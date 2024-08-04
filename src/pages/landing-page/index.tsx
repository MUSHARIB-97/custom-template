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
        <div className="pt-md-0 pt-sm-2 bg-danger">
          <CarouselSlider />
        </div>
        <div className="row mx-lg-5 mx-sm-2 mx-xs-1 mt-md-4 mt-sm-2 mt-xs-2">
          {Category.map((item, index) => (
            <div
              className="col-md-3 col-xs-12 col-sm-6 mb-2"
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
      </div>
    </HomeLayout>
  );
};

export default LandingPage;
