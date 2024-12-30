"use client";

import React from "react";

export default function OurProcess() {
  return (
    <section className="space-y-16 py-16">
      <div className="lg:px-16 px-8 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-12 lg:space-y-0">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <div className="p-4 lg:p-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              We follow a meticulous process to ensure that every project is
              executed flawlessly, from start to finish.
            </p>
            <ul className="space-y-4 text-lg text-gray-700 font-medium">
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Consultation:</strong>
                <span className="text-[14px]">
                  Understanding your vision and requirements.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">
                  Concept Development:
                </strong>
                <span className="text-[14px]">
                  Crafting creative and practical design ideas.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">
                  Detailed Planning:
                </strong>
                <span className="text-[14px]">
                  Finalizing designs, materials, and execution plans.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Execution:</strong>
                <span className="text-[14px]">
                  Turning plans into reality with precision and care.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Completion:</strong>
                <span className="text-[14px]">
                  Delivering spaces that exceed expectations.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <img
            src="/images/image_4.jpeg"
            alt="Process steps illustration"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
