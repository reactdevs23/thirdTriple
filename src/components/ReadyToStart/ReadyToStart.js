import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import classes from "./ReadyToStart.module.css";
import clsx from "clsx";
import { Button, SectionHeading, Text } from "../common";
import { appStore, playStore, qrCode } from "../../images";
import { useMyContext } from "../../Context/Context";

const ReadyToStart = () => {
  const { handleJoinWaitingList } = useMyContext();
  return (
    <div className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.content}>
          <div className={classes.headingContainer}>
            <SectionHeading xl5 base0 textCenter>
              Ready to Start New Revolution?
            </SectionHeading>
            <Text xl2 base0 textCenter>
              In the world where innovation is the heartbeat of success
              TriplePay emerges as a transformative.
            </Text>
          </div>
          <div className={classes.buttonContainer}>
            <Button
              iconBtn
              btnWhite
              size="lg"
              className={classes.button}
              onClick={handleJoinWaitingList}
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
            </div>{" "}
            <div className={classes.qrCodeContainer}>
              <img src={qrCode} alt="#" className={classes.qrCode} />
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
