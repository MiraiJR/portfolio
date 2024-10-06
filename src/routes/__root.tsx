import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";

export const Root = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <div className="bg-black flex items-center text-white min-h-screen flex-col">
      <div className="container mx-auto">
        <div className="bg-black p-3 flex gap-3 justify-between items-center">
          <div className="text-xl font-bold">
            <Link
              to="/"
              className="hover:text-red-600 transition-colors duration-300"
            >
              Trương Văn Hào
            </Link>
          </div>
          <div className="flex gap-6 font-bold">
            {[
              "About",
              "Academic",
              "Skills",
              "Experience",
              "Personal project",
              "Contact",
            ].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(" ", "")}`}
                className={`hover:text-yellow-400 transition-colors duration-300 ${
                  activeLink === link ? "text-yellow-400" : "text-white"
                }`}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export const Route = createRootRoute({
  component: Root,
});
