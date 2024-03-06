import React from "react";
import { GoArrowLeft } from "react-icons/go";
import { Outlet, useNavigate } from "react-router-dom";
import classes from "./WhilistLayout.module.css";
import { logo } from "../../../images";
import { Button } from "../../common";
import clsx from "clsx";

const WhitlistLaout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={clsx(classes.header, "container")}>
          <img src={logo} alt="#" className={classes.logo} />
          <Button
            btnGray
            size="md"
            className={classes.button}
            onClick={() => navigate("/")}
          >
            <GoArrowLeft className={classes.arrow} />
            Back to Home
          </Button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default WhitlistLaout;
