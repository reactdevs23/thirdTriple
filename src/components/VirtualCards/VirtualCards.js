import React from "react";
import { TbArrowUpRight } from "react-icons/tb";
import classes from "./VirtualCards.module.css";
import { cardImg } from "../../images";
import { Button, SectionHeading, Text } from "../common";
import clsx from "clsx";
import { useMyContext } from "../../Context/Context";

const Carousel = () => {
  const { handleJoinWaitingList } = useMyContext();
  let images = [cardImg, cardImg, cardImg];

  // If there are fewer than 9 images, repeat existing images
  while (images.length < 9) {
    images = images.concat(images.slice(0, 9 - images.length));
  }

  return (
    <div className={classes.carouselWrapper} id="cards">
      <div className={clsx(classes.headingContainer, "container")}>
        <Text lg semiBold primaryDefault className={classes.badge}>
          Cards
        </Text>
        <SectionHeading base0 textCenter className={classes.heading}>
          Introducing Virtual Cards
        </SectionHeading>
        <Text xl base400 textCenter className={classes.info}>
          Unlock a new era of transactions with our virtual cards.
        </Text>
      </div>
      <div className={classes.carousel}>
        {images.map((el, i) => (
          <div
            className={[classes.slide, classes[`item-${i + 1}`]].join(" ")}
            style={{ "--index": i }}
            key={i}
          >
            <img src={el} alt="#" />
          </div>
        ))}
      </div>
      <Button
        btnPrimary
        iconBtn
        size="lg"
        className={classes.button}
        onClick={handleJoinWaitingList}
      >
        Join Waiting List <TbArrowUpRight className={classes.arrow} />
      </Button>
    </div>
  );
};

export default Carousel;
