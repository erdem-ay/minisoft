import React, { useState } from "react";
import testimonialBG from "../assets/testimonialsbg.png";
import testimonialCardBG from "../assets/testimonials-card-bg.png";
import testimonials from "../assets/testimonials.png";
import LeftArrow from "../assets/LeftArrow";
import RightArrow from "../assets/RightArrow";
const Testimonials = () => {
  const [commentNumber, setCommentNumber] = useState(0);
  const handleComment = (number) => {
    console.log(number)
    let _commentNumber
    if(commentNumber + number < 0){
        _commentNumber = (commentNumber + number + 3) % 3
    }else{
        _commentNumber = (commentNumber + number) % 3
    }
    setCommentNumber(_commentNumber)
  };
  return (
    <div
      className="mt-16"
      style={{
        backgroundImage: `url(${testimonialBG})`,
        backgroundRepeat: "no-repeat",
        width: "100vw",
        backgroundSize: "cover",
        // height: "90vh",
      }}
    >
      <div className="">
        <div className="relative bg-red lg:h-[80vh] md:h-[50vh] max-w-7xl mx-auto">
          <div className="absolute w-full top-4">
            <div className="mx-auto w-60 lg:w-80 bg-red">
              <h2 className="md:text-lg lg:text-3xl text-center">
                Trusted by Agencies & Store Owners
              </h2>
            </div>
          </div>
          <div className="w-screen max-w-7xl h-full">
            <img src={`${testimonials}`} alt="" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="">
              <img src={`${testimonialCardBG}`} alt="" className="w-[700px]" />
            </div>
            <div className="flex justify-end gap-2 mr-16">
              <LeftArrow className="cursor-pointer w-6" onClick={() => handleComment(-1)} />
              <RightArrow className="cursor-pointer w-12" onClick={() => handleComment(1)} />
            </div>
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-80 text-center text-[#94A2B3]">
              <p className="text-sm md:text-md">
                {comments[commentNumber].comment}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
let comments = [
  {
    id: 1,
    comment: `No other eCommerce platform allows people to start for free and
        grow their store as their business grows. More importantly,
        WooCommerce doesn't charge you a portion of your profits as your
        business grows!`,
  },
  {
    id: 2,
    comment: `Another testimonail, No other eCommerce platform allows people to start for free and
        grow their store as their business grows. More importantly,
        WooCommerce doesn't charge you a portion of your profits as your
        business grows!`,
  },
  {
    id: 3,
    comment: `And Another testimonail, No other eCommerce platform allows people to start for free and
        grow their store as their business grows. More importantly,
        WooCommerce doesn't charge you a portion of your profits as your
        business grows!`,
  },
];






