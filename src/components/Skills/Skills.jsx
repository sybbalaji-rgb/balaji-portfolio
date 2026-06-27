import { motion } from "motion/react";

const skillGroups = [
  {
    title: "Programming",
    skills: ["C", "C++", "Python", "Java (Learning)"],
  },
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code"],
  },
  {
    title: "Currently Learning",
    skills: ["MySQL", "Ubuntu Linux", "Cloud Computing"],
  },
];

function Skills() {
  return (
    <section className="bg-[#09090B] py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16"
        >
          My <span className="text-blue-500">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-gray-200"
                  >
                    {skill}
                  </span>
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