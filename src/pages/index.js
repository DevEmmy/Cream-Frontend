import Head from "next/head";
import { Inter } from "@next/font/google";
import MetaTags from "@/AtomicComponents/MetaTags";
import LandingPage from "@/Components/LandingPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <MetaTags title={"Cream"} />
      <LandingPage />
    </>
  );
}
