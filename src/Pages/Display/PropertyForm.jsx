import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../Auth/Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const PropertyForm = ({ closeModal }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    setFormData((prevData) => ({
      ...prevData,
      photos: [...prevData.photos, ...files],
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Check required fields
    Object.entries(formData).forEach(([key, value]) => {
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
      if (formData[field] !== "" && isNaN(formData[field])) {
        newErrors[field] = "Please enter a valid number.";
      }
    });

    // Validate link format
    if (formData.locationLink !== "" && !isValidLink(formData.locationLink)) {
      newErrors.locationLink = "Please enter a valid link.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const isValidLink = (link) => {
    // this example checks if it starts with "http://" or "https:
    return /^https?:\/\//.test(link);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const apiEndpoint =
      "https://sanjaikannan-goldengate.onrender.com/api/post-properties";

    try {
      setLoading(true);

      const formDataForApi = new FormData();

      // Append owner details
      formDataForApi.append("ownerName", formData.ownerName);
      formDataForApi.append("ownerMobile", formData.ownerMobile);
      formDataForApi.append("ownerEmail", formData.ownerEmail);

      // Append property details
      formDataForApi.append("title", formData.title);
      formDataForApi.append("description", formData.description);
      formDataForApi.append("price", formData.price);
      formDataForApi.append("location", formData.location);
      formDataForApi.append("locationLink", formData.locationLink);
      formDataForApi.append("sell", formData.sell);
      formDataForApi.append("rent", formData.rent);
      formDataForApi.append("furnished", formData.furnished);
      formDataForApi.append("baths", formData.baths);
      formDataForApi.append("beds", formData.beds);

      // Iterate over the files and append them to formDataForApi
      for (let i = 0; i < formData.photos.length; i++) {
        const file = formData.photos[i];
        formDataForApi.append("photos", file);
      }

      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
        body: formDataForApi,
      });

      if (response.ok) {
        console.log("Property details and photos uploaded successfully.");
        closeModal();
        navigate("/home-page");
      } else {
        console.error("Failed to upload property details and photos.");
      }
    } catch (error) {
      console.error("Error during API call:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto mt-8 p-6 bg-blue-100 shadow-md rounded-md"
      >
        <div className="fixed top-0 right-0 m-4">
          <button
            onClick={closeModal}
            className="text-red-500 hover:text-red-700 text-xl font-bold"
          >
            &#10006;
          </button>
        </div>
        <h3 className="text-2xl text-blue-800 font-bold mb-4">
          Upload Property Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <h5 className="text-xl text-blue-800 font-bold mb-4">
            Owner Details
          </h5>
          <br />
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
              value={formData.ownerName}
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
              value={formData.ownerMobile}
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
              value={formData.ownerEmail}
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
          <h5 className="text-xl text-blue-800 font-bold mb-4">
            Property Details
          </h5>
          <br />
          <br />
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
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
              Description
            </label>
            <input
              type="text"
              id="description"
              name="description"
              value={formData.description}
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
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
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
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
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
              Location Link
            </label>
            <input
              type="text"
              id="locationLink"
              name="locationLink"
              value={formData.locationLink}
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
              type="number"
              id="baths"
              name="baths"
              value={formData.baths}
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
              type="number"
              id="beds"
              name="beds"
              value={formData.beds}
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
            <label className="block text-sm font-medium text-gray-600">
              Property Type
            </label>
            <div className="flex gap-4">
              <div className="mb-4">
                <input
                  type="checkbox"
                  id="sell"
                  name="sell"
                  checked={formData.sell}
                  onChange={(e) =>
                    handleInputChange({
                      ...e,
                      type: "checkbox",
                      checked: e.target.checked,
                    })
                  }
                />
                <label
                  htmlFor="sell"
                  className="ml-2 text-sm font-medium text-gray-600"
                >
                  For Sale
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="rent"
                  name="rent"
                  checked={formData.rent}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="rent"
                  className="ml-2 text-sm font-medium text-gray-600"
                >
                  For Rent
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  id="notForRent"
                  name="rent"
                  checked={!formData.rent}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="notForRent"
                  className="ml-2 text-sm font-medium text-gray-600"
                >
                  Not For Rent
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600">
              Additional Features
            </label>
            <div className="flex gap-4">
              <div className="mb-4">
                <input
                  type="checkbox"
                  id="furnished"
                  name="furnished"
                  checked={formData.furnished}
                  onChange={handleInputChange}
                />
                <label
                  htmlFor="furnished"
                  className="ml-2 text-sm font-medium text-gray-600"
                >
                  Furnished
                </label>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="photos"
              className="block text-sm font-medium text-gray-600"
            >
              Photos
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
        <div className="mt-6">
          <button
            type="submit"
            className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full"
          >
            Upload Property
          </button>
        </div>
      </form>
    </>
  );
};

export default PropertyForm;
