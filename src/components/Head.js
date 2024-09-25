import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SUGGESTION_URL } from "../utils/constants";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState("");

  const getSuggestions = async () => {
    console.log('search q ',searchQuery)
    // const data = await fetch(YOUTUBE_SUGGESTION_URL + searchQuery);
    const data = await fetch("https://cors-anywhere.herokuapp.com/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=sadhguru", {
      
      method: "GET",
      headers: {
           "Content-Type": "application/json"
      },
  });

  // console.log(response.json())
  console.log('data is ',data)
    const json = await data.json();
    console.log("json suggestions val ", json);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  },[searchQuery]);

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 mx-2">
        <img
          className="h-8 cursor-pointer"
          onClick={toggleMenuHandler}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjr9TZDivJqObVEMGVOX-0P8q5T71YrRUSzFe9iw_sCkvMp8T0yPklrAMvEhr9MU2S2Ng&usqp=CAU"
          alt="hamburger-menu"
        />
        <img
          className="h-8"
          alt="youtube-icon"
          src="data:image/png;base64,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"
        />
      </div>
       
      <div className="col-span-10">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-3/4 border border-gray-400 rounded-l-full p-2"
          type="text"
          value={searchQuery}
        />
        <button className="border border-gray-400 rounded-r-full py-2 bg-gray-200 px-4">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQukleU1059SFH-flP36qRWECpm9pQfQ7f50Q&s"
        />
      </div>
    </div> //outer
  );
};

export default Head;
