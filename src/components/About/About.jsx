import { motion } from "motion/react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaCloud,
  FaLaptopCode,
} from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative bg-[#09090B] text-white py-28 px-6"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 blur-[140px] rounded-full"></div>

  <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full"></div>

</div>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <p className="text-blue-400 uppercase tracking-widest">
            Get To Know Me
          </p>

          <h2 className="text-5xl font-black mt-3">
            About <span className="text-blue-500">Me</span>
          </h2>
          </motion.div>

        {/* Main */}

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold">
              Hi, I'm Balaji 👋
            </h3>

            <p className="text-gray-400 mt-8 leading-8">

              I'm an Information Technology student at
              <span className="text-white font-semibold">
                {" "}Sri Krishna College of Engineering and Technology
              </span>.

              <br /><br />

              I completed my Frontend Developer Internship at
              <span className="text-blue-400">
                {" "}Marma Fintech
              </span>,
              where I gained practical experience in building responsive web
              applications using modern frontend technologies.

              <br /><br />

              My long-term goal is to become a
              <span className="text-blue-400 font-semibold">
                {" "}Cloud Engineer
              </span>.
              Currently I'm strengthening my skills in React, JavaScript,
              Linux, Git and Cloud fundamentals while continuously building
              projects.

            </p>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(59,130,246,0.25)] transition-all duration-300">

              <FaGraduationCap className="text-4xl text-blue-500" />

              <h4 className="text-xl font-bold mt-5">
                Education
              </h4>

              <p className="text-gray-400 mt-3">
                B.Tech Information Technology
              </p>

              <p className="text-gray-500">
                SKCET
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition">

              <FaBriefcase className="text-4xl text-blue-500" />

              <h4 className="text-xl font-bold mt-5">
                Internship
              </h4>

              <p className="text-gray-400 mt-3">
                Frontend Developer
              </p>

              <p className="text-gray-500">
                Marma Fintech
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition">

              <FaCloud className="text-4xl text-blue-500" />

              <h4 className="text-xl font-bold mt-5">
                Career Goal
              </h4>

              <p className="text-gray-400 mt-3">
                Cloud Engineer
              </p>

            </div>

            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-blue-500 transition">

              <FaLaptopCode className="text-4xl text-blue-500" />

              <h4 className="text-xl font-bold mt-5">
                Currently Learning
              </h4>

              <p className="text-gray-400 mt-3">
                React • Linux • Git • Cloud
              </p>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;