import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Loading from "../Auth/Loading";
import Navbar from "../Auth/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faLink,
  faDollarSign,
  faBed,
  faBath,
  faCouch,
  faHandHoldingDollar,
  faUser,
  faHandshake,
  faPhoneVolume,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

const DisplayProperty = () => {
  const [property, setProperty] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    const fetchPropertyDetails = async () => {
      try {
        const response = await fetch(
          `https://sanjaikannan-goldengate.onrender.com/api/property/${id}`,
          {
            method: "GET",
            headers: {
              "x-auth-token": localStorage.getItem("token"),
            },
          }
        );

        if (!response.ok) {
          throw new Error("Error fetching property details");
        }

        const data = await response.json();
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property details:", error);
      }
    };

    fetchPropertyDetails();
  }, [id]);

  if (!property) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : property.photos.length - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < property.photos.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handleEmailClick = () => {
    const emailLink = `mailto:${property.ownerEmail}`;
    window.open(emailLink, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mb-6 relative">
            {property.photos && property.photos.length > 0 ? (
              <Carousel
                showStatus={false}
                showThumbs={false}
                selectedItem={currentIndex}
              >
                {property.photos.map((photo, index) => (
                  <div key={index}>
                    <img
                      src={photo.cloudinaryUrl}
                      alt={`Property ${index + 1}`}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <p>No photos available</p>
            )}
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
              <button
                type="button"
                className="flex justify-center items-center h-12 w-12 bg-blue-900 bg-opacity-150 rounded-full cursor-pointer focus:outline-none"
                data-carousel-prev
                onClick={handlePrevClick}
              >
                <span className="text-white">
                  <svg
                    className="rtl:rotate-180 w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 5H1m0 0 4 4M1 5l4-4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="flex justify-center items-center h-12 w-12 bg-blue-900 bg-opacity-150 rounded-full cursor-pointer focus:outline-none"
                data-carousel-next
                onClick={handleNextClick}
              >
                <span className="text-white">
                  <svg
                    className="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>

          {/* Property and Owner Details */}
          <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h3 className="text-2xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                Property Details
              </h3>
              <br />
              <h3 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-3xl">
                {property.title}
              </h3>
              <br />
              <h5 className=" text-2xl font-semibold mt-2 text-amber-500">
                <FontAwesomeIcon icon={faDollarSign} /> {property.price}
              </h5>
              <h3 className=" text-2xl font-semibold mt-2 text-gray-700">
                Description : {property.description}
              </h3>
              <h3 className=" text-2xl font-semibold mt-2 text-gray-700">
                <FontAwesomeIcon icon={faBed} /> Beds : {property.beds}
              </h3>
              <h3 className=" text-2xl font-semibold mt-2 text-gray-700">
                <FontAwesomeIcon icon={faBath} /> Baths : {property.baths}
              </h3>
              <h3 className=" text-2xl font-semibold mt-2 text-gray-700">
                <FontAwesomeIcon icon={faCouch} /> Furnished :
                {property.furnished ? "Yes" : "No"}
              </h3>
              <h3 className=" text-2xl font-semibold mt-2 text-gray-700">
                <FontAwesomeIcon
                  icon={
                    property.rent
                      ? faHandHoldingDollar
                      : property.sell
                      ? faHandshake
                      : null
                  }
                />
                {property.rent
                  ? " For Rent "
                  : property.sell
                  ? " For Sale "
                  : ""}
              </h3>
              <h3 className=" text-2xl font-semibold mt-2 text-gray-700">
                <FontAwesomeIcon icon={faLocationDot} /> Location :{" "}
                {property.location}
              </h3>
              <br />
              <button className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full">
                <a
                  href={property.locationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-900"
                >
                  <FontAwesomeIcon icon={faLink} /> View Location on Map
                </a>
              </button>
            </div>

            {/* Owner Details */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl">
                Owner Details
              </h2>
              <br />
              <h3 className="text-2xl font-semibold mt-2 tracking-tight text-gray-700">
                <FontAwesomeIcon icon={faUser} /> Owner Name :{""}{" "}
                {property.ownerName}
              </h3>
              <h3 className="text-2xl font-semibold mt-2 text-gray-700">
                <FontAwesomeIcon icon={faPhoneVolume} /> Mobile :{""}{" "}
                {property.ownerMobile}
              </h3>
              <br />
              <button
                className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full"
                onClick={handleEmailClick}
              >
                <FontAwesomeIcon icon={faPaperPlane} /> Mail To Owner
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayProperty;
