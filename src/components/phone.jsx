import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";

const Phone = ({ scrollYProgress }) => {
  const phoneSize = scrollYProgress.interpolate([0, 0.14, 1], [142, 100, 100]);
  const phonePosition = scrollYProgress.interpolate(
    [0, 0.14, 1],
    ["-28%", "0%", "0"]
  );
  const gradientSpringProps = useSpring({
    background: scrollYProgress.to(
      [0.52, 0.7, 0.75],
      [
        "linear-gradient(180deg, #2e2e51 0%, #2e2e51 100%, #fff 100%, #fff 100%)",
        "linear-gradient(180deg, #2e2e51 0%, #2e2e51 0%, #fff 100%, #fff 100%)",
        "linear-gradient(180deg, #2e2e51 0%, #2e2e51 0%, #fff 0%, #fff 100%)",
      ]
    ),
  });
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
  });

  const islandProps = useSpring({
    opacity: islandOpacity,
  });
  return (
    <div className="phone-holder">
      <animated.div
        className={"phone"}
        style={{ ...phoneProps, ...gradientSpringProps }}
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
