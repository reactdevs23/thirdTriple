import React, { useState } from "react";
import { FaFacebook, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { BiLogoInstagramAlt } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";

import classes from "./Footer.module.css";
import clsx from "clsx";

import { Text } from "../common";
import {
  appStore,
  isoCertified,
  licensedAndRegulated,
  playStore,
  qrCode,
  logo,
} from "../../images";
import { Link } from "react-router-dom";

const Footer = () => {
  const [name, setName] = useState("");
  const socials = [
    { icon: <FaFacebook className={classes.socialIcon} />, to: "#" },
    { icon: <FaLinkedinIn className={classes.socialIcon} />, to: "#" },
    { icon: <BiLogoInstagramAlt className={classes.socialIcon} />, to: "#" },
    { icon: <BsTwitterX className={classes.socialIcon} />, to: "#" },
    { icon: <FaYoutube className={classes.socialIcon} />, to: "#" },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.topBar}>
          <div className={classes.logoAndSocials}>
            <div className={classes.logoContainer}>
              {" "}
              <img src={logo} alt="#" className={classes.logo} />
            </div>

            <div className={classes.socials}>
              {socials.map((el, i) => (
                <a
                  key={i}
                  href={el.to}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.social}
                >
                  {el.icon}
                </a>
              ))}
            </div>
          </div>
          <div className={classes.inputContainer}>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={classes.input}
            />
            <div className={classes.mailContainer}>
              <MdOutlineMail className={classes.mailIcon} />
            </div>
          </div>
        </div>
        <footer className={classes.footer}>
          <div className={classes.itemsContainer}>
            <p className={classes.heading}>Services</p>
            <div className={classes.items}>
              <Link to="#" className={classes.item}>
                Services One
              </Link>
              <Link to="#" className={classes.item}>
                Services Two
              </Link>
              <Link to="#" className={classes.item}>
                Services Three
              </Link>
              <Link to="#" className={classes.item}>
                Services Four
              </Link>
              <Link to="#" className={classes.item}>
                Services Five
              </Link>
              <Link to="#" className={classes.item}>
                Services Six
              </Link>
            </div>
          </div>
          <div className={classes.itemsContainer}>
            <p className={classes.heading}>Company</p>
            <div className={classes.items}>
              <Link to="#" className={classes.item}>
                About
              </Link>
              <Link to="#" className={classes.item}>
                Security
              </Link>
              <Link to="#" className={classes.item}>
                Licenses
              </Link>
              <Link to="#" className={classes.item}>
                Corporate
              </Link>
              <Link to="#" className={classes.item}>
                Career
              </Link>
            </div>
          </div>{" "}
          <div className={classes.itemsContainer}>
            <p className={classes.heading}>Resources</p>
            <div className={classes.items}>
              <Link to="#" className={classes.item}>
                News & Blog
              </Link>
              <Link to="#" className={classes.item}>
                API Documentation
              </Link>
              <Link to="#" className={classes.item}>
                Help Center
              </Link>
              <Link to="#" className={classes.item}>
                Quick Contact
              </Link>
              <Link to="#" className={classes.item}>
                Quick Contact
              </Link>
              <Link to="#" className={classes.item}>
                Services Six
              </Link>
            </div>
          </div>{" "}
          <div className={classes.itemsContainer}>
            <p className={classes.heading}>Legal</p>
            <div className={classes.items}>
              <Link to="#" className={classes.item}>
                Privacy Policy
              </Link>
              <Link to="#" className={classes.item}>
                Cookie Policy
              </Link>
              <Link to="#" className={classes.item}>
                Terms of Use
              </Link>
              <Link to="#" className={classes.item}>
                Services Terms
              </Link>
              <Link to="#" className={classes.item}>
                Payments Terms
              </Link>
              <Link to="#" className={classes.item}>
                Transfer Terms
              </Link>
            </div>
          </div>
          <div className={classes.downloadContainer}>
            <div className={classes.buttonContainer}>
              <button className={classes.appStore}>
                <img src={appStore} alt="#" className={classes.buttonIcon} />
                <p className={classes.labelAndName}>
                  <span className={classes.label}>Download from the</span>
                  <span className={classes.storeName}>App Store</span>
                </p>
              </button>
              <button className={classes.googlePlay}>
                <img src={playStore} alt="#" className={classes.buttonIcon} />
                <p className={classes.labelAndName}>
                  <span className={classes.label}>GET IT ON</span>
                  <span className={classes.storeName}>Google Play</span>
                </p>
              </button>
            </div>
            <img src={qrCode} alt="#" className={classes.qrCode} />
          </div>
        </footer>
        <div className={classes.bottomBar}>
          <Text base600 md>
            © 2024 Brand Name. All right reserved.
          </Text>
          <div className={classes.certifiedContainer}>
            <div className={classes.certified}>
              <img src={isoCertified} alt="#" className={classes.icon} />
              <Text base600 md>
                ISO Certified, Lorem ipsum dummy text
              </Text>
            </div>
            <div className={classes.licensed}>
              <img
                src={licensedAndRegulated}
                alt="#"
                className={classes.icon}
              />
              <Text base600 md>
                Licensed & Regulated Lorem ipsum dummy text
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
