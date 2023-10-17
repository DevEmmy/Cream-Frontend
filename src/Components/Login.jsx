import { login } from "@/services/request";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Login = () => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await login(details.email, details.password, router);
  };

  return (
    <div className="bg-slate-700 w-full h-[100vh] flex flex-col gap-3 items-center justify-center">
      <div className="bg-white cflexsm sm:gap-5 w-[40%] sm:w-[90%] h-[70vh] sm:rounded-xl sm:h-[80vh] p-10 sm:p-5 text-center">
        <h2 className="text-[2em] font-[700]">CREAM</h2>
        <p>Welcome Back, We missed you!</p>

        <form action="" className="flex w-full gap-5 flex-col">
          <input
            type="text"
            placeholder="johndoe@gmail.com"
            className="w-full text-[0.8em] p-3"
            name="email"
            value={details["email"]}
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="**** "
            className="w-full text-[0.8em] p-3"
            name="password"
            value={details["password"]}
            onChange={handleChange}
          />

          <p className="text-start">
            Forgotten Password?{" "}
            <Link
              href={"/forgot-password"}
              className="text-primary1 font-[500]"
            >
              Click Here
            </Link>{" "}
          </p>
        </form>

        <button
          className="bg-primary1 w-full py-3 text-black rounded-md my-3"
          onClick={submitForm}
        >
          Login
        </button>

        <p>
          Don't have an account?{" "}
          <Link href={"/register"} className="text-primary1 font-[500]">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
