import Category from "@/AtomicComponents/Category";
import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    {
      title: "Real Estate",
      link: "/real-estate",
      available: true,
      image: "pic14.jpg",
    },
    {
      title: "Automobiles",
      link: "/automobile",
      available: true,
      image: "pic7.jpg",
    },
    {
      title: "Rentals",
      link: "/resources",
      available: false,
      image: "pic16.jpg",
    },
    {
      title: "Resources",
      link: "/",
      available: false,
      image: "pic9.jpg",
    },
  ];
  return (
    <div className="mx-xPadding my-28 sm:my-20 scroll-mt-44" id="category">
      <h2 className="text-[1.2em] font-[700]">Categories</h2>

      <div
        className="grid grid-cols-4 sm:grid-cols-1 my-2 gap-10"
        id="category"
      >
        {categories.map((cat, i) => {
          return (
            <div>
              {cat.available ? (
                <a href={cat.link}>
                  <Category {...cat} />
                </a>
              ) : (
                <Category {...cat} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
