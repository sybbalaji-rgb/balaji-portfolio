import { motion } from "motion/react";
import {
  FaGithub,
  FaCodeBranch,
  FaCode,
  FaCertificate,
  FaLaptopCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaCodeBranch />,
    number: "8+",
    title: "Repositories",
  },
  {
    icon: <FaCode />,
    number: "31+",
    title: "Contributions",
  },
  {
    icon: <FaCertificate />,
    number: "20+",
    title: "Certificates",
  },
  {
    icon: <FaLaptopCode />,
    number: "1",
    title: "Internship",
  },
];

const repos = [
  {
    title: "Balaji Portfolio",
    desc: "Personal portfolio built using React + Tailwind CSS.",
    link: "https://github.com/sybbalaji-rgb/balaji-portfolio",
  },
  {
    title: "Attendance System",
    desc: "Attendance management project.",
    link: "https://github.com/sybbalaji-rgb/Attendance",
  },
  {
    title: "Kids Learning App",
    desc: "Educational application for children.",
    link: "https://github.com/sybbalaji-rgb/kids-learning-app",
  },
  {
    title: "Study AI",
    desc: "AI based learning assistant.",
    link: "https://github.com/sybbalaji-rgb/STUDY-AI-18.0",
  },
];

function Github() {
  return (
    <section
      id="github"
      className="bg-[#09090B] py-28 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="uppercase tracking-[8px] text-blue-400">
            OPEN SOURCE
          </p>

          <h2 className="text-5xl font-black mt-4">
            GitHub{" "}
            <span className="text-blue-500">
              Activity
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Passionate about building projects, learning new technologies,
            and continuously improving through open-source development.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-7 mt-20">

          {stats.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-[#161616] rounded-3xl border border-white/10 p-8 text-center hover:border-blue-500 transition-all"
            >

              <div className="text-4xl text-blue-500 flex justify-center mb-5">
                {item.icon}
              </div>

              <h1 className="text-5xl font-black">
                {item.number}
              </h1>

              <p className="text-gray-400 mt-3">
                {item.title}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Contribution Graph */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20"
        >

          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=sybbalaji-rgb&theme=tokyo-night&hide_border=true"
            alt="Contribution Graph"
            className="rounded-3xl w-full"
          />

        </motion.div>

        {/* Featured Repositories */}

        <div className="mt-20">

          <h3 className="text-3xl font-bold mb-10 text-center">
            Featured Repositories
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">

            {repos.map((repo, index) => (

              <motion.a
                href={repo.link}
                target="_blank"
                rel="noreferrer"
                key={index}
                whileHover={{
                  scale: 1.03,
                }}
                className="bg-[#161616] rounded-3xl p-8 border border-white/10 hover:border-blue-500 transition-all"
              >

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-4">

                    <FaGithub className="text-3xl text-blue-500" />

                    <h4 className="text-2xl font-bold">
                      {repo.title}
                    </h4>

                  </div>

                  <FaExternalLinkAlt className="text-blue-400" />

                </div>

                <p className="text-gray-400 mt-6">
                  {repo.desc}
                </p>

              </motion.a>

            ))}

          </div>

        </div>

        {/* GitHub Button */}

        <div className="flex justify-center mt-16">

          <a
            href="https://github.com/sybbalaji-rgb"
            target="_blank"
            rel="noreferrer"
            className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all hover:scale-105"
          >
            <FaGithub />
            Visit GitHub
          </a>

        </div>

      </div>
    </section>
  );
}

export default Github;