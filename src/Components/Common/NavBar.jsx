import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const NavBar = ({ isModalOpen }) => {
  const location = useLocation();
  const [active, setActive] = useState("Home");

  const hashLinks = [
    { placeholder: "Education", url: "/#education" },
    { placeholder: "Projects", url: "/#projects" },
    { placeholder: "Recommendations", url: "/#recommendations" },
    { placeholder: "Contact", url: "/#contact" },
  ];

  useEffect(() => {
    const currentPath = location.pathname + location.hash;

    switch (currentPath) {
      case "/":
        setActive("Home");
        break;
      case "/skills":
        setActive("Skills");
        break;
      case "/#education":
        setActive("Education");
        break;
      case "/#projects":
        setActive("Projects");
        break;
      case "/#recommendations":
        setActive("Recommendations");
        break;
      case "/#contact":
        setActive("Contact");
        break;
      default:
        setActive("Home");
    }
  }, [location]);

  return (
    <div
      className={`w-full h-24 shadow-md shadow-blue-100 transition-opacity duration-300 ${
        isModalOpen ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="w-[85%] mx-auto flex justify-between items-center h-[100px]">

        <Link to="/" onClick={() => setActive("Home")}>
          <img src={Logo} alt="Logo" width={140} />
        </Link>

        <nav className="flex gap-8">
          <Link
            to="/"
            onClick={() => setActive("Home")}
            className={`${
              active === "Home" ? "active" : ""
            } p-2 rounded-md`}
          >
            Home
          </Link>

          <Link
            to="/skills"
            onClick={() => setActive("Skills")}
            className={`${
              active === "Skills" ? "active" : ""
            } p-2 rounded-md`}
          >
            Skills
          </Link>

          {hashLinks.map((link) => (
            <a
              key={link.placeholder}
              href={link.url}
              onClick={() => setActive(link.placeholder)}
              className={`${
                active === link.placeholder ? "active" : ""
              } p-2 rounded-md`}
            >
              {link.placeholder}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
