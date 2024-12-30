import Image from "next/image";

const MyServices = () => {
  const services = [
    {
      id: 1,
      src: "/images/OUR SERVICES PHOTOS/ARCHITECTURAL DESIGN.webp",
      title: "Architecture Projects",
    },
    {
      id: 2,
      src: "/images/OUR SERVICES PHOTOS/OFFICE INTERIOR DESIGN.webp",
      title: "Office Interior Projects",
    },
    {
      id: 3,
      src: "/images/OUR SERVICES PHOTOS/RESIDENCE INTERIOR DESIGN.webp",
      title: "Residence Interior projects",
    },
  ];

  return (
    <section className="bg-[#fef8f4] py-12" id='service-section'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center text-center  rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
            >
              {/* Fixed height and width for consistency */}
              <div className="w-[400px] h-[300px] ">
                <Image
                  src={service.src}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="object-fit w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{service.title}</h3>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="justify-center flex items-center mt-16 mb-8"><div className="border-black border-2 px-6 py-2 cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out font-medium">View All Services</div></div> */}
      </div>
    </section>
  );
};

export default MyServices;
