import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Router } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full bg-gray-700">
        <div className="w-full flex flex-col md:flex-row  justify-between p-4 text-white  ">
          <div className=" flex flex-col md:flex-row px-10 md:w-[40%] w-full text-center justify-center   md:justify-between">
            <div className="flex justify-between  ">
              <div className="">
                <h2 className="text-3xl">
                  Capital <span className="text-xl">shop</span>
                </h2>
              </div>
              <div className="mt-3"></div>
            </div>
            <div className=" mt-3  ">
              <ul className="  flex justify-center text-2xl">
                <li className="mx-5 ">
                  <button onClick={() => navigate("/home")} className="hover:bg-blue-900 p-2 rounded-md ">Collections</button>
                </li>
                <li className="mx-5">
                  <button onClick={() => navigate("/Men")} className="hover:bg-blue-900 p-2 rounded-md">Products</button>
                </li>
                <li className="mx-5">
                  {/* <button onClick={() => navigate("/Cart")}>Cart</button> */}
                </li>
              </ul>
            </div>
          </div>
          <ul className="flex flex-col md:flex-row text-center   px-10 mt-3">
            <li className="mx-5">
              {" "}
              <button onClick={() => navigate("/Logout")} className="hover:bg-red-900 p-2 rounded-md">Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
