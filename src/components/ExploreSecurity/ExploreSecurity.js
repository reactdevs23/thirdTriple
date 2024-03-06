import React from "react";
import { GoArrowRight } from "react-icons/go";
import classes from "./ExploreSecurity.module.css";
import clsx from "clsx";
import { authentication, encryption, monitoring } from "../../images";
import { Text, SectionHeading } from "../common";
const ExploreSecurity = () => {
  const data = [
    {
      img: encryption,
      title: "Advanced Encryption",
      info: "Rest assured knowing that your sensitive information is shielded with state-of-the-art encryption protocols, safeguarding it from unauthorized access.",
      readMore: "",
    },
    {
      img: authentication,
      title: "Multi-Factor Authentication",
      info: "Enhance your account security with our multi-factor authentication system, adding an extra layer of verification to prevent unauthorized access and protect your personal information.",
      readMore: "",
    },
    {
      img: monitoring,
      title: "Real-time Fraud Monitoring",
      info: "Our advanced systems swiftly detect and prevent fraudulent activities by analyzing transaction patterns, ensuring your peace of mind while using our services.",
      readMore: "",
    },
  ];
  return (
    <div className={classes.wrapper} id="security">
      <div className={clsx("container", classes.mainContainer)}>
        <div className={classes.headingContainer}>
          <Text lg semiBold primaryDefault className={classes.badge}>
            Security
          </Text>{" "}
          <SectionHeading base0 textCenter className={classes.heading}>
            Explore Our Security Measures
          </SectionHeading>
          <Text xl base400 textCenter className={classes.info}>
            Dive into our comprehensive security section, where your safety is
            our priority. Discover the robust measures we've implemented to
            protect your data and transactions, ensuring a worry-free experience
            every time you interact with us.
          </Text>
        </div>
        <div className={clsx(classes.container)}>
          {data.map(({ img, title, info, readMore }, i) => (
            <div
              className={clsx(
                classes.card,
                (i + 1) % 2 === 0 && classes.evenCard
              )}
              key={i}
            >
              <img src={img} alt="#" className={classes.img} />
              <div className={classes.textContainer}>
                <SectionHeading xl3 base0 className={classes.title}>
                  {title}
                </SectionHeading>
                <Text lg base400 className={classes.info}>
                  {info}
                </Text>{" "}
                <a
                  href={readMore}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.readMore}
                >
                  Read More <GoArrowRight className={classes.arrow} />
                </a>
              </div>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSecurity;
