import React from "react";

import classes from "./GetExclusiveRewards.module.css";
import clsx from "clsx";

import { Text, SectionHeading } from "../common";
import { checkMark, exclusiveRewards } from "../../images";
const GetExclusiveRewards = () => {
  const lists = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt",
    "Labore et dolore magna aliqua",
  ];
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.textContainer}>
          <SectionHeading base900 className={classes.title}>
            Get Exclusive Rewards
          </SectionHeading>
          <Text xl2 base600 className={classes.info}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </div>

        <div className={classes.row}>
          <div className={classes.listContainer}>
            {lists.map((el, i) => (
              <div className={classes.list} key={i}>
                <img src={checkMark} alt="#" className={classes.checkMark} />
                <Text xl base600 className={classes.listInfo}>
                  {el}
                </Text>
              </div>
            ))}
          </div>
          <img src={exclusiveRewards} alt="#" className={classes.img} />
        </div>
      </div>
    </div>
  );
};

export default GetExclusiveRewards;
