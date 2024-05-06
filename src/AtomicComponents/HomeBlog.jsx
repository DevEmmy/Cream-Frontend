import React, { useState, useEffect, useRef } from "react";
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
    // const data = await getArticles();
    //console.log("title", data.data[0].title);
    //console.log(data);
    setArticles(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const containerRef = useRef(null);

  const handleNextPage = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft + container.offsetWidth,
        behavior: "smooth",
      });
    }
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollTo({
        left: container.scrollLeft - container.offsetWidth,
        behavior: "smooth",
      });
    }
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div className="mx-xPadding">
      <div className=" w-full text-center my-4 justify-center text-[1.5em] sm:[1em] font-bold">
        Latest Blogs
      </div>
      <div className="w-full flex flex-row-reverse gap-2 sm:hidden mb-2">
        <button onClick={handleNextPage} className="font-semibold">
          Next
        </button>
        <button onClick={handlePrevPage} className="font-semibold">
          Prev
        </button>
      </div>
      <ul
        className="flex overflow-x-auto w-[100%] no-scrollbar gap-4"
        ref={containerRef}
      >
        {articles?.data.map((article) => (
          <li key={article._id} className="w-full  flex flex-row">
            <div className="flex flex-col w-[42vw] sm:w-[80vw]">
              <img
                src={article.cover}
                alt={article.title}
                className="rounded-md  object-cover w-[100%] h-[20vw] sm:h-[40vw] "
              />

              <div className="text-[1em] sm:text-[0.8em] font-[700] sm:font[300] w-[42vw] sm:w-[80vw] h-[25%] overflow-hidden">
                {article.title}
              </div>

              <Link
                href={`/blog/${article._id}`}
                className=" w-[20%] sm:w-[30%] gap-2 flex-row flex items-center mt-2 hover:bg-inherit focus:bg-inherit active:bg-inherit"
              >
                <button className="sm:text-[0.8em]">Learn more</button>
                <RiArrowRightUpFill />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomeBlog;
