import Link from "next/link";
import React from "react";

const ThankYouPage = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-gradient-to-r to-indigo-600">
      <div className="bg-white p-8 rounded-lg  max-w-lg w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h1>
        <p className="text-lg text-gray-600 mb-6">
          Your email has been successfully submitted. We will get back to you
          shortly.
        </p>
        <div>
          <a href="/">
            <button className=" text-black px-6 py-3 rounded-full text-lg hover:bg-black hover:text-white  transition duration-300">
              Go to Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
