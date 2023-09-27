import Category from "@/AtomicComponents/Category";
import Link from "next/link";
import React from "react";

const Categories = () => {
  const categories = [
    {
      title: "Real Estate",
      link: "/real-estate",
      available: true,
    },
    {
      title: "Automobiles",
      link: "/automobiles",
      available: true,
    },
    {
      title: "Rentals",
      link: "/resources",
      available: false,
    },
    {
      title: "Resources",
      link: "/",
      available: false,
    },
  ];
  return (
    <div className="mx-xPadding my-28 sm:my-20">
      <h2 className="text-[1.2em] font-[700]">Categories</h2>

      <div className="grid grid-cols-4 sm:grid-cols-1 my-2 gap-10">
        {categories.map((cat, i) => {
          return (
            <div>
              {cat.available ? (
                <Link href={cat.link}>
                  <Category {...cat} />
                </Link>
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
