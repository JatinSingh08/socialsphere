import React from "react";
import { Logo, profileImage } from "../../assets";
import { BsMoonStars } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { authSelector } from "../../features/authSlice";
const Header = () => {
  const navigate = useNavigate();
  const { foundUser } = useSelector(authSelector);
  return (
    <div className="flex  items-center justify-between px-[160px] bg-white h-20 fixed left-0 right-0 top-0 z-50">
      <div
        className="text-2xl font-semibold flex items-center justify-center  text-violet-500 italic hover:cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="SocialSphere" />

        <h1 className=" text-[#60A5FA] text-3xl logo">SocialSphere</h1>
      </div>
      <form class={`flex items-center`}>
        <div className={`relative w-96`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search"
            className="w-full py-1 pl-12 pr-4 text-gray-500 border rounded-3xl  bg-[#faf0eb] focus:bg-[#ffece2] focus:outline-none "
            name="searchValue"
            // value={state.filters.searchValue}
          />
        </div>
      </form>
      <div className="flex items-center justify-center gap-7">
        <BsMoonStars className="w-7 h-7 hover:cursor-pointer" fill="#5EBBFF" />
        <img
          src={foundUser?.profile}
          alt=""
          className="w-14 h-14 rounded-full  object-contain"
        />
      </div>
    </div>
  );
};

export default Header;
