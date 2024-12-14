import React from "react";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow h-16 bg-white">
      <div className="container mx-auto flex items-center px-4 justify-between">
        <div className="h-16">
          <Link to={"/"}>
            <img src={logo} className="h-full" />
          </Link>
        </div>

        <div className="hidden lg:flex items-center w-full border max-w-sm  justify-between rounded-full focus-within:shadow pl-4">
          <input
            type="text"
            placeholder="search product here..."
            className="focus:outline-none  w-full"
          />
          <div className="bg-red-600 h-8 flex justify-center items-center text-white min-w-[50px] text-lg rounded-r-full">
            <IoSearch />
          </div>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            <FaRegUserCircle />
          </div>
          <div className="text-2xl relative">
            <span>
              <FaShoppingCart />
            </span>
            <div className="text-sm p-1 w-5 h-5 bg-red-600 text-white flex items-center justify-center rounded-full absolute -right-2 -top-2">
              0
            </div>
          </div>
          <div>
            <Link
              to={"/login"}
              className="px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
