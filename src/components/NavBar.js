import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../img/logo1-Rbg.png";
import "./navBar.css";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [show, handleShow] = useState(false);
  const { pathname } = useLocation();
  // console.log(pathname);

  useEffect(() => {
    //it listens to the scroll so when you scroll down app haas to do something
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // so return will remove event listener before the useEffect runs again
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`LandNav ${show && "LandNav__black"}`}>
      <NavLink
        id="logo"
        className="LandNav__logo"
        activeClassName="text-white"
        to="/"
      >
        <img src={logo} alt="Ram Real Estate" />
      </NavLink>
      <div className="LandNav__center">
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <NavLink
            className="text-red-200 hover:text-green-800"
            activeClassName=""
            to="/"
          >
            Home
          </NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
            whileHover={{ width: "50%" }}
          />
        </motion.p>

        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <NavLink
            className="text-red-200 hover:text-green-800"
            activeClassName=""
            to="/post"
          >
            Properties
          </NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/post" ? "100%" : "0%" }}
            whileHover={{ width: "50%" }}
          />
        </motion.p>

        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <NavLink className="" activeClassName="" to="/about">
            About us
          </NavLink>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/about" ? "100%" : "0%" }}
            whileHover={{ width: "50%" }}
          />
        </motion.p>
      </div>
      <div className="LandNav__right">
        <motion.p whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
          <a href="tel:+91 99871 30717">
            <FontAwesomeIcon style={{ marginRight: "10px" }} icon={faPhone} />
            9987130717
          </a>
        </motion.p>
      </div>
    </div>
  );
}

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #fbb03c;
  width: 0%;
  position: absolute;
  // bottom: -80%;
  // left: 60%;
`;

export default NavBar;
