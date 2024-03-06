import React from "react";
import classes from "./PreRegister.module.css";
import clsx from "clsx";
import { appStore, playStore, preRegisterImg } from "../../images";
import { Text, SectionHeading, Button } from "../common";
const PreRegister = () => {
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.textContainer}>
          <SectionHeading xl3 base900 className={classes.title}>
            Pre Register
          </SectionHeading>
          <Text lg base600 className={classes.info}>
            Get ahead of the platform! Pre-register now for exclusive access to
            the latest updates, features, and early-bird perks of TriplePay.
          </Text>
          <div className={classes.buttonContainer}>
            <Button
              btnBlack
              iconBtn
              size="md"
              className={classes.button}
              onClick={() => {}}
            >
              App Store
              <img src={appStore} alt="#" className={classes.icon} />
            </Button>
            <Button
              btnBlack
              iconBtn
              size="md"
              className={classes.button}
              onClick={() => {}}
            >
              Play Store
              <img src={playStore} alt="#" className={classes.icon} />
            </Button>
          </div>
        </div>
        <img src={preRegisterImg} alt="#" className={classes.img} />
      </div>
    </div>
  );
};

export default PreRegister;
