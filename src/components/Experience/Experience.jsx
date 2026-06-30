import { motion } from "motion/react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experience = [
  {
    year: "2022 - 2025",
    title: "HSC / SSLC",
    company: "Sri Vijay Vidhyalaya Matric Hr. Sec. School",
    description:" Completed my Higher Secondary and Secondary Education with a strong foundation in Science and Mathematics, which sparked my interest in technology and programming.",
    icon: <FaGraduationCap />,
    color: "bg-cyan-500",
  },
  {
    year: "2025 - Present",
    title: "B.Tech Information Technology",
    company: "Sri Krishna College of Engineering and Technology",
    description:
      "Learning Data Structures, Cloud Computing, Linux, React, Java and Software Engineering while building real-world projects.",
    icon: <FaGraduationCap />,
    color: "bg-cyan-500",
  },
  {
    year: "2026",
    title: "Frontend Developer Intern",
    company: "Marma Fintech",
    description:
      "Built responsive web applications using React, JavaScript and modern frontend technologies. Collaborated with the development team and improved UI performance.",
    icon: <FaBriefcase />,
    color: "bg-blue-500",
  },

];

function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[#09090B] text-white py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-80 h-80 bg-blue-600/10 blur-[150px] rounded-full"></div>
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-blue-400">
            My Journey
          </p>

          <h2 className="text-5xl font-black mt-3">
            Experience &
            <span className="text-blue-500"> Education</span>
          </h2>
        </motion.div>

        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-5 top-0 w-1 h-full bg-blue-500/30"></div>

          {experience.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-20 pb-16"
            >
              {/* Circle */}
              <div
                className={`absolute left-0 top-2 w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}
              >
                {item.icon}
              </div>

              {/* Card */}
              <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8 hover:border-blue-500 hover:shadow-[0_0_35px_rgba(59,130,246,.25)] transition">

                <span className="text-blue-400 font-semibold">
                  {item.year}
                </span>

                <h3 className="text-3xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-2 font-medium">
                  {item.company}
                </p>

                <p className="text-gray-400 mt-5 leading-8">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;