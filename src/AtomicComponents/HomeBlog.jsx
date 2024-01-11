import React, { useState, useEffect } from "react";
import { getArticles } from "@/services/request";
import Link from "next/link";
import { RiArrowRightFill, RiArrowRightUpFill } from "react-icons/ri";

function HomeBlog() {
  const [articles, setArticles] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 3;

  const fetchArticles = async () => {
    setIsLoading(true);
    const data = await getArticles();
    //console.log("title", data.data[0].title);
    //console.log(data);
    setArticles(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIdx = (currentPage - 1) * articlesPerPage;
  const endIdx = startIdx + articlesPerPage;

  const displayedArticles = articles?.data.slice(startIdx, endIdx) || [];
  const totalArticles = articles?.data.length || 0;
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = endIdx < totalArticles;

  return (
    <div className="mx-xPadding">
      <div className=" w-full text-center my-4 justify-center text-[1.5em] sm:[1em] font-bold">
        Latest Blogs
      </div>
      <div className="flex justify-end mt-4">
        {hasPreviousPage && (
          <button onClick={handlePrevPage} className="text-sm py-2 px-4 ">
            Previous
          </button>
        )}
        {hasNextPage && (
          <button onClick={handleNextPage} className="text-sm py-2 px-4 ">
            Next
          </button>
        )}
      </div>
      <div className="flex-row flex">
        {displayedArticles?.map((article) => (
          <div key={article._id} className="w-full gap-8 flex flex-row">
            <div className="flex flex-col w-[100%] ">
              <img
                src={article.cover}
                alt={article.title}
                className="rounded-md w-[20vw] h-[10vw] "
              />
              <div className="text-[1em] sm:text-[0.5em] font-[700] sm:font[300] w-[20vw] h-[10%]">
                {article.title}
              </div>

              <Link href={`/blog/${article._id}`}>
                <div className="flex gap-3 items-center justify-start sm:px-2 py-3 sm:text-[0.5em] mt-5  text-black rounded-md">
                  Learn more
                  <RiArrowRightUpFill />
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeBlog;
