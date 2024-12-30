"use client";

import React from "react";

export default function OurValues() {
  return (
    <section className="space-y-16 py-16">
      <div className="lg:px-16 px-8 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-12 lg:space-y-0">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/image_5.jpeg"
            alt="Our Values"
            className="w-full h-[500px] object-cover rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="p-4 lg:p-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              Our core values guide us in every decision we make, ensuring that
              we stay true to our mission of creating meaningful spaces.
            </p>
            <ul className="space-y-4 text-lg text-gray-700 list-none font-medium text-start">
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Integrity:</strong>
                <span className="text-[14px]">
                  Upholding honesty and transparency in all our interactions.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Innovation:</strong>
                <span className="text-[14px]">
                  Embracing creativity to deliver groundbreaking solutions.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Sustainability:</strong>
                <span className="text-[14px]">
                  Prioritizing eco-friendly practices for a better future.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Collaboration:</strong>
                <span className="text-[14px]">
                  Fostering partnerships with clients, teams, and communities.
                </span>
              </li>
              <li className="flex flex-wrap">
                <strong className="mr-2 flex-shrink-0">Excellence:</strong>
                <span className="text-[14px]">
                  Striving for perfection in every project we undertake.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
