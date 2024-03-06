import React from "react";
import { TbArrowUpRight } from "react-icons/tb";

import classes from "./ReferAndEarn.module.css";
import clsx from "clsx";
import { referEarn } from "../../images";
import { Text, SectionHeading, Button } from "../common";
const ReferAndEarn = () => {
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <img src={referEarn} alt="#" className={classes.img} />
        <div className={classes.textContainer}>
          <SectionHeading xl3 base900 className={classes.title}>
            Refer & Earn Rewards
          </SectionHeading>
          <Text lg base600 className={classes.info}>
            Invite friends and family to join our platform, and when they sign
            up using your unique referral link, both you and your referral will
            earn exclusive rewards.
          </Text>
          <Button
            btnPrimary
            iconBtn
            size="lg"
            className={classes.button}
            onClick={() => {}}
          >
            Start Inviting <TbArrowUpRight className={classes.arrow} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReferAndEarn;
