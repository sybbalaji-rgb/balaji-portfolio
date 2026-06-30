import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "motion/react";

function Footer() {
  return (
    <footer className="relative bg-[#050507] border-t border-white/10 text-white py-14 px-6">

      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-black"
        >
          Balaji <span className="text-blue-500">S Y</span>
        </motion.h2>

        <p className="mt-3 text-gray-400 text-center">
          Frontend Developer • React Developer • Cloud Engineering Enthusiast
        </p>

        <div className="flex gap-6 mt-8">

          <a
            href="https://github.com/sybbalaji-rgb"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-400 hover:scale-125 transition-all duration-300"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/balaji-s-y-b22283380/"
            target="_blank"
            rel="noreferrer"
            className="text-2xl hover:text-blue-400 hover:scale-125 transition-all duration-300"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:sybbalaji@gmail.com"
            className="text-2xl hover:text-blue-400 hover:scale-125 transition-all duration-300"
          >
            <FaEnvelope />
          </a>

        </div>

        <div className="w-full h-px bg-white/10 my-8"></div>

        <p className="text-gray-500 text-center flex items-center gap-2">
          Made with <FaHeart className="text-red-500" /> using React & Tailwind CSS
        </p>

        <p className="text-gray-600 mt-3 text-sm">
          © {new Date().getFullYear()} Balaji S Y. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;