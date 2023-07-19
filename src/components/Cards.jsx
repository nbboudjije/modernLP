import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img className="w-20 mx-auto mt-[-3rem]" src={Single} alt="single" />
          <h2 className="font-bold text-2xl text-center py-8">Single User</h2>
          <p className="text-center text-4xl">$99</p>
          <div className="text-center">
            <p className="py-2 border-b border-b-grey mx-8 mt-8">
              200GB STORAGE
            </p>
            <p className="py-2 border-b border-b-grey">SEND UP TO 2GB/S</p>
            <p className="py-2 border-b border-b-grey">1 GRANTED USER</p>
          </div>
          <button className="bg-[#0e2954] rounded-lg p-3 w-[200px] text-white mx-auto font-bold my-6">
            7 Day Free Trial!
          </button>
        </div>
        <div className="shadow-xl rounded-lg bg-slate-100 flex flex-col p-4 my-8 md:my-0 hover:scale-105 duration-300">
          <img src={Double} alt="" className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Double User</h2>
          <p className="text-center text-4xl">$149</p>
          <div className="text-center">
            <p className="py-2 border-b border-b-grey mt-8 mx-8">
              400GB STORAGE
            </p>
            <p className="py-2 border-b border-b-grey">SEND UP TO 4GB/S</p>
            <p className="py-2 border-b border-b-grey">2 GRANTED USER</p>
          </div>
          <button className="bg-[#081831] rounded-lg p-3 w-[200px] text-white mx-auto font-bold my-6">
            7 Day Free Trial!
          </button>
        </div>
        <div className="shadow-xl rounded-lg flex flex-col p-4 my-4 hover:scale-105 duration-300">
          <img src={Triple} alt="" className="w-20 mx-auto mt-[-3rem]" />
          <h2 className="text-2xl font-bold text-center py-8">Triple User</h2>
          <p className="text-center text-4xl">$199</p>
          <div className="text-center">
            <p className="py-2 border-b border-b-grey mt-8 mx-8">
              400GB STORAGE
            </p>
            <p className="py-2 border-b border-b-grey">SEND UP TO 4GB/S</p>
            <p className="py-2 border-b border-b-grey">2 GRANTED USER</p>
          </div>
          <button className="bg-[#0e2954] rounded-lg p-3 w-[200px] text-white mx-auto font-bold my-6">
            7 Day Free Trial!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
