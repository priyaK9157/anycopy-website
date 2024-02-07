import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineSound } from "react-icons/ai";
import { IoCartOutline } from "react-icons/io5";
import { FaMixcloud } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import { MdHomeRepairService } from "react-icons/md";
import { FaArrowPointer } from "react-icons/fa6";
import { IoMdPhonePortrait } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { CiDollar } from "react-icons/ci";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [clicked, setclicked] = useState("");
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
      <nav
        className="relative max-w-7xl relative w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between ">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            ANYCOPY
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
            <a
              className="font-medium text-blue-600 sm:py-6 dark:text-blue-500"
              href="/features"
              aria-current="page"
            >
              Features
            </a>
            <a
              className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500 cursor-pointer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(true)}
              onClick={() => setclicked("solutions")}
            >
              Solutions
            </a>
            <a
              className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="/pricing"
            >
              Pricing
            </a>
            <a
              className="font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500"
              href="/resources"
            >
              Resources
            </a>

            <a
              className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-blue-600 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500"
              href="https://app.anycopy.co/Login"
            >
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
              </svg>
              Log in
            </a>
          </div>

          {(clicked === "solution" || isHovered === true) && (
            <div className="bg-transparent pt-16 w-[65rem] font-sans-serif font-size-[18px] text-[#303030] line-height-[1.5] line-spacing-0 z-50 absolute bg-white w-screen gap-20 flex justify-around shadow-xl text-lg p-5 h-screen overflow-hidden">
              <div className="flex flex-col gap-5 ">
                <h1 class="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-xl leading-loose ">
                  By industry
                </h1>
                <div className="flex flex-col gap-5 text-[1rem] leading-6 text-slate-600 ">
                  <div className="flex items-center gap-2 font-sans">
                    <AiOutlineSound />
                    <p className="">Agencies</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoCartOutline />
                    <p>Ecommerce</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMixcloud />
                    <p>SaaS</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaWarehouse />
                    <p>Small Businesses</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaWarehouse />
                    <p>B2B Marketing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdHomeRepairService />
                    <p>Service Specialist</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 class="mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-xl leading-loose ">
                  By Use Cases
                </h1>
                <div className="flex flex-col gap-5 text-[1rem] leading-6 text-slate-600 ">
                  <div className="flex items-center gap-2 leading-6 text-slate-600">
                    <FaArrowPointer />
                    <p>PPC</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <IoMdPhonePortrait />
                    <p>Social Ads</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdOutlineMailOutline />
                    <p>Email Marketing</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiStar />
                    <p>Lead Generation</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CiDollar />
                    <p>Sell Online</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <h1 class="custom-heading mb-4 text-xl font-extrabold text-gray-900 dark:text-white md:text-xl lg:text-xl leading-loose">
                  Flexible limits and extra support
                </h1>
                <div className="flex flex-col gap-5 text-[1rem] leading-6 text-slate-600 max-w-[20rem]">
                  Our Concierge plans scale to any amount of traffic and
                  conversions—and with hands-on training and support, you have
                  everything you need to keep your business growing.
                </div>
                <img
                  className="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2] h-[20rem] w-[20rem] object-cover"
                  src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80"
                  alt="Image Description"
                />
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Modal;
