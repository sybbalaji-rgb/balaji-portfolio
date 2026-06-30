import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";
import profile from "../../assets/profile.png";
import {
  FaDownload,
  FaArrowRight,
  FaCertificate,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";
import {
FaGithub,
FaLinkedin,
FaEnvelope
} from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-[#09090B] text-white overflow-hidden flex items-center"
    >
      {/* Background Glow */}
      {/* Background Effects */}

<div className="absolute top-0 left-0 w-112.5 h-112.5 bg-blue-600/20 blur-[140px] rounded-full"></div>

<div className="absolute bottom-0 right-0 w-100 h-100 bg-cyan-500/20 blur-[140px] rounded-full"></div>

<div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-162.5 h-162.5 bg-blue-500/5 rounded-full blur-[180px]"></div>
<div className="absolute inset-0 overflow-hidden">

  <div className="absolute w-3 h-3 bg-blue-500 rounded-full top-20 left-20 animate-ping"></div>

  <div className="absolute w-2 h-2 bg-cyan-400 rounded-full top-60 right-40 animate-pulse"></div>

  <div className="absolute w-2 h-2 bg-blue-400 rounded-full bottom-32 left-60 animate-bounce"></div>

  <div className="absolute w-3 h-3 bg-cyan-500 rounded-full bottom-20 right-20 animate-pulse"></div>

</div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-blue-400 text-xl font-medium mb-4">
            👋 Hello, I'm
          </p>

          <h1 className="text-6xl lg:text-7xl font-black leading-tight">
            BALAJI{" "}
            <span className="text-blue-500">
              S Y
            </span>
          </h1>

          <div className="mt-6 text-3xl lg:text-4xl font-semibold h-14">
  <TypeAnimation
    sequence={[
      "☁️ Cloud Engineer",
      2000,
      "⚛️ React Developer",
      2000,
      "💻 Frontend Developer",
      2000,
      "🚀 Problem Solver",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
    className="text-blue-400"
  />
</div>

          <p className="mt-8 text-lg leading-8 text-gray-400 max-w-2xl">
            Passionate Information Technology student at
            <span className="text-white font-semibold">
              {" "}Sri Krishna College of Engineering and Technology
            </span>.
            Completed a Frontend Developer Internship at
            <span className="text-blue-400">
              {" "}Marma Fintech
            </span>.
            Building modern web applications today while preparing for a
            successful career in Cloud Engineering.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-blue-600 hover:bg-blue-500 hover:scale-110 hover:shadow-[0_0_35px_#3B82F6] transition-all duration-300 px-8 py-4 rounded-full font-semibold"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#projects"
              className="flex items-center gap-3 border border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 hover:scale-110 transition-all duration-300 px-8 py-4 rounded-full font-semibold"
            >
              <FaArrowRight />
              View Projects
            </a>

          </div>
          <div className="flex gap-5 mt-10">

<a
href="https://github.com/sybbalaji-rgb"
target="_blank"
className="text-3xl hover:text-blue-400 hover:scale-125 transition"
>

<FaGithub/>

</a>

<a
href="https://linkedin.com/in/balaji-s-y-b22283380"
target="_blank"
className="text-3xl hover:text-blue-400 hover:scale-125 transition"
>

<FaLinkedin/>

</a>

<a
href="mailto:sybbalaji@gmail.com"
className="text-3xl hover:text-blue-400 hover:scale-125 transition"
>

<FaEnvelope/>

</a>

</div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16">

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-lg hover:border-blue-500 transition">
              <FaCertificate className="mx-auto text-blue-400 text-3xl mb-3" />
              <h3 className="text-3xl font-bold">20+</h3>
              <p className="text-gray-400 text-sm mt-2">
                Certifications
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-lg hover:border-blue-500 transition">
              <FaBriefcase className="mx-auto text-blue-400 text-3xl mb-3" />
              <h3 className="text-3xl font-bold">1</h3>
              <p className="text-gray-400 text-sm mt-2">
                Internship
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-lg hover:border-blue-500 transition">
              <FaGraduationCap className="mx-auto text-blue-400 text-3xl mb-3" />
              <h3 className="text-3xl font-bold">2029</h3>
              <p className="text-gray-400 text-sm mt-2">
                Graduation
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-cyan-400 blur-[120px] opacity-40 scale-125 animate-pulse"></div>

            {/* Image */}
            <motion.div
  animate={{
    y: [0, -12, 0],
    rotate: [0, 1, 0, -1, 0],
  }}
  transition={{
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  }}
  whileHover={{
    scale: 1.05,
  }}
              className="relative w-80 h-80 lg:w-107.5 lg:h-107.5 rounded-full bg-linear-to-r from-blue-500 via-cyan-400 to-blue-700 p-2 shadow-[0_0_80px_rgba(59,130,246,0.35)]"
            >
              <img
                src={profile}
                alt="Balaji S Y"
                className="w-full h-full rounded-full object-cover border-4 border-[#09090B]"
              />
            </motion.div>

          </div>
        </motion.div>

      </div>
      <motion.div
animate={{ y: [0, 10, 0] }}
transition={{
repeat: Infinity,
duration: 1.5
}}
className="absolute bottom-8 left-1/2 -translate-x-1/2"
>

<a href="#about">

<div className="flex flex-col items-center">

<span className="text-gray-400 text-sm">
Scroll Down
</span>

<div className="text-3xl mt-2">
⌄
</div>

</div>

</a>

</motion.div>
    </section>
  );
}

export default Hero;