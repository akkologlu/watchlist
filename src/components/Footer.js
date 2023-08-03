import React from "react";
import { BsFacebook, BsTwitter, BsYoutube, BsInstagram } from "react-icons/bs";

function Footer() {
  return (
    <div className="text-primary flex justify-center mt-24">
      <div className=" flex flex-col space-y-10 items-center md:items-start">
        <div className="flex space-x-5 text-3xl">
          <div>
            <a href="https://facebook.com" className="hover:text-secondary">
              <BsFacebook />
            </a>
          </div>
          <div>
            <a href="https://instagram.com" className="hover:text-secondary">
              <BsInstagram />
            </a>
          </div>
          <div>
            <a href="https://twitter.com" className="hover:text-secondary">
              <BsTwitter />
            </a>
          </div>
          <div>
            <a href="https://youtube.com" className="hover:text-secondary">
              <BsYoutube />
            </a>
          </div>
        </div>
        <div className="flex flex-col text-sm md:flex-row md:space-x-10 space-y-10 md:space-y-0">
          <div className="flex flex-col space-y-3 ">
            <div>
              <a href="#" className="hover:text-secondary">
                Audio Description
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-secondary">
                Investor Relations
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-secondary">
                Legal Notices
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-3 ">
            <div>
              <a href="#" className="hover:text-secondary">
                Audio Description
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-secondary">
                Investor Relations
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-secondary">
                Legal Notices
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-3 ">
            <div>
              <a href="#" className="hover:text-secondary">
                Audio Description
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-secondary">
                Investor Relations
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-secondary">
                Legal Notices
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-3 ">
            <div>
              <a href="#" className="hover:text-secondary">
                Audio Description
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-secondary">
                Investor Relations
              </a>
            </div>
            <div>
              <a href="#" className="hover:text-secondary">
                Legal Notices
              </a>
            </div>
          </div>
        </div>
        <div className="w-full text-center pb-6">
          <p>
            Designed and Developed by{" "}
            <span className="hover:text-secondary">
              <a href="https://github.com/akkologlu">Akkologlu</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
