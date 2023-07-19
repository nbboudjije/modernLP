import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full bg-black py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-xl font-bold p-2 ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </h1>
          <p className="text-center p-2 my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            odit doloremque facilis.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-2 items-center justify-between w-full sm:flex-row mb-4">
            <input
              type="email"
              placeholder="entre your email!"
              className="p-3 rounded-md"
            />
            <button className="bg-[#0e2954] p-3 ml-4 rounded-full font-bold mt-2">
              Notify Me!
            </button>
          </div>
          <p className="p-2">
            We Care About Protecting your data, You can read our{" "}
            <span className="text-[#0e2954]">Privacy Policy!</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
