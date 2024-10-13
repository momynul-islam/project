import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faAmazon,
  faApple,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-center items-center gap-10 py-8 border-t border-green-400">
      <div className="flex flex-col">
        <div className="space-x-4 font-semibold text-lg">
          <a
            href=""
            className="hover:text-green-400 hover:scale-105 transition duration-300"
          >
            Jobs
          </a>
          <a
            href=""
            className="hover:text-green-400 hover:scale-105 transition duration-300"
          >
            Contacts
          </a>
          <a
            href=""
            className="hover:text-green-400 hover:scale-105 transition duration-300"
          >
            About
          </a>
        </div>
        <div className="space-x-4 font-semibold text-lg">
          <a
            href=""
            className="hover:text-green-400 hover:scale-105 transition duration-300"
          >
            Terms of use
          </a>
          <a
            href=""
            className="hover:text-green-400 hover:scale-105 transition duration-300"
          >
            Privacy Policy
          </a>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <FontAwesomeIcon
          icon={faGooglePlay}
          size="4x"
          className="hover:text-green-400 hover:scale-105 transition duration-300"
        />
        <FontAwesomeIcon
          icon={faAmazon}
          size="4x"
          className="hover:text-green-400 hover:scale-105 transition duration-300"
        />
        <FontAwesomeIcon
          icon={faApple}
          size="4x"
          className="hover:text-green-400 hover:scale-105 transition duration-300"
        />
      </div>
    </footer>
  );
};

export default Footer;
