import React, { useState } from "react";
import Modal from "react-modal";
import NavBar from "../Auth/Navbar";
import PropertyForm from "../Display/PropertyForm";
import UserProperty from "../Display/UserProperty";

// Set the app element for React Modal
Modal.setAppElement("#root");

const MyProfile = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <NavBar />
      <br />
      <div className="text-2xl font-bold mb-8 text-blue-800 flex justify-center">
        My Profile
      </div>
      <div className="section-line bg-blue-700 h-1 mx-auto mb-6"></div>
      <h3 className="mt-2 mb-16 text-2xl tracking-tight md:text-2xl xl:text-4xl flex items-center justify-center">
        Sell You Own Property in
        <span className="text-blue-700 font-semibold"> Golden Gate</span>
      </h3>
      <h5 className="mt-2 mb-16 text-md tracking-tight md:text-md xl:text-2xl flex items-center justify-center">
        Click Add Property Button to Sell your Own Property !
      </h5>
      <div className="flex flex-col items-center justify-center ">
        <div className="absolute  flex justify-center">
          <button
            onClick={openModal}
            className="text-blue-900 border border-blue-900 bg-white font-medium px-8 py-2 rounded-full"
          >
            Add Property
          </button>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Add Property Modal"
        >
          <PropertyForm closeModal={closeModal} />
        </Modal>
      </div>
      <UserProperty />
    </>
  );
};

export default MyProfile;
