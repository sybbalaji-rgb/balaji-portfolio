import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Github from "./components/Github/Github";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import SocialDock from "./components/SocialDock/SocialDock";

function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <SocialDock />
      <ScrollTop />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Github />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

