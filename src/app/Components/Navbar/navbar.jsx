"use client";
import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [menuOpen]);

  return (
    <header className="bg-white text-black shadow-lg w-full z-50">
      <nav className="container mx-auto  lg:px-6  flex justify-end items-center">

        <div className="hidden md:flex space-x-6 mt-2 mr-5">
          <a href="/projects" className="hover:text-gray-600">
            Projects
          </a>
          <a href="#footer" className="hover:text-gray-600">
            Lets Connect!
          </a>
        </div>
        

        {/* Mobile Menu Toggle with Animation */}
        <button
          className={`md:hidden text-3xl focus:outline-none transform transition-transform duration-300 ${menuOpen ? "rotate-180" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <AiOutlineClose className="transition-all" />
          ) : (
            <GiHamburgerMenu className="transition-all" />
          )}
        </button>

        <a href="/">
          {/* <div className="text-2xl font-bold">Maitri Associates</div> */}
          <Image src={"/Maitri Logo++VE_page-0001.jpg"} width={50} height={50} alt="main" className="scale-120 lg:scale-150 overflow-hidden mr-0" />
        </a>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white  z-40 flex justify-center items-center mt-12">
          {" "}
          {/* mt-16 for navbar height */}
          <div className="flex flex-col space-y-6 text-xl">
            <a
              href="/projects"
              className="hover:text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Projects
            </a>
            <a
              href="#footer"
              className="hover:text-gray-600"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              Lets Connect!
            </a>
          </div>
        </div>
      )}
      
    </header>
  );
}
