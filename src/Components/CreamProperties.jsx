import { useRouter } from "next/router";
import React from "react";

function CreamProperties() {
  const router = useRouter();
  const data = router.query;
  const id = data.id;
  console.log("data", data.id);
  return <div>CreamProperties with id {id}</div>;
}

export default CreamProperties;
