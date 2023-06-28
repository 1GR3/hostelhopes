import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";

const Phone = ({ scrollYProgress }) => {
  const phoneSize = scrollYProgress.interpolate([0, 0.14, 1], [142, 100, 100]);
  const phonePosition = scrollYProgress.interpolate(
    [0, 0.14, 1],
    ["-28%", "0%", "0"]
  );
  const backgroundColor = scrollYProgress.interpolate(
    [0, 0.55, 0.6],
    ["#2e2e51", "#2e2e51", "#fff"]
  );
  const screenPositionX = scrollYProgress.to(
    [0, 0.14, 0.3, 0.59, 0.6, 0.89, 0.9, 1],
    ["7.5%", "0%", "0%", "0%", "50%", "50%", "100%", "100%"]
  );
  const screenPositionY = scrollYProgress.to([0, 0.14, 1], ["20%", "0%", "0%"]);
  const screenSize = scrollYProgress.to([0, 0.14, 1], ["440%", "300%", "300%"]);
  const islandOpacity = scrollYProgress.to([0, 0.13, 0.14, 1], [0, 0, 1, 1]);

  const screenProps = useSpring({
    backgroundPositionX: screenPositionX,
    backgroundPositionY: screenPositionY,
    backgroundSize: screenSize,
    willChange: "backgroundPositionX, backgroundPositionY, backgroundSize",
  });

  const phoneProps = useSpring({
    transform: scrollYProgress.to(
      [0, 0.14, 1],
      [
        "scale(142%) translateY(50%)",
        "scale(100%) translateY(0%)",
        "scale(100%) translateY(0%)",
      ]
    ),
    config: config.slow,
    willChange: "transform",
  });

  const islandProps = useSpring({
    opacity: islandOpacity,
    willChange: "opacity",
  });

  return (
    <div className="phone-holder">
      <animated.div
        className="phone"
        style={{ ...phoneProps, backgroundColor }}
      >
        <animated.div className="screen" style={screenProps}>
          <animated.div
            className="dynamic-island"
            style={islandProps}
          ></animated.div>
          <div className="home-button" style={islandProps}></div>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default Phone;
