import React from "react";
import Twitter from "../assets/Twitter";
import Facebook from "../assets/Facebook";
import Union from "../assets/Union";
import Instagram from "../assets/Instagram";
import automatic from "../assets/automatic.png";
const FooterBanner = () => {
  return (
    <div className="flex p-4">
      <div className="flex w-4/12 justify-center gap-8">
        <a href="https://twitter.com/">
          <Twitter className="w-6" />
        </a>
        <a href="https://facbook.com/">
          <Facebook className="w-6" />
        </a>
        <a href="https://facbook.com/">
          <Union className="w-6" />
        </a>
        <a href="https://facbook.com/">
          <Instagram className="w-6" />
        </a>
      </div>
      <div className="w-5/12">
        <p className="text-xs">
          COPYRIGHT WOOCOMMERCE 2020.{" "}
          <a href="/terms-condition">TERMS & CONDITIONS PRIVACY POLICY</a>
        </p>
      </div>
      <div className="w-3/12">
        <img src={automatic} alt="" className="h-4" />
      </div>
    </div>
  );
};
export default FooterBanner;
