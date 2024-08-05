import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Fotter from "../../components/fotter/Fotter";
import IMAGES from "../../assets/images";

interface body {
  children: any;
  style?: any;
}

const HomeLayout: React.FC<body> = ({ children, style }: body) => {
  return (
    <div style={style}>
      <div style={{ position: "sticky", top: 0 }}>
        <Navbar />
      </div>
      <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
        {children}
      </div>
      <div
        className="mt-4 px-2 py-5"
        style={{ backgroundColor: "#fafafa" }}
      >
        <Fotter />
      </div>
    </div>
  );
};

export default HomeLayout;
