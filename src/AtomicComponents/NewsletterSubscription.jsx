import { suscribeToNewsLetter } from "@/services/request";
import React, { useEffect, useState } from "react";

function NewsletterSubscription() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async () => {
    await suscribeToNewsLetter(email);
    setEmail("");
  };

  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-col-reverse sm:gap-2  mx-xPadding justify-center items-center gap-8  mb-12">
      <div className="flex flex-col  w-full my-8 sm:my-1">
        <div className="flex flex-col items-center sm:mb-4">
          <div className="font-bold text-[1.5em] sm:text[1em]">
            Cream Newsletter
          </div>
        </div>
        <div className="sm:text-[0.8em] text-gray-600">
          Let's keep you updated with what's trending in Cream
        </div>
        <div className="flex flex-row items-center">
          <div className="w-[50%] sm:w-[50%] mr-2 ">
            <input
              onChange={(e) => handleChange(e)}
              value={email}
              className="border-[1px] w-full py-2 bg-gray-200 rounded-md focus:border-primary1 focus:bg-inherit px-2"
              placeholder="E-mail"
              type="text"
            />
          </div>
          <div className="w-[30%] sm:w-[40%]">
            <button
              className="bg-primary1 rounded-md py-2 w-full font-semibold"
              onClick={handleSubmit}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <img
        className="w-[40vw] sm:w-[70vw] sm:h-[40vw] h-[20vw] my-8 sm:my-2 rounded-md"
        src="pic21.jpg"
      />
    </div>
  );
}

export default NewsletterSubscription;
