"use client";

import React from "react";

export default function OurStory() {
  return (
    <section className="space-y-16 py-16">
      <div className="lg:px-16 px-8 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-12 lg:space-y-0">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="p-4 lg:p-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              From humble beginnings to becoming a trusted name in architecture
              and interior design, our journey is a testament to passion,
              perseverance, and a relentless pursuit of excellence.
            </p>
            <ul className="space-y-4 text-lg text-gray-700 list-none font-medium text-start">
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Inception:</strong>
                <span className="text-[14px]">
                  Founded with a vision to revolutionize spaces and redefine the
                  essence of living.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Growth:</strong>
                <span className="text-[14px]">
                  Earning the trust of clients through innovative designs and
                  exceptional service.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Milestones:</strong>
                <span className="text-[14px]">
                  Achieving recognition for outstanding projects across diverse
                  domains.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Future:</strong>
                <span className="text-[14px]">
                  Continuing our mission to craft spaces that inspire and
                  endure.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/image_6.png"
            alt="Our Story"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
