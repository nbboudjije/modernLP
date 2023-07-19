import React from "react";
import {
  FaFacebookSquare,
  FaDribbbleSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full bg-black">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
          <h1 className="text-3xl font-bold">NADJIB</h1>
          <p className="py-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
            blanditiis dicta deserunt a fugit adipisci, magni repellat saepe
            quia suscipit?
          </p>
          <div className="flex justify-between my-6 md:w-[75%]">
            <FaFacebookSquare size={32} />
            <FaDribbbleSquare size={32} />
            <FaGithubSquare size={32} />
            <FaTwitterSquare size={32} />
            <FaInstagram size={32} />
          </div>
        </div>
        <div className="lg:col-span-2 flex justify-between">
          <div>
            <h6>Solution</h6>
            <ul>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
            </ul>
          </div>
          <div>
            <h6>Solution</h6>
            <ul>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
            </ul>
          </div>
          <div>
            <h6>Solution</h6>
            <ul>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
            </ul>
          </div>
          <div>
            <h6>Solution</h6>
            <ul>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
              <li className="py-2 ">Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
