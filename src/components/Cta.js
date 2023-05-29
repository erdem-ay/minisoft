import React from "react";
import ctaBg from "../assets/cta-bg.png";
import ctaEllipse from "../assets/cta-ellipse.png";
const Cta = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        height: "20vh",
      }}
    >
      <div className="flex items-center max-w-7xl justify-center mx-auto h-full">
        <div className="mx-4">
          <p className="font-roboto text-xl text-white max-w-xl">
            WooCommerce - the
            <span className="font-extrabold">
              most customizable eCommerce platform
            </span>
            for building
            <span className="font-extrabold">your online business.</span>
          </p>
        </div>
        <div className="mx-2">
          <button className="bg-[##5F37EF] border-2 text-white px-8 p-4 text-[12px] font-bold rounded-full">
            GET STARTED
          </button>
        </div>
      </div>
      <div className="flex justify-end max-w-5xl">
        <img
          src={ctaEllipse}
          alt=""
          className="w-12 h-12 -mt-9"
        />
      </div>
    </div>
  );
};
export default Cta;