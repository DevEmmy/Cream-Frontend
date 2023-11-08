import { useQuery } from "react-query";
import { useEffect } from "react";
import services from "../../ioc/services";

export const useGetUserDetails = () => {
    let user = ""
  useEffect(() => {
     user = JSON.parse(localStorage.getItem("user"));
  },[]);
  return user;
};
