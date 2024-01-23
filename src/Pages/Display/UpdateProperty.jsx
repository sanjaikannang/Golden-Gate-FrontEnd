import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Loading from "../Auth/Loading";
import Navbar from "../Auth/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const UpdateProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [propertyDetails, setPropertyDetails] = useState({
    ownerName: "",
    ownerMobile: "",
    ownerEmail: "",
    title: "",
    description: "",
    price: "",
    location: "",
    locationLink: "",
    photos: [],
    sell: false,
    rent: false,
    furnished: false,
    baths: "",
    beds: "",
  });

  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const propertyResponse = await fetch(
          `https://sanjaikannan-goldengate.onrender.com/api/property/${id}`,
          {
            method: "GET",
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );

        if (propertyResponse.ok) {
          const propertyData = await propertyResponse.json();
          setPropertyDetails(propertyData);
        } else {
          console.error("Failed to fetch property details.");
        }
      } catch (error) {
        console.error("Error during property details fetch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setPropertyDetails((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;

    // Clear existing files and append new ones
    setPropertyDetails((prevData) => ({
      ...prevData,
      photos: [...files],
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    Object.entries(propertyDetails).forEach(([key, value]) => {
      if (
        key !== "photos" &&
        (value === "" || (Array.isArray(value) && value.length === 0))
      ) {
        newErrors[key] = "This field is required.";
      }
    });

    // Validate numeric fields
    const numericFields = ["price", "baths", "beds"];
    numericFields.forEach((field) => {
      if (propertyDetails[field] !== "" && isNaN(propertyDetails[field])) {
        newErrors[field] = "Please enter a valid number.";
      }
    });

    // Validate link format
    if (
      propertyDetails.locationLink !== "" &&
      !isValidLink(propertyDetails.locationLink)
    ) {
      newErrors.locationLink = "Please enter a valid link.";
    }

    // Validate photos
    if (!propertyDetails.photos || propertyDetails.photos.length === 0) {
      newErrors.photos = "At least one photo is required.";
    } else {
      const allowedFileTypes = ["image/jpeg", "image/png", "image/gif"];
      for (let i = 0; i < propertyDetails.photos.length; i++) {
        const file = propertyDetails.photos[i];
        if (!allowedFileTypes.includes(file.type)) {
          newErrors.photos = "Invalid file type. Please upload images only.";
          break;
        }
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidLink = (link) => {
    // this example checks if it starts with "http://" or "https:"
    return /^https?:\/\//.test(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const updateEndpoint = `https://sanjaikannan-goldengate.onrender.com/api/update-property/${id}`;

    try {
      setLoading(true);

      const formDataForApi = new FormData();

      // Append owner details
      formDataForApi.append("ownerName", propertyDetails.ownerName);
      formDataForApi.append("ownerMobile", propertyDetails.ownerMobile);
      formDataForApi.append("ownerEmail", propertyDetails.ownerEmail);

      // Append property details
      formDataForApi.append("title", propertyDetails.title);
      formDataForApi.append("description", propertyDetails.description);
      formDataForApi.append("price", propertyDetails.price);
      formDataForApi.append("location", propertyDetails.location);
      formDataForApi.append("locationLink", propertyDetails.locationLink);
      formDataForApi.append("sell", propertyDetails.sell);
      formDataForApi.append("rent", propertyDetails.rent);
      formDataForApi.append("furnished", propertyDetails.furnished);
      formDataForApi.append("baths", propertyDetails.baths);
      formDataForApi.append("beds", propertyDetails.beds);

      // Iterate over the files and append them to formDataForApi
      for (let i = 0; i < propertyDetails.photos.length; i++) {
        const file = propertyDetails.photos[i];
        formDataForApi.append("photos", file);
      }

      const response = await fetch(updateEndpoint, {
        method: "PUT",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        body: formDataForApi,
      });

      if (response.ok) {
        // console.log("Property details updated successfully.");
        // Redirect to the property list page
        navigate("/myprofile");
      } else {
        console.error("Failed to update property details.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 bg-blue-100 shadow-md rounded-md"
      >
        <div className="fixed top-0 right-0 m-4">
          <button
            onClick={() => navigate("/myprofile")}
            className="text-red-500 hover:text-red-700 text-xl font-bold"
          >
            &#10006;
          </button>
        </div>
        <h3 className="text-2xl text-blue-800 font-bold mb-4">
          Update Property Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h5 className=" text-xl text-blue-800 font-bold mb-4">
            Owner Details
          </h5>
          <br />
          <div className="mb-4">
            <label
              htmlFor="ownerName"
              className="block text-sm font-medium text-gray-600"
            >
              Owner Name
            </label>
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              value={propertyDetails.ownerName}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.ownerName ? "border-red-500" : ""
              }`}
            />
            {errors.ownerName && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                {errors.ownerName}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="ownerMobile"
              className="block text-sm font-medium text-gray-600"
            >
              Owner Mobile
            </label>
            <input
              type="text"
              id="ownerMobile"
              name="ownerMobile"
              value={propertyDetails.ownerMobile}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.ownerMobile ? "border-red-500" : ""
              }`}
            />
            {errors.ownerMobile && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                {errors.ownerMobile}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="ownerEmail"
              className="block text-sm font-medium text-gray-600"
            >
              Owner Email
            </label>
            <input
              type="email"
              id="ownerEmail"
              name="ownerEmail"
              value={propertyDetails.ownerEmail}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.ownerEmail ? "border-red-500" : ""
              }`}
            />
            {errors.ownerEmail && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                {errors.ownerEmail}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <h5 className=" text-xl text-blue-800 font-bold mb-4">
            Property Details
          </h5>
          <br />
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Property Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={propertyDetails.title}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.title ? "border-red-500" : ""
              }`}
            />
            {errors.title && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} /> {errors.title}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Property Description
            </label>
            <textarea
              id="description"
              name="description"
              value={propertyDetails.description}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.description ? "border-red-500" : ""
              }`}
            />
            {errors.description && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                {errors.description}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-600"
            >
              Property Price
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={propertyDetails.price}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.price ? "border-red-500" : ""
              }`}
            />
            {errors.price && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} /> {errors.price}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-600"
            >
              Property Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={propertyDetails.location}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.location ? "border-red-500" : ""
              }`}
            />
            {errors.location && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} /> {errors.location}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="locationLink"
              className="block text-sm font-medium text-gray-600"
            >
              Property Location Link
            </label>
            <input
              type="text"
              id="locationLink"
              name="locationLink"
              value={propertyDetails.locationLink}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.locationLink ? "border-red-500" : ""
              }`}
            />
            {errors.locationLink && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} />{" "}
                {errors.locationLink}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="baths"
              className="block text-sm font-medium text-gray-600"
            >
              Baths
            </label>
            <input
              type="text"
              id="baths"
              name="baths"
              value={propertyDetails.baths}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.baths ? "border-red-500" : ""
              }`}
            />
            {errors.baths && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} /> {errors.baths}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="beds"
              className="block text-sm font-medium text-gray-600"
            >
              Beds
            </label>
            <input
              type="text"
              id="beds"
              name="beds"
              value={propertyDetails.beds}
              onChange={handleInputChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.beds ? "border-red-500" : ""
              }`}
            />
            {errors.beds && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} /> {errors.beds}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="photos"
              className="block text-sm font-medium text-gray-600"
            >
              Property Photos (max : 4)
            </label>
            <input
              type="file"
              id="photos"
              name="photos"
              multiple
              onChange={handleFileChange}
              className={`mt-1 p-2 w-full border rounded-md ${
                errors.photos ? "border-red-500" : ""
              }`}
            />
            {errors.photos && (
              <div className="text-red-500 text-sm mt-1">
                <FontAwesomeIcon icon={faExclamationCircle} /> {errors.photos}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 mt-4">
          <h5 className="text-xl text-blue-800 font-bold mb-4">
            Additional Details
          </h5>
          <div className="mb-4">
            <label
              htmlFor="sell"
              className="block text-sm font-medium text-gray-600"
            >
              For Sale
            </label>
            <input
              type="checkbox"
              id="sell"
              name="sell"
              checked={propertyDetails.sell}
              onChange={handleInputChange}
              className="mt-1 p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="rent"
              className="block text-sm font-medium text-gray-600"
            >
              For Rent
            </label>
            <input
              type="checkbox"
              id="rent"
              name="rent"
              checked={propertyDetails.rent}
              onChange={handleInputChange}
              className="mt-1 p-2"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="furnished"
              className="block text-sm font-medium text-gray-600"
            >
              Furnished
            </label>
            <input
              type="checkbox"
              id="furnished"
              name="furnished"
              checked={propertyDetails.furnished}
              onChange={handleInputChange}
              className="mt-1 p-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button
            type="submit"
            className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full"
          >
            Update Property
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateProperty;
