import React from "react";

const Video = ({ info }) => {
    console.log('info ',info)
  const { statistics, snippet } = info;
  const { thumbnails, publishedAt,channelTitle,title } = snippet;
  return (
    <div className="shadow-lg p-2 m-2 w-72">
      <img className='rounded-lg' alt="thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

export default Video;
