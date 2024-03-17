import Nav from "@/AtomicComponents/Nav";
import { postNewSubCategory } from "@/services/request";
import { useRouter } from "next/router";
import React, { useState } from "react";

function AddSubCategory() {
  const [subcategoryData, setSubcategoryData] = useState({
    category: "",
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSubcategoryData({
      ...subcategoryData,
      [name]: value,
    });
  };

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSubcategoryData({
          ...subcategoryData,
          image: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = subcategoryData;
    postNewSubCategory({ data, router });
    // Here you can submit subcategoryData to your backend API
    console.log("Submitting subcategory data:", subcategoryData);
    // You can reset the form after submission if needed
    // setSubcategoryData({
    //   category: "",
    //   name: "",
    //   description: "",
    //   image: "",
    // });
  };

  return (
    <div className=" mx-auto justify-center items-center w-screen flex flex-col flex-1 mt-[20vh] sm:mt-[15vh]">
      <Nav />
      <h1 className="text-2xl font-bold mb-4">Add New Subcategory</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[50%] sm:w-[90%] shadow-md py-8 px-2"
      >
        <div className="mb-4">
          <label htmlFor="category" className="block text-gray-700">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={subcategoryData.category}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          >
            <option value="">Select Category</option>
            <option value="640e4a12975b9d627cbc5e4f">Real Estate</option>
            <option value="640e4a13975b9d627cbc5e51">Automobile</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={subcategoryData.name}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={subcategoryData.description}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">
            Image
          </label>
          {/* <input
            type="image"
            id="image"
            name="image"
            value={subcategoryData.image}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-md"
          /> */}
          <input
            type="file"
            id="image"
            accept="image/*"
            //className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary1"
            onChange={handleCoverChange}
            className="w-full mt-1 p-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-primary1 text-white px-4 py-2 rounded-md w-full"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddSubCategory;
