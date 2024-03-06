import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import classes from "./HeroSection.module.css";
import clsx from "clsx";
import { Text, Button, Highlight } from "../common";
import { appStore, heroImg, playStore } from "../../images";
import Features from "./Facility/Facility";
const HeroSection = () => {
  return (
    <div className={classes.wrapper}>
      <div className={clsx("container", classes.container, "paddingTop")}>
        <div className={classes.textContainer}>
          <div className={classes.badgeAndLabel}>
            <Text lg semiBold primaryDefault className={classes.badge}>
              5000+
            </Text>{" "}
            <Text lg base800>
              People are waiting!
            </Text>
          </div>{" "}
          <h2 className={classes.heading}>
            Revolutionize Your Finances: Introducing{" "}
            <Highlight>
              Triple <strong>Pay</strong>
            </Highlight>
          </h2>
          <Text xl2 base800 className={classes.info}>
            In the world where innovation is the heartbeat of success TriplePay
            emerges as a transformative.
          </Text>
          <div className={classes.buttonContainer}>
            <Button
              btnPrimary
              iconBtn
              size="lg"
              className={classes.button}
              onClick={() => {}}
            >
              Join Waiting List <TbArrowUpRight className={classes.arrow} />
            </Button>
            <div className={classes.downloadContainer}>
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.iconContainer}
              >
                <img src={appStore} alt="#" className={classes.icon} />
              </a>{" "}
              <a
                href="#/"
                target="_blank"
                rel="noreferrer"
                className={classes.iconContainer}
              >
                <img src={playStore} alt="#" className={classes.icon} />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <img src={heroImg} alt="#" className={classes.img} />
        </div>
      </div>
      <Features />
    </div>
  );
};

export default HeroSection;
