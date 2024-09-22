import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainComponent = () => {
  return (
    <div className="flex-col">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainComponent;
