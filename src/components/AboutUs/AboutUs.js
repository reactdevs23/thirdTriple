import React from "react";
import classes from "./AboutUs.module.css";
import clsx from "clsx";
import Counter from "../common/Counter/Counter";
import { SectionHeading, Text } from "../common";
const AboutUs = () => {
  const data = [
    { value: 500000, label: "People joined waiting list" },
    { value: 250000, label: "People are referred" },
    { value: 500000, label: "Pre-Reg. in App Store" },
    { value: 30000, label: "Pre-Reg. in Google Play" },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        {data.map((el, i) => (
          <div className={classes.countWrapper} key={i}>
            <SectionHeading base0 className={classes.counter}>
              <Counter end={el.value} />
            </SectionHeading>
            <Text textCenter lg base0 className={classes.label} opacity=".8">
              {el.label}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
