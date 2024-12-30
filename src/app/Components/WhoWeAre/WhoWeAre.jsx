"use client";

import Link from "next/link";

export default function WhoWeAre({ isAboutUsPage = false }) {
  return (
    <section className="space-y-16 ">
      <div className="lg:px-16 px-8 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-12 lg:space-y-0">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/image_3.webp"
            alt="Person working"
            className="w-full h-[500px] object-cover   rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <div className="p-4 lg:p-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Who We Are
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              We are a team of passionate architects and designers dedicated to
              shaping spaces that evoke emotion and spark creativity. With years
              of experience and a portfolio spanning residential, commercial,
              and hospitality projects, we pride ourselves on delivering
              solutions that are as unique as our clients. From concept to
              completion, we collaborate closely to ensure every detail is
              perfect.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
