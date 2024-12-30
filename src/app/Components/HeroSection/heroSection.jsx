"use client";
export default function HeroSection() {
  const handleScroll = () => {
    console.log("cms")
    const nextSection = document.getElementById('service-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-16">
  {/* Background Image Section with Container */}
  <div className="lg:homepage-container relative lg:min-h-screen min-h-[85vh]">
    <div className="relative">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      {/* Background Image Section */}
      <div
  className="ImageBackgroundWrap flex bg-cover bg-center lg:bg-fixed bg-scroll lg:h-[100vh] h-[85vh] sm:bg-top"
  style={{
    backgroundImage: "url(/images/hero.webp)",
  }}
>
        {/* Content Section */}
        <div className="self-end max-w-4xl mx-auto pt-32 lg:pb-24 pb-5 mb-10 relative z-20">
          <div className="TextBackground bg-opacity-80 p-8 lg:p-12 text-center text-white">
            <h2 className="text-2xl lg:text-3xl font-bold">Maitri Associates</h2>
            <p className="mt-2 lg:mt-4 text-md lg:text-lg font-bold">
              A TRUE FRIEND FOR YOUR HOME
            </p>
            <div
              onClick={handleScroll}
              className="absolute ml-[-15px] left-1/2 bottom-5 lg:bottom-10 transform -translate-x-1/2 animate-bounce"
            >
              <svg
                className="w-8 h-8 lg:w-10 lg:h-10 text-white"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  );
}
