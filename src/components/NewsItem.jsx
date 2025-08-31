import React from "react";
import image from "../assets/global-news.png";

const NewsItem = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
}) => {
  return (
    <div
      className="bg-black rounded text-white mt-3 ml-3 inline-block px-2 py-2"
      style={{ width: "345px", height: "550px" }}
    >
      <div className="h-full border border-gray-400 bg-white rounded p-4 flex flex-col justify-between leading-normal">
        <div className="mb-4">
          <div className="text-gray-900 font-bold text-xl mb-2 truncate">
            {title ? title.slice(0, 50) : "No Title"}
          </div>
          <p className="text-gray-700 text-base line-clamp-3">
            {description || "No description available"}
          </p>
        </div>

  
        <div className="mb-4">
          <img
            style={{ height: "160px", width: "100%" }}
            className="object-cover rounded-md"
            src={urlToImage ? urlToImage : image}
            alt="News"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = image;
            }}
          />
        </div>

      
        <div className="flex flex-col justify-between h-[100px]">
          <div className="flex items-center justify-between text-sm">
            <div className="text-gray-900 font-semibold">
              {author || "Unknown Author"}
            </div>
            <div className="text-gray-600">
              {new Date(publishedAt).toLocaleDateString()}
            </div>
          </div>

          <a href={url} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-2 w-full">
              Read more
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
