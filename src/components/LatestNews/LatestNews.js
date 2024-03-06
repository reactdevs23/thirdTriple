import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import classes from "./LatestNews.module.css";
import clsx from "clsx";
import SectionHeading from "../common/SectionHeading/SectionHeading";
import Text from "../common/Text/Text";
import { GoArrowRight } from "react-icons/go";
import { placeHolder } from "../../images";
import { Button, Highlight } from "../common";

const LatestNews = () => {
  const data = [
    {
      title: "Simple and awesome two line title here lorem ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: placeHolder,
      readMore: "#",
    },
    {
      title: "Simple and awesome two line title here lorem ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: placeHolder,
      readMore: "#",
    },
    {
      title: "Simple and awesome two line title here lorem ipsum",
      info: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      img: placeHolder,
      readMore: "#",
    },
  ];
  return (
    <section className={classes.wrapper} id="news">
      <div className={clsx("container", classes.container)}>
        <div className={classes.headingContainer}>
          <Text lg semiBold primaryDefault className={classes.badge}>
            News
          </Text>{" "}
          <SectionHeading base950 textCenter className={classes.heading}>
            Stay Informed with{" "}
            <Highlight>
              <strong>Latest News</strong>
            </Highlight>
          </SectionHeading>
          <Text xl base800 textCenter className={classes.tagline}>
            Dive into our latest news and blog posts to uncover insightful
            analyses, breaking stories, and thought-provoking commentary.
          </Text>
        </div>
        <div className={classes.content}>
          {data.map(({ title, info, img, readMore }, i) => (
            <div className={clsx(classes.card)} key={i}>
              <div className={classes.imgContainer}>
                <img src={img} alt="#" className={classes.img} />
              </div>
              <div className={clsx(classes.infoContainer)}>
                <Text semiBold base900 xl2 className={classes.title}>
                  {title}
                </Text>
                <Text lg base600>
                  {info}
                </Text>{" "}
                <a
                  href={readMore}
                  target="_blank"
                  rel="noreferrer"
                  className={classes.readMore}
                >
                  View More News <GoArrowRight className={classes.arrow} />
                </a>
              </div>
            </div>
          ))}
        </div>{" "}
        <Button
          btnPrimary
          iconBtn
          size="lg"
          className={classes.button}
          onClick={() => {}}
        >
          View More News <TbArrowUpRight className={classes.arrow} />
        </Button>
      </div>
    </section>
  );
};

export default LatestNews;
