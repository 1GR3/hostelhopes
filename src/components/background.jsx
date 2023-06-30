import React from "react";
import { useSpring, animated, config } from "@react-spring/web";

const Background = ({ scrollYProgress }) => {
  const gradientDefinition = [
    { color: "#27a7b8", position: 0 },
    { color: "#fff", position: 0.1 },
    { color: "#fff", position: 0.55 },
    { color: "#232220", position: 0.555 },
    { color: "#232220", position: 1 },
  ];

  const interpolateGradient = (gradientDefinition) => {
    return scrollYProgress.to(
      gradientDefinition.map((stop) => stop.position),
      gradientDefinition.map((stop) => stop.color)
    );
  };

  const blurHero = scrollYProgress.to([0, 0.3], [25, 50]);
  const opacityHero = scrollYProgress.to([0, 0.3], [1, 0]);
  const topHero = scrollYProgress.to([0.05, 0.3], ["0%", "-50%"]);

  const blurForest = scrollYProgress.to([0.55, 0.75], [0, 15]);
  const opacityForest = scrollYProgress.to([0.6, 0.75, 0.82], [0.8, 1, 0]);
  const topForest = scrollYProgress.to([0.26, 0.68], ["95%", "-75%"]);

  const backgroundSpringProps = useSpring({
    background: interpolateGradient(gradientDefinition),
    config: config.default,
  });

  const heroImageSpringProps = useSpring({
    filter: blurHero.to((value) => `blur(${value}px)`),
    opacity: opacityHero,
    top: topHero,
    config: config.stiff,
  });
  const forestImageSpringProps = useSpring({
    filter: blurForest.to((value) => `blur(${value}px)`),
    opacity: opacityForest,
    top: topForest,
    config: config.stiff,
  });

  return (
    <animated.div className="background" style={backgroundSpringProps}>
      <animated.div
        className="background-image hero-image"
        style={heroImageSpringProps}
      />
      <animated.div
        className="background-image forest"
        style={forestImageSpringProps}
      />
    </animated.div>
  );
};

export default Background;
