import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import classes from "./Whitelist.module.css";
import clsx from "clsx";
import { Button, Text } from "../../components/common";
import { RxCopy } from "react-icons/rx";

const Whitelist = () => {
  const referList = [
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name ", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
    { userName: "User Name", joined: true },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={clsx("container", classes.container, "paddingTop")}>
        <div className={classes.formContainer}>
          <div className={classes.headingContainer}>
            <Text base950 xl3 semiBold className={classes.heading}>
              White List
            </Text>
            <Text base700 lg className={classes.info}>
              Invite your friends to earn rewards. Your reward points will be
              added to your account and can be used once our app is available.
            </Text>
          </div>
          <div className={classes.form}>
            <a
              href="https://brandname/ref/123456789"
              target="_blank"
              rel="noreferrer"
              className={classes.link}
            >
              https://brandname/ref/123456789
            </a>
            <CopyToClipboard text="https://brandname/ref/123456789">
              <Button
                btnPrimary
                size="md"
                className={classes.button}
                onClick={() => {}}
              >
                <span className={classes.buttonText}>Copy Link</span>

                <RxCopy className={classes.copyIcon} />
              </Button>
            </CopyToClipboard>
          </div>{" "}
        </div>

        <div className={classes.referContainer}>
          <div className={classes.referHeader}>
            <Text md semiBold base900 className={classes.referTitle}>
              Your Refer (147)
            </Text>
            <Text sm base700 className={classes.earnedPoint}>
              Earned Point: <span>1345</span>
            </Text>
          </div>
          <div className={clsx(classes.referListContainer, "overflow")}>
            {referList.map((el, i) => (
              <div className={classes.referList} key={i}>
                <Text md base600 className={classes.id}>
                  {i + 1}
                </Text>{" "}
                <Text md base600 className={classes.userName}>
                  {el.userName}
                </Text>
                {el.joined && (
                  <div className={classes.status}>
                    <p
                      className={clsx(classes.btn, el.joined && classes.joined)}
                    >
                      Joined
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whitelist;
