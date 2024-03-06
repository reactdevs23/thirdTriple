import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import clsx from "clsx";
import { Button, Highlight, SectionHeading, Text } from "../common";
import {
  account,
  cryptoWallet,
  instantlyPayout,
  monthlyUsage,
} from "../../images";
import classes from "./Services.module.css";

const Services = () => {
  const services = [
    {
      img: account,
      title: "Static Wallet Addresses",
      info: "Take control of your payments with our static wallet addresses. Each address is uniquely linked to a customer, eliminating confusion and ensuring that funds always reach their intended destination.",
    },
    {
      img: monthlyUsage,
      title: "Fixed Monthly Usage Costs",
      info: "Say goodbye to unpredictable transaction fees. Our fixed monthly usage costs mean you pay one flat rate to access all our premium features — simplicity and savings combined.",
    },
    {
      img: cryptoWallet,
      title: "Self-Listing Capabilities for Cryptocurrencies",
      info: "Embrace the full potential of crypto payments. With TriplePay, you can self-list any ERC20 token, opening up a world of possibilities for receiving payments in the currency that best suits your business.",
    },
    {
      img: instantlyPayout,
      title: "Instant Payout Section",
      info: "Transform your crypto into cash instantly. With TriplePay, you're always just a few clicks away from converting your cryptocurrency into your local currency and transferring it directly into your account. Fast, fluid, and secure — liquidity on your terms.",
    },
    {
      img: instantlyPayout,
      title: "Instant Payout Section",
      info: "Transform your crypto into cash instantly. With TriplePay, you're always just a few clicks away from converting your cryptocurrency into your local currency and transferring it directly into your account. Fast, fluid, and secure — liquidity on your terms.",
    },
    {
      img: instantlyPayout,
      title: "Instant Payout Section",
      info: "Transform your crypto into cash instantly. With TriplePay, you're always just a few clicks away from converting your cryptocurrency into your local currency and transferring it directly into your account. Fast, fluid, and secure — liquidity on your terms.",
    },
  ];
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.headingContainer}>
          <Text lg semiBold primaryDefault className={classes.badge}>
            Services
          </Text>
          <SectionHeading className={classes.heading}>
            Comprehensive Financial Solutions:{" "}
            <Highlight>
              <strong>Explore Our Services</strong>
            </Highlight>
          </SectionHeading>
          <Text base800 xl2 className={classes.tagline}>
            Discover a suite of services tailored to meet your diverse financial
            needs.
          </Text>
        </div>
        <div className={classes.services}>
          {services.map(({ img, title, info }, i) => (
            <div className={classes.service} key={i}>
              <div className={classes.imgContainer}>
                <img src={img} alt="#" className={classes.img} />
              </div>
              <div className={classes.infoContainer}>
                <SectionHeading xl2 base800>
                  {title}
                </SectionHeading>
                <Text base600 md>
                  {info}
                </Text>
              </div>
            </div>
          ))}{" "}
        </div>{" "}
      </div>{" "}
      <Button
        btnPrimary
        iconBtn
        size="lg"
        className={classes.button}
        onClick={() => {}}
      >
        Join Waiting List <TbArrowUpRight className={classes.arrow} />
      </Button>
    </div>
  );
};

export default Services;
