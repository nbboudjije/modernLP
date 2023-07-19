import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className=" bg-white mt-20 py-16 px-4">
      <div className="w-full max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] mx-auto" />
        <div className="flex flex-col justify-center items-start gap-1">
          <p className="font-bold text-[#1f6e8c]">DATA DASHBOARD ANALYSIS</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Your Data Effectivly
          </h1>
          <p className="mb-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae
            magni omnis, nulla perferendis fuga sequi adipisci illum numquam, id
            rem delectus itaque? Reiciendis dignissimos blanditiis amet, dolores
            cumque nam quos.
          </p>
          <button className="bg-black text-[#1f6e8c] rounded-lg p-3 font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
