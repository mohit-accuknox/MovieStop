import React from "react";
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="flex justify-center items-center flex-col gap-5 text-white p-2">
        <div className="mt-7 flex justify-center items-center gap-3">
          <img src="/images/HeaderLogo.svg" alt="" />
          <h2>MovieStop</h2>
        </div>
        <div className="w-full flex justify-between items-start flex-wrap gap-5 sm:mb-24 md:mb-14 mt-10 p-2">
          <ul>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              Home
            </li>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              Contact Us
            </li>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              Terms of services
            </li>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              About Us
            </li>
          </ul>
          <ul>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              You Must Watch
            </li>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              Recent release
            </li>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              Top IMDB
            </li>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              Live
            </li>
          </ul>
          <ul>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              FAQ
            </li>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              Premium
            </li>
            <li className="hover:border-b-2 hover:border-b-red-700 transition ease-linear delay-75 hover:cursor-pointer">
              Privacy policy
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
