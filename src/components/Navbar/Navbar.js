import React, { useState, useEffect } from "react";
import { TbArrowUpRight } from "react-icons/tb";
import { IoMdClose } from "react-icons/io";
import { AiOutlineAlignRight } from "react-icons/ai";
import classes from "./Navbar.module.css";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../images";
import { Button } from "../common";

import clsx from "clsx";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const services = [
  //   {
  //     title: "Service Name",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  //   },
  //   {
  //     title: "Service Name",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  //   },
  //   {
  //     title: "Service Name",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  //   },
  //   {
  //     title: "Service Name",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  //   },
  //   {
  //     title: "Service Name",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  //   },
  //   {
  //     title: "Service Name",
  //     info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
  //   },
  // ];

  const navItems = [
    { navItem: "Features", to: "/features" },
    { navItem: "Cards", to: "/cards" },
    { navItem: "Services", to: "/services" },
    { navItem: "Security", to: "/security" },
    { navItem: "News", to: "/news" },
    { navItem: "Faq", to: "/faq" },
    { navItem: "How to", to: "/howto" },
  ];

  return (
    <div
      className={[classes.wrapper, isScrolled && classes.wrapperBg].join(" ")}
    >
      <header className={[classes.header, "container"].join(" ")}>
        <Link
          className={[classes.logoContainer].join(" ")}
          to="/"
          onClick={() => setSidebar((prev) => !prev)}
        >
          {" "}
          <img src={logo} alt="#" className={classes.logo} />
        </Link>
        <div
          className={[classes.navItems, sidebar && classes.sidebar].join(" ")}
        >
          {navItems.map((el, i) => (
            <NavLink
              key={i}
              to={el.to}
              onClick={() => setSidebar(false)}
              className={({ isActive }) =>
                isActive
                  ? clsx(classes.navItem, classes.navActive)
                  : classes.navItem
              }
            >
              {el.navItem}
            </NavLink>
          ))}

          <Button
            btnPrimary
            iconBtn
            size="lg"
            className={classes.button}
            onClick={() => {}}
            mlAuto
          >
            Join Waiting List <TbArrowUpRight className={classes.arrow} />
          </Button>
        </div>{" "}
        <div className={classes.buttonContainer}>
          {sidebar ? (
            <IoMdClose
              className={classes.icon}
              onClick={() => setSidebar((prev) => !prev)}
            />
          ) : (
            <AiOutlineAlignRight
              className={clsx(classes.icon, classes.hamburger)}
              onClick={() => setSidebar((prev) => !prev)}
            />
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
