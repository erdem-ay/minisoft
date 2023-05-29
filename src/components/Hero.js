import React from "react";
import featurePng from "../assets/hero-bg.png";
import features from "../assets/hero.png";
const Hero = () => {
  return (
    <div
      className="pt-20"
      style={{
        backgroundImage: `url(${featurePng})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="flex justify-between items-center h-full">
        <div className="w-full">
          <div className="mx-auto max-w-xl mb-40">
            <div>
              <h2 className="text-5xl text-[#272D4E]">
                Building exactly the eCommerce website you want.
              </h2>
            </div>
            <div className="mt-4">
              <p className="text-[#94A2B3]">
                WooCommerce is a customizable, open-source eCommerce platform
                built on WordPress. Get started quickly and make your way.
              </p>
            </div>
            <div className="flex items-center mt-4">
              <button className="bg-[#7854F7] text-white px-4 p-1 rounded-2xl">Start a New Store</button>
              <span className="mx-4 text-[#94A2B3]">or</span>
              <p className="text-[#299EF3]">Customize & Extend</p>
            </div>
          </div>
        </div>
        <div className="w-7/12">
          <img src={`${features}`} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Hero;