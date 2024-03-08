import React, { useState, useEffect, useRef } from "react";
import { getArticles } from "@/services/request";
import Link from "next/link";
import { RiArrowRightFill, RiArrowRightUpFill } from "react-icons/ri";

function BuyFromCream() {
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

  const data = [
    { id: 1, title: "Properties in Lagos", img: "i1.jpg" },
    { id: 2, title: "Properties in Lagos", img: "i2.jpg" },
    { id: 3, title: "Properties in Lagos", img: "i3.jpg" },
  ];

  return (
    <div className="mx-xPadding">
      <div className=" w-full text-center my-4 justify-center text-[1.3em] sm:[1em] font-bold">
        Buy from CREAM
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
        className="flex overflow-x-auto w-[100%] no-scrollbar gap-0 sm:space-x-4"
        ref={containerRef}
      >
        {data.map((item) => (
          <li key={item._id} className="relative inline-block w-full flex-row">
            <Link
              href={`/cream-properties/${item.id}`}
              className="flex flex-col w-[25vw] sm:w-[50vw] "
            >
              <img
                src={item.img}
                //alt={item.title}
                className="rounded-md  object-cover w-[100%] h-[60vh] sm:h-[60vw] "
              />

              <div className="text-[1em] sm:text-[0.8em] font-[700] sm:font[300] absolute bottom-4 left-4 text-white p-2 ">
                {item.title}
              </div>

              {/* <div className="  py-3  mt-5 bg-blue-500  text-black rounded-md"> */}
              {/* <Link
                href={`/blog/${article._id}`}
                className="bg-red-500 flex flex-row items-center sm:text-[0.5em] sm:px-2 mt-4 "
              >
                <button>Learn more</button>
                <RiArrowRightUpFill />
              </Link> */}
              {/* </div> */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuyFromCream;
