import { ArrowDown, Download } from "lucide-react";
import { motion } from "motion/react";
import profile from "../../data/profile";

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#09090B]">

      {/* Background Glow */}
      <div className="absolute w-150 h-150 rounded-full bg-blue-500/20 blur-[180px]" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e3a8a20,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6 max-w-5xl"
      >
        <p className="text-blue-400 text-lg font-medium">
          Hello, I'm
        </p>

        <h1 className="mt-4 text-6xl md:text-8xl font-black bg-linear-to-r from-white via-blue-300 to-cyan-400 bg-clip-text text-transparent">
          {profile.name}
        </h1>

        <h2 className="mt-6 text-2xl md:text-4xl text-gray-300">
          {profile.role}
        </h2>

        <p className="mt-8 text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
          {profile.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-5 mt-12">
          <button className="px-8 py-4 rounded-full bg-linear-to-r from-blue-500 to-cyan-500 hover:scale-105 transition-all duration-300 font-semibold">
            View Projects
          </button>

          <button className="flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
            <Download size={20} />
            Resume
          </button>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12">
          {profile.tech.map((item) => (
            <span
              key={item}
              className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {item}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8"
      >
        <ArrowDown className="text-gray-500" size={30} />
      </motion.div>

    </section>
  );
}

export default Hero;