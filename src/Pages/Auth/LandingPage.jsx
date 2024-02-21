import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handlelogin = () => {
    navigate("/login");
  };

  const handlesignup = () => {
    navigate("/signup");
  };
  return (
    <>
      <section className="mb-40">
        {/* Navbar */}
        <nav className="bg-white-800 p-4 text-grey flex justify-between items-center">
          <div className="text-xl text-grey font-semibold">
            <span className=" text-blue-700 font-bold">Golden Gate </span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handlelogin}
              className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full"
            >
              Login
            </button>
            <button
              onClick={handlesignup}
              className="text-blue-900 border border-blue-900 bg-white font-medium px-4 py-2 rounded-full"
            >
              Signup
            </button>
          </div>
        </nav>
        {/* Navbar */}

        {/* Background image */}
        <div className="relative overflow-hidden bg-cover bg-no-repeat bg-[50%] bg-[url('/images/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.png')] h-[500px]"></div>

        <div className="w-100 mx-auto px-6 sm:max-w-2xl md:max-w-3xl md:px-12 lg:max-w-5xl xl:max-w-7xl xl:px-32">
          <div className="text-center">
            <div className="block rounded-xl bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:py-16 md:px-12 mt-[-170px] backdrop-blur-[60px]">
              <h1 className="mt-2 mb-16 text-2xl tracking-tight md:text-2xl xl:text-6xl">
                India's only real estate platform
                <span className="text-initial font-thin text-black">
                  with 10,000+ highly rated sellers
                </span>
              </h1>
              <button
                onClick={handlelogin}
                className="mb-2 inline-block font-medium text-lg text-blue-900 bg-white border border-blue-900 rounded-full px-12 pt-4 pb-3.5"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
        {/* Background image */}
      </section>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <h2 className="mb-20 text-3xl font-normal">Why We are so Great ?</h2>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature Card 1 */}
            <div className="mb-12">
              <div className="block h-full rounded-lg bg-blue-50 shadow-md dark:bg-neutral-700">
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-semibold">
                    High Response Rate
                  </h3>
                  <p className="text-lg font-normal">
                    We pick sellers for you who give you priority. Over 90% of
                    our top sellers respond to enquiries within the first 24
                    hours
                  </p>
                </div>
              </div>
            </div>
            {/* End Feature Card 1 */}

            {/* Feature Card 2 */}
            <div className="mb-12">
              <div className="block h-full rounded-lg bg-blue-50 shadow-md dark:bg-neutral-700">
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Wide Coverage</h5>
                  <p className="text-lg font-normal">
                    Sellers with a wide variety of properties are more likely to
                    satisfy your demands. More the options, better is your
                    decision.
                  </p>
                </div>
              </div>
            </div>
            {/* End Feature Card 2 */}

            {/* Feature Card 3 */}
            <div className="mb-12">
              <div className="block h-full rounded-lg bg-blue-50 shadow-md dark:bg-neutral-700">
                <div className="p-6">
                  <h5 className="mb-4 text-lg font-semibold">Deals Closed</h5>
                  <p className="text-lg font-normal">
                    We choose sellers who have previously closed deals with
                    similar requirement as you have. They'll understand your
                    needs better.
                  </p>
                </div>
              </div>
            </div>
            {/* End Feature Card 3 */}
          </div>
        </section>
      </div>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="flex flex-col-reverse lg:flex-row items-center">
                <div className="lg:mb-0 lg:mr-6">
                  <img
                    src="/images/jason-dent-w3eFhqXjkZE-unsplash.png"
                    className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                    alt="image"
                  />
                </div>
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-lg bg-blue-50 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                    <h2 className="mb-16 text-3xl font-normal">
                      Sell or Rent your property for free on Golden Gate!
                      <br />
                      <span className="text-lg italic hover:not-italic">
                        Become a part of the growing SK family. As a promise to
                        our real-estate agent community, all our listings are
                        completely free & always will be. Now you can grow your
                        business happily. Furthermore, over a million buyers
                        visit us every month, giving you the audience that you
                        need. Download our Makaan seller app to avail all these
                        benefits & conveniently follow up with your clients.
                      </span>
                    </h2>
                    <div className="grid gap-x-6 md:grid-cols-2"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center lg:text-left">
          <h2 className="mb-12 text-center text-3xl font-normal">
            New Projects & Updates!! We are Proud of...!
          </h2>

          <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-6 block rounded-lg bg-blue-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="\images\p1.jpg"
                  className="w-full rounded-t-lg"
                  alt="project"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">
                  All You Need To Know About Diya Green City, Raj Nagar
                  Extension
                </h5>
                <p className="mb-6">
                  Diya Green City project will be ready for possession by
                  December 2019. Currently the project is under-construction and
                  applications are invited from the interested buyers. The last
                  date for online application is August 18
                </p>
              </div>
            </div>
            <div className="mb-6 block rounded-lg bg-blue-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="\images\p2.jpg"
                  className="w-full rounded-t-lg"
                  alt="project"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">
                  All You Need To Know About Godrej Emerald Thane West
                </h5>
                <p className="mb-6">
                  Godrej Emerald project is currently under-construction and
                  will be ready for possession by June 2024. According to the
                  last update from Godrej Properties, the construction is in
                  full swing and the foundation work is under process.
                </p>
              </div>
            </div>
            <div className="mb-6 block rounded-lg bg-blue-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  src="\images\p3.jpg"
                  className="w-full rounded-t-lg"
                  alt="project"
                />
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">
                  All You Need To Know About DDA Delhi Dwarka Awas Yojna 2018
                </h5>
                <p className="mb-6">
                  A 1BHK apartment was launched for Rs 15.69 lakh while a 2BHK
                  flat was offered for Rs 27 lakh. A 3BHK price was priced at Rs
                  38 lakh and a 4BHK apartment costs Rs 49.71 lakh
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="bg-blue-50">
        <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
          <h1
            className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
          >
            <span className="text-blue-400">Free</span> until you're ready to
            launch!!
          </h1>
        </div>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-black text-sm pb-8"
        >
          <span>
            © 2023 Appy. All rights reserved.
            <h3>
              At GoldenGates.com, we understand that people everywhere are
              searching for a home to call their own. We want to make this
              search as joyful as finally finding the perfect home because we
              understand that finding a home is much more than an online
              search!!
            </h3>
          </span>
          <span>
            goldengate@gmail.com
            <h3>
              A home is a cherished memory that lasts forever, it is where the
              walls embrace memories, the ceilings shelter love and laughter,
              where the quiet corners offer a much-needed pause and life itself
              becomes a reason to celebrate.
            </h3>
          </span>
          <span>
            Terms · Privacy Policy
            <h3>
              At GoldenGate.com, we not only help you search but help you find.
              we help you find joy. GoldenGate.com is part of elara technologies
              pte limited, singapore which also owns and operates proptiger.com,
              a digital real estate marketing and transactions services
              provider.
            </h3>
          </span>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;
