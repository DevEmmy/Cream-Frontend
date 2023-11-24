import { register } from "@/services/request";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Register = () => {
  const router = useRouter();

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await register(details, router);
  };
  return (
    <div
      className="bg-slate-700 w-full h-[100vh] flex flex-col items-center justify-center"
      style={{
        backgroundImage: `url("/pic2.jpg")`,

        objectFit: "cover",
        backgroundSize: "cover",
      }}
    >
      <div className=" bg-white w-[35%] h-[auto] sm:w-[90%] p-10 sm:p-5 text-center rounded-lg">
        <h2 className="text-[2em] font-[700]">CREAM</h2>
        <p>Welcome to CREAM!</p>

        <form action="" className="flex gap-5 flex-col my-3">
          <input
            type="text"
            placeholder="Your first name e.g John"
            name="firstName"
            onChange={handleChange}
            value={details["firstName"]}
            className=" border-gray-500 w-full text-[0.8em] p-3 border-[1px] focus:border-primary1 focus:border-[2px]"
          />
          <input
            type="text"
            placeholder="Your last name e.g Doe"
            name="lastName"
            onChange={handleChange}
            value={details.lastName}
            className=" border-gray-500 w-full text-[0.8em] p-3 border-[1px] focus:border-primary1 focus:border-[2px]"
          />
          <input
            type="email"
            placeholder="Your email e.g johndoe@gmail.com"
            name="email"
            onChange={handleChange}
            value={details.email}
            className=" border-gray-500 w-full text-[0.8em] p-3 border-[1px] focus:border-primary1 focus:border-[2px]"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            onChange={handleChange}
            value={details.phoneNumber}
            className=" border-gray-500 w-full text-[0.8em] p-3 border-[1px] focus:border-primary1 focus:border-[2px]"
          />
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={details.password}
            className=" border-gray-500 w-full text-[0.8em] p-3 border-[1px] focus:border-primary1 focus:border-[2px]"
          />
        </form>

        <button
          className="bg-primary1 w-full py-3 text-black rounded-md my-3"
          onClick={submitForm}
        >
          Register
        </button>

        <p>
          Already Have an Account?{" "}
          <Link href={"/login"} className="text-primary1 font-[500]">
            Login
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
