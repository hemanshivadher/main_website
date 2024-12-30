import { projects } from "@/app/constants";
import OurProcess from "../../Components/OurProcess";
import OurStory from "../../Components/OurStory";
import OurValues from "../../Components/OurValues";
import Philosophy from "../../Components/Philosphy";
import WhoWeAre from "../../Components/WhoWeAre";
import Link from "next/link";
import { FaExternalLinkSquareAlt } from "react-icons/fa";

export default function AboutUS() {
  const sortedProjects = projects.sort((a, b) => a.id - b.id);
  return (
    <div>
      <section className="space-y-16">
        {/* Background Image Section with Container */}
        <div className="lg:homepage-container relative min-h-[50vh] lg:px-16">
          {" "}
          {/* Apply padding on large screens only */}
          <div className="relative">
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>{" "}
            {/* Semi-transparent black overlay */}
            {/* Background Image Section */}
            <div
              className="ImageBackgroundWrap flex bg-cover bg-center bg-fixed h-[50vh]"
              style={{
                backgroundImage: "url(/images/image_1.avif)",
              }}
            >
              {/* Content Section */}
              <div className="self-end max-w-4xl mx-auto pt-32 pb-24 mb-[-50] relative z-20">
                {" "}
                {/* Ensure content is above overlay */}
                <div className="TextBackground bg-opacity-80 p-12 text-center text-white">
                  <h2 className="text-4xl font-bold">Our Projects</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 space-y-16 mt-2 cursor-pointer">
        <div className=" lg:homepage-container lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProjects.map((project) => (
            <div
              key={project.id}
              className=" p-6 rounded-l hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <a href={`/projectdetails?id=${project.id}`}>
                <div className="relative">
                  <img
                    src={project.main.src}
                    alt={project.name}
                    className="w-full h-48 object-fit rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
                    <p className="text-white text-lg font-semibold">
                      <FaExternalLinkSquareAlt />
                    </p>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mt-4 text-center">
                  {project.name}
                </h2>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
