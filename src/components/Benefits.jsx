import React from "react";
import Laptop from "../assets/laptop.jpg";
const Benefits = () => {
  return (
    <div className="bg-white">
      <div className="w-full max-w-[1240px] mx-auto grid md:grid-cols-2 border-t p-6 border-blue-400">
        <div className="flex justify-center flex-col">
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
        </div>
        <img className="w-[500px]" src={Laptop} alt="" />
      </div>
    </div>
  );
};

export default Benefits;
