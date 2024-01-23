import React from "react";
import { Menu } from "@headlessui/react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const Navigate = useNavigate();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/login");
  };
  const handlemyProfile = () => {
    Navigate("/myprofile");
  };

  return (
    <>
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-7">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <div className="text-xl text-grey font-semibold">
                  <span className="text-blue-700 font-bold">Golden Gate </span>
                </div>
              </div>
            </div>

            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm ">
                    <span className="absolute -inset-1.5" />
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe5kk7x_WzK-qbwZ5Tyi_QxzY5xLaEA3b4hY8lCoDeoDFR-vyTVlfC1_rx507GMMKJtx4&usqp=CAU"
                      alt=""
                    />
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-lg bg-white ">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={handlemyProfile}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-md text-blue-800"
                        )}
                      >
                        Your Profile
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        onClick={handleLogout}
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "block px-4 py-2 text-md text-blue-800"
                        )}
                      >
                        Sign out
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default NavBar;
