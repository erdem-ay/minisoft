import React from "react";
import footerBG from "../assets/footer-bg.png";
import Check from "../assets/Check";
import Circle from "../assets/Circle";
import Lock from "../assets/Lock";
import wooCommerce from "../assets/woo-commerce-footer.png"
const Footer = () => {
  return (
    <div
      className="p-8"
      style={{
        backgroundImage: `url(${footerBG})`,
        backgroundRepeat: "no-repeat",
        width: "100%",
        backgroundSize: "cover",
        height: "70vh",
      }}
    >
      <div className="flex justify-between max-w-5xl mx-auto">
        <div className="flex items-center gap-4">
          <Check className="w-8" />
          <p className="text-white">
            30 day <span className="font-semibold">money back guarantee</span>
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Circle className="w-8" />
          <p className="text-white">
            <span className="font-semibold">Support </span>teams across the
            world
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Lock className="w-8" />
          <p className="text-white">
            <span className="font-semibold">Safe & Secure </span> online payment
          </p>
        </div>
      </div>
      <div className="flex justify-center mt-28">
        <img src={wooCommerce} alt="" className="w-32" />
      </div>
      <div>
        <hr className="w-9/12 flex justify-center mx-auto opacity-40 mt-10" />
      </div>
      <div className="flex text-white justify-center mt-8 ">
        <div className="px-8">
          <h6 className=" font-roboto font-semibold text-md  leading-52 uppercase text-white">
            Who we are
          </h6>
          <div className="text-[12px] mt-2">
            <p>About</p>
            <p>
              Team
            </p>
            <p>
              Work With Us
            </p>
          </div>
        </div>
        <div className="px-8">
        <h6 className=" font-roboto font-semibold text-md  leading-52 uppercase text-white">
          Woocommerce
        </h6>
          <div className="text-[12px] mt-2">
            <p>Features</p>
            <p>Payments</p>
            <p>Marketing</p>
            <p>Shipping</p>
            <p>Extension Store</p>
            <p>eCommerce blog</p>
            <p>Development blog</p>
            <p>Ideas board</p>
            <p> Mobile App</p>
            <p>Community</p>
            <p>Style Guide</p>
            <p>Email Newsletter</p>
          </div>
        </div>
        <div className="px-8">
        <h6 className=" font-roboto font-semibold text-md  leading-52 uppercase text-white">
          Other products
        </h6>
          <div className="text-[12px] mt-2">
            <p>
              Storefront
            </p>
            <p>
              WooSlider
            </p>
            <p>Sensei</p>
            <p>Sensei Extensions</p>
          </div>
        </div>
        <div className="px-8">
        <h6 className=" font-roboto font-semibold text-md  leading-52 uppercase text-white">
          Support
        </h6>
          <div className="text-[12px] mt-2">
            <p>
              Documentation
            </p>
            <p>
              Customizations
            </p>
            <p>
              Support Policy
            </p>
            <p>
              Contact
            </p>
            <p>
              COVID-19 Resources
            </p>
            <p>
              Privacy Notice for
            </p>
            <p>
              California Users
            </p>
          </div>
        </div>
        <div className="px-8">
        <h6 className=" font-roboto font-semibold text-md  leading-52 uppercase text-white">
          We recommend
        </h6>
          <div className="text-[12px] mt-2">
            <p>
              WooExperts
            </p>
            <p>
              Hosting Solutions
            </p>
            <p>
              Pre-sales FAQ
            </p>
            <p>
              Success Stories
            </p>
            <p>
              Design Feedback Group
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;






