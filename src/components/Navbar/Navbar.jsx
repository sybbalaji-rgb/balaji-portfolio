import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}

        <a
          href="#home"
          className="text-4xl font-black tracking-wider"
        >
          SY<span className="text-blue-500">B</span>
        </a>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-10">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="relative text-gray-300 hover:text-blue-400 transition after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all"
            >
              {item.name}
            </a>
          ))}

        </nav>

        {/* Resume */}

        <a
          href="/resume.pdf"
          target="_blank"
          className="hidden lg:flex items-center gap-3 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full font-semibold transition hover:scale-105"
        >
          <FaDownload />
          Resume
        </a>

        {/* Mobile */}

        <button
          className="lg:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="lg:hidden bg-[#111111]/95 backdrop-blur-xl">

          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-5 text-center border-b border-white/10 hover:bg-blue-500/10"
            >
              {item.name}
            </a>
          ))}

          <a
            href="/resume.pdf"
            target="_blank"
            className="block text-center py-5 text-blue-400"
          >
            Download Resume
          </a>

        </div>
      )}
    </header>
  );
}

export default Navbar;