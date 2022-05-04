import React from "react";
import Navbar from "./Navbar";

export default ()=>{


    return (
        <div>
        <Navbar location="1" />
        

        <div className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <div className="-mr-2 flex items-center md:hidden">
                      <button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                        <span className="sr-only">Open main menu</span>
                        {/* <MenuIcon className="h-6 w-6" aria-hidden="true" /> */}
                      </button>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <div className="flex flex-col text-3xl  tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <div className="font-mw block xl:inline">
                    Life Is Short Eat Desserts First !!
                </div>
                <div className="block text-yellow-300 hover:text-black my-4 font-extrabold xl:inline">
                  Black Spoon
                </div>
              </div>
              <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              When you are able to shift your inner awareness to how you
               can serve others, and when you make this the central focus
                of your life, you will then be in a position to know true miracles in your 
              progress toward prosperity.
              </p>
              <div className="flex justify-center my-4">
                  <a href="./order" className="w-44 text-center text-3xl rounded-2xl p-2 text-white bg-yellow-300 hover:bg-white hover:text-yellow-500 hover:shadow-2xl">
                    Order Now
                  </a>
                  <a href="./login" className="w-44 text-center text-3xl rounded-2xl p-2 text-white bg-yellow-300 hover:bg-white hover:text-yellow-500 ml-4 hover:shadow-2xl">
                    Sign in
                  </a>
              </div>
            </div>
          </main>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
            src='images/restro1.jpg'
            alt=""
          />
        </div>
      </div>
    </div>
        </div>
    );
}