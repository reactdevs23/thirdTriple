// Facility.js

import React from "react";
import styles from "./Facility.module.css";
import clsx from "clsx";
import { Text } from "../../common";

const Facility = () => {
  const facility = [
    "Easy and fast",
    "New and smart",
    "Get better experience",
    "In your pocket",
    "Manage effortlessly",
    "Anywhere anytime",
    "Always in touch",
  ];
  return (
    <div
      className={clsx(styles.marquee, styles.enableAnimation, "container")}
      style={{ "--duration": `${facility.length * 3}s` }}
    >
      <ul className={styles.marqueeContent}>
        {facility.map((feature, index) => (
          <Text base600 md key={index} className={styles.facility}>
            {feature}
          </Text>
        ))}
      </ul>

      <ul aria-hidden="true" className={styles.marqueeContent}>
        {facility.map((feature, index) => (
          <Text base600 md key={index} className={styles.facility}>
            {feature}
          </Text>
        ))}
      </ul>
    </div>
  );
};

export default Facility;
