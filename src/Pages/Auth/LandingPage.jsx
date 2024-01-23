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

      <div className="container my-24 mx-auto md:px-6">
        <section className="mb-32">
          <div className="block rounded-lg bg-blue-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="flex flex-wrap items-center">
              <div className="block w-full shrink-0 grow-0 basis-auto lg:flex lg:w-6/12 xl:w-4/12">
                <div className="h-[500px] w-full">
                  <iframe
                    src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="left-0 top-0 h-full w-full rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
                    frameBorder="0"
                    allowFullScreen
                    title="Google Maps"
                  ></iframe>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="flex flex-wrap px-3 pt-12 pb-12 md:pb-0 lg:pt-0">
                  {/* Contact cards */}
                  {/* Technical Support */}
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Technical support
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          goldengatesupport@example.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-69
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Sales Questions */}
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <div className="flex items-start">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Sales questions
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          goldengatesales@example.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-76
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Press */}
                  <div className="mb-12 w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:mb-0 xl:w-6/12 xl:px-12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">Press</p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          goldengatepress@example.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-87
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bug Report */}
                  <div className="w-full shrink-0 grow-0 basis-auto px-3 md:w-6/12 md:px-6 lg:w-full xl:w-6/12 xl:px-12">
                    <div className="align-start flex">
                      <div className="shrink-0">
                        <div className="inline-block rounded-md bg-primary-100 p-4 text-primary">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 007.972 5.56c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-6 grow">
                        <p className="mb-2 font-bold dark:text-white">
                          Bug report
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          goldengatebugs@example.com
                        </p>
                        <p className="text-neutral-500 dark:text-neutral-200">
                          +1 234-567-99
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
