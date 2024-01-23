import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";

const UserProperty = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleProperties, setVisibleProperties] = useState(8);

  // Define the fetchProperties function outside the useEffect
  const fetchProperties = async () => {
    try {
      const response = await fetch(
        "https://sanjaikannan-goldengate.onrender.com/api/user-properties",
        {
          method: "GET",
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setProperties(data);
      } else {
        console.error("Failed to fetch user properties.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Call fetchProperties directly in useEffect
    fetchProperties();
  }, []);

  const handleUpdate = (propertyId) => {
    // Navigate to the update-property page with the property id in the params
    navigate(`/update-property/${propertyId}`);
  };

  const handleDelete = async (propertyId) => {
    // Perform the delete operation, for example, make an API call
    try {
      const response = await fetch(
        `https://sanjaikannan-goldengate.onrender.com/api/delete-property/${propertyId}`,
        {
          method: "DELETE",
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      );

      if (response.ok) {
        // Refresh the properties after deletion
        fetchProperties();
      } else {
        console.error("Failed to delete property.");
      }
    } catch (error) {
      console.error("Error during delete operation:", error);
    }
  };

  const handleLoadMore = () => {
    setVisibleProperties((prevCount) => prevCount + 8);
  };

  return (
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
              <h3 className="text-xl font-semibold text-amber-600">
                <FontAwesomeIcon icon={faDollarSign} /> {property.price}
              </h3>
            </div>
            <div className="p-6 flex justify-between">
              <button
                onClick={() => handleUpdate(property._id)}
                className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(property._id)}
                className="text-red-500 border border-red-500 bg-white font-medium px-4 py-2 rounded-full"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <br />
      <br />
      {properties.length > visibleProperties && (
        <div className="flex justify-center">
          <button
            className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full"
            onClick={handleLoadMore}
          >
            Load More Property ...
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProperty;
