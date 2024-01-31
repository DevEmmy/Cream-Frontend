import "@/styles/globals.css";
import axios from "axios";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
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
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
