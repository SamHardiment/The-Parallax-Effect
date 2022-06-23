import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";

import hero from "../../images/hero.jpg";
import laptop from "../../images/laptop.jpg";
import street from "../../images/bottom-street.jpg";
import { Spinner } from "../../components";
import "../../index.css";
export const Background = () => {
  return (
    <>
      <ParallaxBanner
        className="parallaxBanner"
        layers={[
          {
            image: hero,
            speed: -10,
            translateY: [0, 10],
          },
          {
            speed: -10,
            expanded: false,
            shouldAlwaysCompleteAnimation: true,
            translateY: [0, -15],
            // scale: [1, 1.2],
            //   opacity: [0.9, 1],
            children: (
              <div className="hero-container">
                <h1 className="hero-title">Hello World!</h1>
              </div>
            ),
          },

          {
            expanded: false,
            children: <div className="color-transition"></div>,
          },

          // { image: street, speed: -10 },
        ]}
        //   style={{ aspectRatio: "2 / 1" }}
      ></ParallaxBanner>
      <ParallaxBanner
        className="parallaxBanner"
        layers={[
          { image: laptop, speed: -10, translateY: [0, 20] },
          { children: <Spinner /> },
        ]}
      ></ParallaxBanner>
      <ParallaxBanner
        className="parallaxBanner"
        layers={[{ image: street, speed: -10, translateY: [0, 10] }]}
      ></ParallaxBanner>
    </>
  );
};

// So when you scroll into view, The translateY effect comes into play. Starting at the position you state and returns there

// Scale is another css property which either scales elements up or down from their original scale=1 value
// It goes start size and end size, speeed determined by the speed varaible
