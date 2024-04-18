import React, { useState, useEffect } from "react";
//import SubcategoryDropdown from "@/AtomicComponents/SubcategoryComponent";
import { getSubCategories, updateSubCategory } from "@/services/request";
import { useRouter } from "next/router";
import Nav from "@/AtomicComponents/Nav";

function UpdateSubcategory() {
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [loading, setLoading] = useState(false);

  //   subcategory={"640e4a12975b9d627cbc5e4f"}
  //   subcategory={"640e4a13975b9d627cbc5e51"}

  const [subcategoryData, setSubcategoryData] = useState({
    category: "640e4a12975b9d627cbc5e4f",
    name: "",
    description: "",
    image: "",
  });

  const [subcategories, setSubcategories] = useState([]);

  const router = useRouter();
  const category = subcategoryData["category"];

  useEffect(() => {
    const getSubcategories = async () => {
      const response = await getSubCategories({ router, category });
      setSubcategories(response.data);
      console.log("data", subcategories);
    };
    getSubcategories();

    //console.log("ssd", subcategories);
  }, [subcategoryData.category]);

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

  const handleSubcategoryChange = (value) => {
    setSelectedSubcategory(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(subcategoryData);
    try {
      if (!selectedSubcategory) {
        console.error("No subcategory selected.");
        return;
      }
      await updateSubCategory({
        subcategoryId: selectedSubcategory,
        data: subcategoryData,
        router: router,
      });
      console.log("Category updated successfully!");
      setSubcategoryData({
        category: "640e4a12975b9d627cbc5e4f",
        name: "",
        description: "",
        image: "",
      });
    } catch (error) {
      console.error("Error updating category:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" mx-auto justify-center items-center w-screen flex flex-col flex-1 mt-[20vh] sm:mt-[15vh]">
      <Nav />
      <h1>Select Subcategory</h1>

      {/* <button
        onClick={handleUpdateCategory}
        disabled={!selectedSubcategory || loading}
      >
        {loading ? "Updating..." : "Update Category"}
      </button> */}
      <form
        onSubmit={handleSubmit}
        className="w-[50%] sm:w-[90%] shadow-md py-8 px-2"
      >
        {/* <SubcategoryDropdown onSelect={handleSubcategoryChange} /> */}
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
            required
          >
            <option value="">Select Category</option>
            <option value="640e4a12975b9d627cbc5e4f">Real Estate</option>
            <option value="640e4a13975b9d627cbc5e51">Automobile</option>
          </select>
        </div>
        <div className="mb-4">
          <select
            onChange={(e) => {
              setSelectedSubcategory(e.target.value);
              console.log("selected subcategory", e.target.value);
            }}
            className="w-full mt-1 p-2 border rounded-md"
            required
          >
            <option value="">Select Subcategory</option>
            {subcategories.map((subcategory) => (
              <option key={subcategory._id} value={subcategory._id}>
                {subcategory.name}
              </option>
            ))}
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
            required
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
            required
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
            required
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

export default UpdateSubcategory;
