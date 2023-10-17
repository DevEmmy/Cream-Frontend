import MediaView from "@/Components/MediaView/MediavView";
import React from "react";
import { useEffect, useState } from "react";

const property = () => {
  const [id, setId] = useState(null);
  useEffect(() => {
    // Parse the current URL to extract the courseId
    const pathSegments = window.location.pathname.split("/");
    const courseIdIndex = pathSegments.indexOf("media") - 1;

    if (pathSegments.length > courseIdIndex) {
      const courseId = pathSegments[courseIdIndex];
      console.log(courseId);
      setId(courseId);
    }
  }, []);
  return (
    <div>
      <MediaView id={id} />
    </div>
  );
};

export default property;
