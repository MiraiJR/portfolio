import { createFileRoute } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Academic } from "../components/Academic";
import { AboutMe } from "../components/AboutMe";
import { TechnicalSkill } from "../components/TechicalSkill";
import { WorkExperience } from "../components/WorkExperience";
import { Contact } from "../components/Contact";
import { PersonalProject } from "../components/PersonalProject";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export const Index = () => {
  return (
    <div className="p-5 flex flex-col gap-10">
      <Header />
      <AboutMe />
      <Academic />
      <TechnicalSkill />
      <WorkExperience />
      <PersonalProject />
      <Contact />
      <ScrollToTop />
    </div>
  );
};

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <button
        onClick={scrollToTop}
        className="bg-blue-500 text-white rounded-full p-3 shadow-lg hover:bg-blue-600 transition-colors"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </div>
  );
};

export default ScrollToTop;

export const Route = createFileRoute("/")({
  component: Index,
});
