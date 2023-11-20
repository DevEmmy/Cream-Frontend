//import { View, Text } from "react-native";
import Footer from "@/AtomicComponents/Footer";
import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Nav from "@/AtomicComponents/Nav";
import { postPropertyRequest } from "@/services/request";

const PropertyRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", // Updated label from "phoneNumber" to "email"
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Call the postPropertyRequest function with the form data
    await postPropertyRequest(
      formData.name,
      formData.email,
      formData.description
    );
  };

  return (
    <>
      <div
        class="bg-white  min-w-screen w-screen  flex items-start justify-center property-request"
        style={{
          backgroundImage: `url("/pic3.jpg")`,

          objectFit: "cover",
          backgroundSize: "cover",
        }}
      >
        <Nav />
        <div class="bg-white p-6 rounded-lg shadow-lg w-[30%] sm:w-[90%] my-xPadding py-xPadding mt-24">
          <h1 class="text-2xl font-semibold mb-4">Property Request</h1>

          <form onSubmit={handleSubmit}>
            <div class="mb-4">
              <label for="name" class="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary1 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>

            <div class="mb-4">
              <label
                for="contact"
                class="block text-sm font-medium text-gray-700"
              >
                Contact Details
              </label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary1 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>

            <div class="mb-4">
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
              >
                Property Description
              </label>
              <textarea
                id="description"
                name="description"
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary1 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                rows="4"
                required
              ></textarea>
            </div>

            <div class="mt-6">
              <button
                type="submit"
                class="w-full inline-flex items-center  justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-black bg-primary1 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PropertyRequestForm;
