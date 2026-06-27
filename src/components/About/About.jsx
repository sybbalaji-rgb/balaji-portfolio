import { motion } from "motion/react";

function About() {
  return (
    <section className="bg-[#09090B] py-28 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-5xl font-bold text-center mb-16">
          About <span className="text-blue-500">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Card */}
          <div className="rounded-3xl bg-white/5 border border-white/10 p-10 backdrop-blur-xl">

            <div className="w-40 h-40 rounded-full bg-linear-to-br from-blue-500 to-cyan-400 mx-auto flex items-center justify-center text-5xl font-bold">
              BS
            </div>

            <h3 className="text-center text-2xl font-bold mt-8">
              Balaji S Y
            </h3>

            <p className="text-center text-gray-400 mt-3">
              Frontend Developer
            </p>

          </div>

          {/* Right Card */}

          <div className="rounded-3xl bg-white/5 border border-white/10 p-10 backdrop-blur-xl">

            <h3 className="text-3xl font-bold mb-6">
              My Journey
            </h3>

            <p className="text-gray-400 leading-8">
              I am a B.Tech Information Technology student at
              Sri Krishna College of Engineering and Technology.
              I completed my Frontend Developer internship at
              Marma Fintech where I gained practical experience
              in React and modern web development.
            </p>

            <p className="text-gray-400 leading-8 mt-6">
              My long-term goal is to become a Cloud Engineer.
              I enjoy learning new technologies, participating
              in hackathons, building projects, and continuously
              improving my development skills.
            </p>

          </div>

        </div>
      </motion.div>
    </section>
  );
}

export default About;