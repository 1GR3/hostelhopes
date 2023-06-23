import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";

const Phone = ({ scrollYProgress }) => {
  const phoneSize = scrollYProgress.interpolate([0, 0.14, 1], [142, 100, 100]);
  const phonePosition = scrollYProgress.interpolate(
    [0, 0.14, 1],
    ["-25%", "0%", "0"]
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
        <div className="screen"></div>
      </animated.div>
    </div>
  );
};

export default Phone;
