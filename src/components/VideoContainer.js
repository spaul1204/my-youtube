import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import Video from "./Video";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    setVideos(json.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="flex flex-wrap">
      {videos?.map((each) => (
        <Link to={`watch?v=${each.id}`}>
          <Video key={each.id} info={each} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
