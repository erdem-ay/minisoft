import React from "react";
import Logo from "../assets/Logo";
import Search from "../assets/Search";

const Navbar = () => {
  return (
    <div className="h-0">
      <div className="flex justify-between py-4 h-20 items-center">
        <div className="flex ">
          <div className="mx-8">
            <Logo className="w-40" />
          </div>
          <div className="flex w-full items-center">
            <div className="mx-4">
              <h2>Sell</h2>
            </div>
            <div className="mx-4">
              <h2>Marketplace</h2>
            </div>
            <div className="mx-4">
              <h2>Community</h2>
            </div>
            <div className="mx-4">
              <h2>Develop</h2>
            </div>
            <div className="mx-4">
              <h2>Resources</h2>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="mx-4">
            <h2>Log in</h2>
          </div>
          <div className="mx-4">
            <button className="bg-[#7854F7] text-white px-4 p-1 rounded-md">Get started</button>
          </div>
          <div className="mx-4">
            <Search className="w-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;