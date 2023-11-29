import React, { useEffect, useState } from "react";
import Nav from "@/AtomicComponents/Nav";
import { getAllPropertyRequests } from "@/services/request";
import { SpinnerCircular } from "spinners-react";
import Link from "next/link";
import Footer from "@/AtomicComponents/Footer";

function PropertyRequests() {
  const [selectedOption, setSelectedOption] = useState("option1");
  const [propertyRequests, setPropertyRequests] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Handler for dropdown change
  const handleDropdownChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const getPropertyRequests = async () => {
    setIsLoading(true);
    const propertyRequests = await getAllPropertyRequests();
    setPropertyRequests(propertyRequests.list.data.reverse());
    setIsLoading(false);
    //console.log(propertyRequests);
  };

  //getPropertyRequests();
  useEffect(() => {
    getPropertyRequests();
  }, []);

  const [expandedItems, setExpandedItems] = useState([]);

  const toggleExpand = (itemId) => {
    setExpandedItems((prevExpanded) =>
      prevExpanded.includes(itemId)
        ? prevExpanded.filter((id) => id !== itemId)
        : [...prevExpanded, itemId]
    );
  };

  return (
    <>
      <div class="bg-white  min-w-screen w-screen min-h-screen  flex-1 items-start flex flex-col">
        <Nav active={5} />
        <div className="mt-24 flex min-w-screen w-screen flex-col">
          <div className="justify-center flex w-screen ">
            <h1 className="font-bold text-xl my-2">Property Requests</h1>
          </div>
          <div className="flex justify-center">
            <select
              className=" w-[20%] md:w-[50%] bg-gray-100 py-2 border-gray-300 border rounded-sm"
              id="dropdown"
              value={selectedOption}
              onChange={handleDropdownChange}
            >
              <option value="option1">Real Estate</option>
              <option value="option2">Automobile</option>
            </select>
          </div>
          <div className="w-screen  ml-8 flex f justify-start my-2">
            <Link
              href={"/propertyRequestForm"}
              className=" hover:text-primary1 font-bold"
            >
              <button className="border-2 border-white py-3 ">
                Make a New Property Request
              </button>
            </Link>{" "}
          </div>
          {isLoading ? (
            <div className="items-center justify-center flex flex-1 mt-12">
              <SpinnerCircular
                color="white"
                className="flex justify-center"
                secondaryColor={"#F2BE5C"}
                size={50}
                thickness={150}
              />
            </div>
          ) : (
            propertyRequests.length > 0 && (
              <div className="min-h-screen">
                <ul>
                  {propertyRequests.map((item) => (
                    <li
                      key={item._id}
                      className="bg-gray-300 py-2 mb-4 mx-8 rounded-md "
                    >
                      <div className="mx-4 font-bold">{item.name}</div>
                      <div className="mx-4 mb-1 font-[500]">{item.email}</div>
                      <div
                        className={`mx-4 mb-4  ${
                          expandedItems.includes(item._id)
                            ? "whitespace-normal overflow-visible text-overflow-clip"
                            : "whitespace-nowrap overflow-hidden text-overflow-ellipsis h-5 "
                        }`}
                      >
                        {item.request}
                      </div>
                      <div className="ml-4 bg-primary1 w-[5%] md:w-[20%] lg:w-[10%] justify-center flex rounded-lg ">
                        <button onClick={() => toggleExpand(item._id)}>
                          {expandedItems.includes(item._id)
                            ? "Hide"
                            : "See All"}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PropertyRequests;
