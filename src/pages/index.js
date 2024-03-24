import Head from "next/head";
import { Inter } from "@next/font/google";
import MetaTags from "@/AtomicComponents/MetaTags";
import LandingPage from "@/Components/LandingPage";
import { useEffect } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
const visit = async ()=>{
  await axios.get("https://king-david-elites.onrender.com/visit")
  .then(resp => console.log(resp))
  .catch(err => console.log(err))
}
  
  useEffect(()=>{
    visit()
  }, [])
  
  return (
    <>
      <MetaTags title={"Cream"} />
      <LandingPage />
    </>
  );
}
