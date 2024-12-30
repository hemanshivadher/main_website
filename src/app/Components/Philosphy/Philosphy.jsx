"use client";

import Link from "next/link";

export default function Philosophy({ isAboutUsPage = false }) {
  return (
    <section className="space-y-16 py-16">
      <div className="lg:px-16 px-8 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-12 lg:space-y-0">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <div className="p-4 lg:p-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Design Philosophy
            </h2>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              At the heart of our work lies a commitment to creating spaces that
              inspire, comfort, and endure. We believe that great design
              seamlessly blends functionality with aesthetics, ensuring every
              project reflects the unique needs and aspirations of those who use
              it. Guided by sustainability, innovation, and timeless elegance,
              our designs are not just visually captivating but also
              thoughtfully curated to stand the test of time.
            </p>
            <p className="text-lg text-gray-700 mb-6 font-medium">
              We approach every project with fresh eyes, ensuring that each
              design tells its own story—your story. Our mission is to transform
              ideas into tangible realities that enhance how people live, work,
              and interact with their environments.
            </p>
            {!isAboutUsPage && (
              <a
                href="/about-us"
                className="px-6 py-2 border border-gray-900 text-lg text-gray-900 rounded-md hover:bg-gray-900 hover:text-white transition duration-300 font-medium"
              >
                Learn More
              </a>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2">
          <img
            src="/images/image_2.avif"
            alt="Person working"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
