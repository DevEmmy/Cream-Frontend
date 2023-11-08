import { useQuery } from "react-query";
import { useEffect } from "react";
import services from "../../ioc/services";

export const useGetUserDetails = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user;
};
