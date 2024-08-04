import React, { useState } from "react";
import "./navSyles.css";
import IMAGES from "../../assets/images";
import SearchBar from "../search-bar/SearchBar";
import DropDown from "../drop-down/DropDown";

const Navbar: React.FC = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);
  const [openCategoryItem, setOpenCategoryItem] = useState<boolean>(false);
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [muneOpen, setMenuOpen] = useState<boolean>(false);

  const openNavbar = () => {
    setOpenNav((prev) => !prev);
    setShowSearchBar(false);
  };

  const handleCategoryItem = () => {
    setOpenCategoryItem((prev) => !prev);
  };

  const showSearchOption = () => {
    setShowSearchBar((prev) => !prev);
  };

  return (
    <div className="parentContainer px-4">
      <div className="main">
        <div className="logoContainer">
          <img src={IMAGES.logo} className="logo" />
        </div>
        <div className="tagsContainer">
          <p className="tagsText">Home</p>
          <p className="tagsText">
            <DropDown open={muneOpen} setOpen={setMenuOpen} />
          </p>
          {/* <p
            className="tagsText"
            style={{
              display: "flex",
              alignItems: "center",
              // padding: "0px",
              // margin: "0px",
            }}
          >
            Categories
            <span className="arrowContainer">
              <img src={IMAGES.downArrow} alt="" className="downArrow" />
            </span>
          </p> */}
          <p className="tagsText">Shop</p>
          <p className="tagsText">Contact Us</p>
          <p className="tagsText">About Us</p>
        </div>
        <div className="rightContainer">
          <div className="cartContainer">
            <div className="addCartContainer">
              <p className="addCartText">1</p>
            </div>
            <img src={IMAGES.cart} className="cart" />
          </div>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Search by categories"
              className="inputField"
            />
            <div className="searchContainer">
              <img src={IMAGES.search} className="search" />
            </div>
          </div>
        </div>
      </div>

      <div className="sideNavScreenMain">
        {/* mobileScreen header */}
        <div
          className={`mobileScreenContainer`}
          style={{
            opacity: openNav ? 0.3 : 1,
            // display: showSearchBar ? "none" : "flex",
          }}
        >
          <div className="mobileFirstContainer">
            <div className="hamburgerContainer" onClick={openNavbar}>
              <img src={IMAGES.hamburger} alt="" className="hamburger" />
            </div>
            <div className="SearchBtnContainer" onClick={showSearchOption}>
              <img src={IMAGES.search} className="SearchBtn" />
            </div>
          </div>
          <div className="mobileLogoContainer">
            <img src={IMAGES.logo} className="mobileLogo" />
          </div>
          <div className="mobileCartContainer">
            <div className="mobileAddCartContainer">
              <p className="mobileAddCartText">12</p>
            </div>
            <img src={IMAGES.cart} alt="" className="mobileCart" />
          </div>
        </div>
        {/* sideNavBar */}
        <div className={`sideNav ${openNav ? "sideNavOpen" : ""}`}>
          <div
            style={{
              // backgroundColor: "green",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <div className="sideNavMain">
              <div className="sideNavLogoContainer">
                <img src={IMAGES.logo} alt="" className="sideNavLogo" />
              </div>
              <div className="sideNavCloseImgContainer" onClick={openNavbar}>
                <img src={IMAGES.close} alt="" className="sideNavCloseImg" />
              </div>
            </div>
            <div className="pagesList">
              <ul>
                <li>HOME</li>
                <div className="categoryListMain">
                  <li className="Category">
                    CATEGORIES
                    <span
                      onClick={handleCategoryItem}
                      className="addImgContainer"
                    >
                      {openCategoryItem ? (
                        <img src={IMAGES.minus} className="addImg" />
                      ) : (
                        <img src={IMAGES.add} className="addImg" />
                      )}
                    </span>
                  </li>
                  <div
                    className={`categoryItems ${
                      openCategoryItem ? "open" : ""
                    }`}
                  >
                    <ul>
                      <li>PETS SUPPLIES</li>
                      <li>HEALTH & HOUSEHOLD</li>
                      <li>HOME DECOR</li>
                      <li>KITCHEN & DINING</li>
                      <li>KITCHEN & DINING</li>
                      <li>KITCHEN & DINING</li>
                    </ul>
                  </div>
                </div>
                <li>SHOP</li>
                <li>CONTACT US</li>
                <li>ABOUT US</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 style={{ backgroundColor: "red", margin: "0%", padding: "0%" }}>
              qwer
            </h1>
          </div>
        </div>
      </div>

      {/* Searchbar div */}
      <div
        style={{
          display: showSearchBar ? "flex" : "none",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <div
          style={{ width: "20px", height: "20px" }}
          onClick={showSearchOption}
        >
          <img
            src={IMAGES.close}
            alt=""
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <SearchBar />
      </div>
      {/* Searchbar div */}
    </div>
  );
};

export default Navbar;
