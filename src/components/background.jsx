import React from "react";
import { useSpring, animated } from "@react-spring/web";

const Background = ({ scrollYProgress }) => {
  const gradientDefinition = [
    { color: "#27a7b8", position: 0 },
    { color: "#27a7b8", position: 0.15 },
    { color: "#fff", position: 0.25 },
    { color: "#fff", position: 0.75 },
    { color: "#111", position: 0.85 },
    { color: "#111", position: 1 },
  ];

  const interpolateGradient = (gradientDefinition) => {
    return scrollYProgress.to(
      gradientDefinition.map((stop) => stop.position),
      gradientDefinition.map((stop) => stop.color)
    );
  };

  const springProps = useSpring({
    background: interpolateGradient(gradientDefinition),
  });

  return <animated.div className="background" style={springProps} />;
};

export default Background;
