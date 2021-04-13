import React from "react";
import { Link } from "react-router-dom";
import ContactFooter from "./standard/contacts.component";
import CornerComponent from "./standard/corner.component";
import EndOfFooter from "./standard/endfooter.component";
import LeftFooter from "./standard/leftside.component";
import SocialComponent from "./standard/social.component";

export const Footer = () => {
  return (
    <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <CornerComponent />
          <LeftFooter />
        </div>
        <ContactFooter />
        <SocialComponent />
      </div>
      <EndOfFooter />
    </div>
  );
};

export default Footer;
