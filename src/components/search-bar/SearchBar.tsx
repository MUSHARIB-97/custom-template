import React, { useState } from "react";
import "./styles.css";
import IMAGES from "../../assets/images";

const SearchBar: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleSearch = () => {
    console.log(inputValue);
    setInputValue("");
  };

  return (
    <div className="mainContainer">
      <input
        placeholder="Search"
        className="inputField"
        value={inputValue}
        onChange={handleInputChange}
        name="search"
      />
      <div className="searchImgContainer" onClick={handleSearch}>
        <img src={IMAGES.search} alt="" className="searchImg" />
      </div>
    </div>
  );
};

export default SearchBar;
