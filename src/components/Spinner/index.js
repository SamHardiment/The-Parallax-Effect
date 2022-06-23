import React from "react";
import { useParallax } from "react-scroll-parallax";

import "./index.css";
export const Spinner = () => {
  const parallax =
    useParallax <
    HTMLDivElement >
    {
      rotate: [0, 360],
    };
  return (
    <>
      <div ref={parallax.ref} className="spinner">
        My Fav Fruits
        <div className="emojis strawberry">🍓</div>
        <div className="emojis melon">🍉</div>
        <div className="emojis orange">🍊</div>
        <div className="emojis banana">🍌</div>
        <div className="emojis pineapple">🍍</div>
        <div className="emojis kiwi">🥝</div>
      </div>
    </>
  );
};
