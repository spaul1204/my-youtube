import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Sadhguru",
    "Stree",
    "Arijit Singh",
    "Dua Lipa",
    "Alia Bhatt",
  ];
  return (
    <div className="flex">
      {buttonList.map((each, index) => (
        <div key={index}>
          <Button name={each} />
        </div>
      ))}
    </div>
  );
};

export default ButtonList;
