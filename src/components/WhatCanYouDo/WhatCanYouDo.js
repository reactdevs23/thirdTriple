import React from "react";
import classes from "./WhatCanYouDo.module.css";
import clsx from "clsx";
import SectionHeading from "../common/SectionHeading/SectionHeading";
import Text from "../common/Text/Text";
import { GoArrowRight } from "react-icons/go";
import { payBill, placeHolder, sendMoney, transaction } from "../../images";
import { Highlight } from "../common";

const WhatCanYouDo = () => {
  const data = [
    {
      img: payBill,
      title: "Pay Bills Effortlessly",
      info: "Never wait in lines or miss payments again! TriplePay lets you effortlessly settle bills from utilities to credit cards, all with a few taps on your smartphone.",
    },
    {
      img: sendMoney,
      title: "Send Money Instantly",
      info: "Send money instantly with TriplePay, anywhere, anytime. Whether it's splitting bills or supporting loved ones, our  platform ensures safe transactions.",
    },
    {
      img: transaction,
      title: "Seamless Transactions",
      info: "Enjoy seamless, secure payments with TriplePay. Split bills, settle invoices, and shop online hassle-free on our intuitive platform.",
    },
  ];
  return (
    <section className={classes.wrapper}>
      <div className={clsx("container", classes.container)}>
        <div className={classes.headingContainer}>
          <SectionHeading base950 textCenter>
            What Can You Do with{" "}
            <Highlight>
              Triple
              <strong>Pay</strong>
            </Highlight>
          </SectionHeading>
          <Text xl base800 textCenter>
            Discover the endless possibilities with TriplePay! From seamless
            transactions to unparalleled convenience, TriplePay empowers you to
            manage your finances like never before.
          </Text>
        </div>
        <div className={classes.content}>
          {data.map(({ img, title, info, readMore }, i) => (
            <div className={clsx(classes.card)} key={i}>
              <div className={classes.imgContainer}>
                <img src={img} alt="#" className={classes.img} />
              </div>
              <Text semiBold base900 xl2 className={classes.title}>
                {title}
              </Text>
              <Text lg base600>
                {info}
              </Text>{" "}
            </div>
          ))}
        </div>{" "}
      </div>
    </section>
  );
};

export default WhatCanYouDo;
