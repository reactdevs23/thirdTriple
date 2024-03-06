import React from "react";

import classes from "./ProtectingYourPeaceOfMind.module.css";
import clsx from "clsx";
import { protecting } from "../../images";
import { Text, SectionHeading, Highlight } from "../common";
const ProtectingYourPeaceOfMind = () => {
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.textContainer}>
          <SectionHeading base0 className={classes.title}>
            Protecting Your Peace of Mind:
            <Highlight>
              <strong> Our Commitment to Security</strong>
            </Highlight>
          </SectionHeading>
          <Text xl base400 className={classes.info}>
            Our comprehensive security measures employ advanced encryption
            protocols, multi-factor authentication, and continuous monitoring to
            ensure the utmost protection of your sensitive information.
          </Text>
        </div>{" "}
        <img src={protecting} alt="#" className={classes.img} />
      </div>
    </div>
  );
};

export default ProtectingYourPeaceOfMind;
