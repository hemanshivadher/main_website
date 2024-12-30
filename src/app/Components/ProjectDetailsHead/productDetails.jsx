"use client";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { projects } from "@/app/constants";
import { useMemo } from "react";

const SlickSlider = dynamic(() => import("./slider"), {
  ssr: false, // This ensures the component is not SSR'd
});

export default function ProductDetails() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const projectData = useMemo(() => {
    return projects.find((item) => item.id == id);
  }, [id]);

  const isLoading = !projectData; // Show shimmer when data is not available

  return (
    <section className="space-y-16 py-16">
      <div className="lg:px-16 px-8 flex flex-col lg:flex-row items-center lg:space-x-16 space-y-12 lg:space-y-0 justify-center">
        {/* Text Section */}
        {isLoading ? (
          <div className="w-full lg:w-1/2 text-center lg:text-left self-center animate-pulse">
            <div className="p-4 lg:p-16 space-y-4">
              <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto lg:mx-0"></div>
              <div className="h-6 bg-gray-300 rounded w-1/2 mx-auto lg:mx-0"></div>
              <div className="h-4 bg-gray-300 rounded w-full mx-auto lg:mx-0"></div>
              <div className="h-4 bg-gray-300 rounded w-5/6 mx-auto lg:mx-0"></div>
            </div>
          </div>
        ) : (
          <div className="w-full lg:w-1/2 text-center lg:text-left self-center">
            <div className="p-4 lg:p-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {projectData.name}
              </h2>
              <p className="text-lg text-gray-700 mb-6 font-medium">
                {projectData.category}
              </p>
              {/* <p className="text-lg text-gray-700 mb-6 font-medium">
                {projectData.description}
              </p> */}
            </div>
          </div>
        )}
      </div>
      <div>
        {isLoading ? (
          <div className="h-[470px] bg-gray-300 animate-pulse"></div>
        ) : (
          <SlickSlider images={projectData?.gallery} />
        )}
      </div>
    </section>
  );
}

