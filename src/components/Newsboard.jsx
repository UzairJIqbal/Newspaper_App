import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({ category }) => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticle(data.articles))
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <div>
      <h2 className="text-center text-white text-[18px] mt-6">
        Latest
        <span className="bg-red-600 text-white ml-1 rounded text-[15px]">
          News
        </span>
      </h2>
      <div>
        {article?.map((news, index) => (
          <NewsItem
            key={index}
            author={news.author}
            title={news.title}
            description={news.description}
            url={news.url}
            urlToImage={news.urlToImage}
            publishedAt={news.publishedAt}
          />
        ))}
      </div>
    </div>
  );
};

export default Newsboard;
