import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../Auth/Navbar";
import SearchProperty from "./SearchProperty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const [properties, setProperties] = useState([]);
  const [visibleProperties, setVisibleProperties] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(8); // Number of properties to show initially
  const [loadMoreVisible, setLoadMoreVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all properties
    fetch("https://sanjaikannan-goldengate.onrender.com/api/get-properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  useEffect(() => {
    // Update the visible properties when properties change
    setVisibleProperties(properties.slice(startIndex, endIndex));
    setLoadMoreVisible(endIndex < properties.length);
  }, [properties, startIndex, endIndex]);

  const handleSeeMore = (id, e) => {
    e.preventDefault();
    navigate(`/display-property/${id}`);
  };

  const handleLoadMore = () => {
    const newEndIndex = endIndex + 12;
    setVisibleProperties([
      ...visibleProperties,
      ...properties.slice(endIndex, newEndIndex),
    ]);
    setEndIndex(newEndIndex);
  };

  return (
    <>
      <NavBar />
      <br />
      <SearchProperty />
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-7">
        <div className="section-line bg-blue-700 h-1 mx-auto mb-6"></div>
        <h3 className="mt-2 mb-16 text-2xl tracking-tight md:text-2xl xl:text-4xl flex items-center justify-center">
          Top Property
        </h3>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-7">
          {visibleProperties.map((property) => (
            <div
              key={property._id}
              className="bg-blue-100 rounded-lg overflow-hidden"
            >
              <img
                src={
                  property.photos && property.photos.length > 0
                    ? property.photos[0]
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
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> {property.location}
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
        {loadMoreVisible && (
          <div className="flex justify-center mt-4">
            <button
              onClick={handleLoadMore}
              className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full"
            >
              Load More Property ...
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
