import React from "react";
import "./btnStyles.css";

interface MyProps {
  title: string;
  style?: any;
}

const CustomButton: React.FC<MyProps> = ({ title, style }: MyProps) => {
  return (
    <div className="btnContainer" style={style}>
      <p>{title}</p>
    </div>
  );
};

export default CustomButton;
