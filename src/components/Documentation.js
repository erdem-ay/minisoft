import React from "react";
import documentationBg from "../assets/documentation.png";
import developWithoutLimits from "../assets/develop-without-limits.png";
import knowOurGlobalCommunity from "../assets/know-our-global-community.png";
const Documentation = () => {
  return (
    <div
      className="pt-20 mt-20"
      style={{
        backgroundImage: `url(${documentationBg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 80vh",
      }}
    >
      <div className="w-screen max-w-5xl mx-auto h-full text-white">
        <div className="flex flex-col -mt-24">
          <div className="flex">
            <div className="w-4/12">
              <img src={developWithoutLimits} alt="" className="w-full" />
            </div>
            <div className="w-5/12 ml-8 mt-16 text-white">
              <h3 className=" font-semibold text-3xl leading-10 py-2">
                Develop <br /> Without Limits
              </h3>
              <p className="py-1 w-480 h-150 left-845 top-2247 font-roboto font-normal text-sm leading-30 text-white">
                WooCommerce is developer friendly, too. Built with a REST API,
                WooCommerce is scalable and can integrate with virtually any
                service. Design a complex store from scratch, extend a store for
                a client, or simply add a single product to a WordPress
                site—your store, your way.
              </p>
              <button className="px-8 py-4 mt-2 text-center bg-green-500 rounded-full">
                Read the Documentation
              </button>
            </div>
          </div>
          <div className="self-end justify-self-end flex justify-end -mt-12">
            <div className="w-5/12 mt-4 text-white">
              <h3 className=" font-semibold text-3xl leading-10 py-2">
                Know our
                <br /> Global Community
              </h3>
              <p className="py-2 w-480 h-150 left-845 top-2247 font-roboto font-normal text-sm leading-30 text-white">
                WooCommerce is one of the fastest-growing eCommerce communities.
                We’re proud that the helpfulness of the community and a wealth
                of online resources are frequently cited as reasons our users
                love it. There are 80+ meetups worldwide!
              </p>
              <button className="px-8 py-4 mt-2 text-center bg-green-500 rounded-full">
                Read the Documentation
              </button>
            </div>
            <div className="w-4/12 -mt-10">
              <img src={knowOurGlobalCommunity} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Documentation;