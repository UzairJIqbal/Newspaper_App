"use client";

import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

const Newsboard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      const proxy = "https://api.allorigins.win/raw?url=";
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

      try {
        const response = await fetch(proxy + encodeURIComponent(url));
        if (!response.ok) throw new Error("Failed to fetch news");
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) return <p className="text-white text-center mt-6">Loading news...</p>;
  if (error) return <p className="text-red-500 text-center mt-6">Error: {error}</p>;

  return (
    <div>
      <h2 className="text-center text-white text-[18px] mt-6">
        Latest
        <span className="bg-red-600 text-white ml-1 rounded text-[15px]">News</span>
      </h2>

      <div className="mt-4">
        {articles.length === 0 && <p className="text-white text-center">No news available.</p>}
        {articles.map((news, index) => (
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
