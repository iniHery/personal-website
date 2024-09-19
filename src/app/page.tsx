"use client";

import { SiVercel } from "react-icons/si";
import { FaMediumM, FaGithub } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const text = "HERY";

  return (
    <div className="min-h-screen min-w-sm bg-black flex flex-col justify-center items-center md:p-32 p-6 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 pointer-events-none animate-pulse">
        {[...Array(300)].map((_, i) => (
          <div
            key={i}
            className="border-gray-600 border-[1px] w-full aspect-square"
          ></div>
        ))}
      </div>

      <div className="z-10">
        {/* Main content */}
        <div className="z-10 text-white text-start">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2">
            {text.split("").map((char, index) => (
              <span
                key={index}
                className="inline-block animate-textWave"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char}
              </span>
            ))}
          </h1>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 mt-2 animate-textReveal overflow-hidden">
            <span className="inline-block">FRONTEND</span>
          </h2>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 animate-textReveal overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-block">WEB</span>
          </h2>
          <h2
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-2 animate-textReveal overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-block">D3VELOPER</span>
          </h2>
        </div>

        <div>
          <button
            onClick={() =>
              (window.location.href =
                "https://mail.google.com/mail/?view=cm&fs=1&to=idabagusheryana60@gmail.com&su=Subjek%20Pesan&body=Isi%20pesan")
            }
            className="border-2 border-white text-white px-6 py-2 mt-6 text-lg hover:bg-white hover:text-black transition-colors duration-300 animate-bounce"
          >
            Contact me
          </button>
        </div>

        {/* Social icons */}
        <div className="inline-flex justify-start">
          <div className="flex justify-center space-x-6 mt-8 animate-fadeIn">
            <Link
              href="https://github.com/iniHery"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FaGithub
                size={24}
                className="hover:scale-110 transition-transform duration-300"
              />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://medium.com/@idabagusheryana60"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <FaMediumM
                size={24}
                className="hover:scale-110 transition-transform duration-300"
              />
              <span className="sr-only">Medium</span>
            </Link>
            <Link
              href="https://vercel.com/iniherys-projects"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <SiVercel
                size={24}
                className="hover:scale-110 transition-transform duration-300"
              />
              <span className="sr-only">Vercel</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
