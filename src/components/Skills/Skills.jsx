import { motion } from "motion/react";
import {
  FaCode,
  FaLaptopCode,
  FaTools,
  FaCloud,
} from "react-icons/fa";

const skillData = [
  {
    title: "Programming",
    icon: <FaCode />,
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 80 },
      { name: "C", level: 85 },
    ],
  },

  {
    title: "Frontend",
    icon: <FaLaptopCode />,
    skills: [
      { name: "React", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },

  {
    title: "Tools",
    icon: <FaTools />,
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "VS Code", level: 95 },
      { name: "MySQL", level: 75 },
    ],
  },

  {
    title: "Currently Learning",
    icon: <FaCloud />,
    skills: [
      { name: "AWS", level: 10 },
      { name: "Linux", level: 40 },
      { name: "Java", level: 75 },
      { name: "Cloud Computing", level: 20 },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#09090B] py-28 px-6 text-white overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-blue-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[6px] text-blue-400">
            My Expertise
          </p>

          <h2 className="text-5xl font-black mt-4">
            My <span className="text-blue-500">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {skillData.map((category, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              viewport={{ once: true }}
              className="rounded-3xl bg-white/5 border border-white/10 p-8 backdrop-blur-xl hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.2)] transition-all"
            >

              <div className="flex items-center gap-4 mb-8">

                <div className="text-3xl text-blue-400">
                  {category.icon}
                </div>

                <h3 className="text-3xl font-bold">
                  {category.title}
                </h3>

              </div>

              <div className="space-y-6">

                {category.skills.map((skill) => (

                  <div key={skill.name}>

                    <div className="flex justify-between mb-2">

                      <span>{skill.name}</span>

                      <span className="text-blue-400">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="h-full rounded-full bg-linear-to-r from-blue-500 to-cyan-400"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;