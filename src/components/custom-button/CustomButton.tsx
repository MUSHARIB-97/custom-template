import React from "react";
import "./btnStyles.css";

interface MyProps {
  title: string;
  style?: any;
}

const CustomButton: React.FC<MyProps> = ({ title, style }: MyProps) => {
  return (
    <div className="btnContainer px-4 py-1" style={style}>
      <p>{title}</p>
    </div>
  );
};

export default CustomButton;
