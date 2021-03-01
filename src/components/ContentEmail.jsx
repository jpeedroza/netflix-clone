import React from "react";

export default function contentEmail() {
  return (
    <>
      <h4 className="text-white mt-3 mb-6 text-xl font-light">
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <div className="w-full flex justify-center items-center pb-20 border-b-8 border-gray-300 bg-black">
        <input
          className="w-4/12 h-16 p-3"
          type="email"
          placeholder="Email address"
        />
        <button className="h-16 px-6 bg-red-600 text-white" type="submit">
          Get Started
        </button>
      </div>
    </>
  );
}
