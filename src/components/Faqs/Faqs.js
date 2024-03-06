import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

import classes from "./Faqs.module.css";
import clsx from "clsx";
import { SectionHeading, Text } from "../common";
const faqs = [
  {
    question: "How do I sign up for TriplePay?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Is TriplePay available for both iOS and Android devices?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "Are there any fees associated with using TriplePay?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question:
      "Can I link multiple bank accounts or cards to my TriplePay account?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "How secure is TriplePay's platform for transactions?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    question: "What should I do if I encounter an issue with a transaction?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
const Faqs = () => {
  const [activeFaq, setActiveFaq] = useState();
  return (
    <div className={classes.wrapper}>
      <div className={clsx(classes.container, "container")}>
        <div className={classes.headingContainer}>
          <Text lg semiBold primaryDefault className={classes.badge}>
            FAQs
          </Text>{" "}
          <SectionHeading xl5 base950 textCenter>
            Frequently Asked Questions
          </SectionHeading>
        </div>
        <div>
          {faqs.map((el, i) => (
            <div
              className={clsx(
                classes.faqContainer,
                activeFaq === i && classes.activeFaqContainer
              )}
              key={i}
            >
              <div
                className={classes.questionContainer}
                onClick={() => setActiveFaq(i)}
              >
                <Text xl2 base900>
                  {el.question}
                </Text>
                {activeFaq === i ? (
                  <FaMinus className={classes.icon} />
                ) : (
                  <FaPlus className={classes.icon} />
                )}
              </div>
              {activeFaq === i && (
                <Text lg base600 className={classes.answer}>
                  {el.answer}
                </Text>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
