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
      [0, 0.45, 0.65],
      [
        "linear-gradient(180deg, #2e2e51 0%, #2e2e51 100%, #fff 100%, #fff 100%)",
        "linear-gradient(180deg, #2e2e51 0%, #2e2e51 0%, #fff 100%, #fff 100%)",
        "linear-gradient(180deg, #2e2e51 0%, #2e2e51 0%, #fff 0%, #fff 100%)",
      ]
    ),
  });
  const screenPositionX = scrollYProgress.interpolate(
    [0, 0.14, 0.3, 0.59, 0.6, 0.89, 0.9, 1],
    ["7.5%", "0%", "0%", "0%", "50%", "50%", "100%", "100%"]
  );
  const screenPositionY = scrollYProgress.interpolate(
    [0, 0.14, 1],
    ["20%", "0%", "0%"]
  );
  const screenSize = scrollYProgress.interpolate(
    [0, 0.14, 1],
    ["440%", "300%", "300%"]
  );

  const screenProps = useSpring({
    backgroundPositionX: screenPositionX,
    backgroundPositionY: screenPositionY,
    backgroundSize: screenSize,
  });

  const phoneProps = useSpring({
    transform: phoneSize.to((value) => `scale(${value}%)`),
    bottom: phonePosition.to((value) => (value === "0" ? "unset" : value)),
    config: config.slow,
  });

  return (
    <div className="phone-holder">
      <animated.div
        className={"phone state0"}
        style={{ ...phoneProps, ...gradientSpringProps }}
      >
        <animated.div className="screen" style={screenProps}>
          <div className="dynamic-island"></div>
          <div className="home-button"></div>
        </animated.div>
      </animated.div>
    </div>
  );
};

export default Phone;
