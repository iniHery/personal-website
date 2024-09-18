import { Github, Instagram, Twitter } from "lucide-react";
import { FaMediumM } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const text = "I'M\u00A0HERY";

  return (
    <div className="min-h-screen min-w-sm bg-black flex flex-col justify-center items-center p-4 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-8 gap-[1px] pointer-events-none animate-pulse">
        {[...Array(64)].map((_, i) => (
          <div key={i} className="border-gray-800 border-[0.1px]"></div>
        ))}
      </div>

      <div className="z-10">
        {/* Main content */}
        <div className="z-10 text-white text-start">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2">
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 mt-2 animate-textReveal overflow-hidden">
            <span className="inline-block text-sky-500">THE FRONTEND</span>
          </h2>
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 animate-textReveal overflow-hidden"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="inline-block text-sky-500">WEB DEV3LOPER</span>
          </h2>

          <button className="border-2 border-white px-6 py-2 mt-6 text-lg hover:bg-white hover:text-black transition-colors duration-300 animate-bounce">
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
              <Github
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
            {/* <Link
              href="https://twitter.com"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              <Twitter
                size={24}
                className="hover:scale-110 transition-transform duration-300"
              />
              <span className="sr-only">Twitter</span>
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
