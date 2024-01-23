import React, { useState, useEffect } from "react";
import Loading from "../Auth/Loading";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const SearchProperty = () => {
  const [location, setLocation] = useState("");
  const [buyOrRent, setBuyOrRent] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [visibleProperties, setVisibleProperties] = useState(4);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset visibleProperties when search criteria change
    setVisibleProperties(4);
  }, [location, buyOrRent, minPrice, maxPrice]);

  const handleSearch = async (e) => {
    e.preventDefault();

    // Validate that all details are provided
    if (!location || !buyOrRent || !minPrice || !maxPrice) {
      setError("Fill all the details.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://sanjaikannan-goldengate.onrender.com/api/search-properties",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ location, buyOrRent, minPrice, maxPrice }),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.json();
        setError(errorMessage.message);
        setProperties([]);
        setLoading(false);
        return;
      }

      const data = await response.json();
      setProperties(data);
      setError("");
      setLoading(false);
    } catch (error) {
      console.error("Search error:", error);
      setError("An error occurred while searching for properties.");
      setProperties([]);
      setLoading(false);
    }
  };

  const handleSeeMore = (id, e) => {
    e.preventDefault();
    navigate(`/display-property/${id}`);
  };

  const handleLoadMore = () => {
    setVisibleProperties((prevVisible) => prevVisible + 4);
  };

  return (
    <>
      <div className="bg-gradient-to-b from-blue-100 to-white min-h-screen">
        <div className="mx-auto max-w-4xl px-7 py-16 sm:px-7 sm:py-40 lg:max-w-4xl lg:px-7">
          <h1 className="mt-2 mb-16 text-2xl text-blue-800 tracking-tight md:text-2xl xl:text-6xl">
            India's only real estate platform
            <br />
            <span className="text-initial font-thin text-black">
              with 10,000+ highly rated sellers
            </span>
          </h1>
          <form onSubmit={handleSearch}>
            <div className="bg-blue-200 p-8 shadow-md flex flex-col w-full sm:flex-row lg:flex-row space-y-4 sm:space-y-0 sm:space-x-4 lg:space-x-4">
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className=" p-2 w-full sm:w-40 border border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="Min Price $"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="p-2 w-full sm:w-40 border border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
              />
              <input
                type="number"
                placeholder="Max Price $"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="mt-2 sm:mt-0 ml-0 sm:ml-2 p-2 w-full sm:w-40 border border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
              />
              <select
                value={buyOrRent}
                onChange={(e) => setBuyOrRent(e.target.value)}
                className="mb-2 sm:mb-0 ml-0 sm:ml-2 p-2 w-full sm:w-40 border border-blue-300 focus:outline-none focus:ring focus:border-blue-500"
              >
                <option value="">All</option>
                <option value="buy">Buy</option>
                <option value="rent">Rent</option>
              </select>
              <button
                type="submit"
                className="mt-2 rounded-md bg-blue-700 text-white p-2 w-full sm:w-40"
              >
                Search
              </button>
            </div>
          </form>
        </div>

        {loading && <Loading />}

        {error && (
          <div className="flex items-center justify-center ">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
            {properties.slice(0, visibleProperties).map((property) => (
              <div
                key={property._id}
                className="bg-blue-100 rounded-lg overflow-hidden"
              >
                <img
                  src={
                    property.photos && property.photos.length > 0
                      ? property.photos[0].cloudinaryUrl
                      : "default-image-url"
                  }
                  alt={property.title}
                  className="w-full h-48 object-cover object-center"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    {property.title}
                  </h3>

                  <h3 className="text-xl font-semibold text-gray-600">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                    {property.location}
                  </h3>
                  <br />
                  <h3 className="text-xl font-semibold text-red-500">
                    <FontAwesomeIcon icon={faDollarSign} /> {property.price}
                  </h3>
                </div>
                <div className="p-6 flex justify-end">
                  <button
                    onClick={(e) => handleSeeMore(property._id, e)}
                    className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full"
                  >
                    View Property
                  </button>
                </div>
              </div>
            ))}
          </div>
          <br />
          {properties.length > visibleProperties && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full"
              >
                Load More Property ...
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SearchProperty;
