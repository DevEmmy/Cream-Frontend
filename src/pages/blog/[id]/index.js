import MetaTags from "@/AtomicComponents/MetaTags";
import EachBlog from "@/Components/EachBlog";
import { getArticleById } from "@/services/request";

import React from "react";

// export async function getServerSideProps(context) {
//   const { id } = context.query;
//   console.log("id", id);
//   const articleResponse = await getArticleById(id);
//   const article = articleResponse?.data;

//   console.log("article", article);

//   if (!article) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { article },
//   };
// }

const index = () => {
  return (
    <>
      <MetaTags />
      <EachBlog />
    </>
  );
};

export default index;
