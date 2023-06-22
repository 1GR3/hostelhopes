import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";

const Phone = ({ scrollYProgress }) => {
  const phoneSize = scrollYProgress.interpolate([0, 0.13, 1], [142, 100, 100]);
  const phonePosition = scrollYProgress.interpolate(
    [0, 0.13, 1],
    ["-25%", "0%", "0%"]
  );
  const phoneProps = useSpring({
    transform: phoneSize.to((value) => `scale(${value}%) `),
    bottom: phonePosition,
    config: {
      immediate: true,
    },
  });
  return (
    <div className="phone-holder">
      <animated.div
        className={"phone state0"}
        style={phoneProps}
      ></animated.div>
    </div>
  );
};
export default Phone;
