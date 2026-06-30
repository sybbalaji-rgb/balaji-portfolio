import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

const socialLinks = [
  {
    icon: <FaGithub />,
    link: "https://github.com/sybbalaji-rgb",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/balaji-s-y-b22283380",
    name: "LinkedIn",
  },
  {
    icon: <FaEnvelope />,
    link: "mailto:sybbalaji@gmail.com",
    name: "Email",
  },
  {
    icon: <FaFileDownload />,
    link: "/resume.pdf",
    name: "Resume",
  },
];

function SocialDock() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-5 z-50">

      {socialLinks.map((item) => (

        <a
          key={item.name}
          href={item.link}
          target="_blank"
          rel="noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-blue-600 hover:border-blue-400 hover:scale-110 transition-all duration-300 shadow-lg"
        >

          <span className="text-2xl">
            {item.icon}
          </span>

          {/* Tooltip */}

          <span className="absolute left-16 whitespace-nowrap px-4 py-2 rounded-lg bg-black text-sm opacity-0 group-hover:opacity-100 transition-all">
            {item.name}
          </span>

        </a>

      ))}

    </div>
  );
}

export default SocialDock;