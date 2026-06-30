import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex justify-center items-center z-9999 p-6">
      <div className="bg-[#111] rounded-3xl max-w-4xl w-full overflow-hidden border border-white/10">

        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-2xl text-white hover:text-red-400"
        >
          <FaTimes />
        </button>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-80 object-cover"
        />

        <div className="p-8">

          <h2 className="text-4xl font-bold">
            {project.title}
          </h2>

          <p className="text-gray-400 mt-5 leading-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mt-8">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-blue-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-5 mt-10">

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="bg-blue-600 px-6 py-3 rounded-full flex items-center gap-3"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="border border-white/20 px-6 py-3 rounded-full flex items-center gap-3"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ProjectModal;