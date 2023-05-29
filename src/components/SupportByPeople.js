import React from "react";
import supportBG from "../assets/support-by-people.png";
const SupportByPeople = () => {
  return (
    <div className="mt-20">
      <div>
        <h3 className="text-center text-4xl">Supported by real people</h3>
        <div className="max-w-xl mx-auto">
        <p className="text-center text-[#94A2B3] my-4">
          Our team of Happiness Engineers works remotely from 58 countries
          providing customer support across multiple time zones.
        </p>
        </div>
      </div>
      <div className="mx-auto h-[173px] w-[1000px] overflow-hidden">
        <img src={`${supportBG}`} alt=""  />
      </div>
    </div>
  );
};
export default SupportByPeople;