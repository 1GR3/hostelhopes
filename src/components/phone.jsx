import * as React from "react";
import { useSpring, animated, config } from "@react-spring/web";

const Phone = ({ scrollYProgress }) => {
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const hSM = window.innerWidth < 768 && windowHeight < 768;
  const hMD =
    window.innerWidth < 768 && windowHeight >= 768 && windowHeight <= 1080;
  const hLG = window.innerWidth < 768 && windowHeight > 1080;
  const hLTss = window.innerWidth >= 768 && windowHeight < 650;
  const hLTs = window.innerWidth >= 768 && windowHeight < 750;
  const hLT = window.innerWidth >= 768 && windowHeight < 850;
  const hDT =
    window.innerWidth >= 768 && windowHeight >= 800 && windowHeight < 900;

  const phoneSize = scrollYProgress.to([0, 0.14, 1], [142, 100, 100]);
  const backgroundColor = scrollYProgress.to(
    [0, 0.55, 0.6],
    ["#2e2e51", "#2e2e51", "#fff"]
  );
  const screenPositionX = scrollYProgress.to(
    [0, 0.14, 0.3, 0.59, 0.6, 0.89, 0.9, 1],
    ["7.5%", "0%", "0%", "0%", "50%", "50%", "100%", "100%"]
  );
  const screenPositionY = scrollYProgress.to([0, 0.14, 1], ["13%", "0%", "0%"]);
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
      hSM
        ? [
            "scale(142%) translateY(33%)",
            "scale(100%) translateY(5%)",
            "scale(100%) translateY(5%)",
          ]
        : hMD
        ? [
            "scale(151%) translateY(35%)",
            "scale(100%) translateY(0%)",
            "scale(100%) translateY(0%)",
          ]
        : hLG
        ? [
            "scale(160%) translateY(30%)",
            "scale(100%) translateY(0%)",
            "scale(100%) translateY(0%)",
          ]
        : hLTss
        ? [
            "scale(140%) translateY(100%)",
            "scale(100%) translateY(0%)",
            "scale(100%) translateY(0%)",
          ]
        : hLTs
        ? [
            "scale(140%) translateY(80%)",
            "scale(100%) translateY(0%)",
            "scale(100%) translateY(0%)",
          ]
        : hLT
        ? [
            "scale(140%) translateY(65%)",
            "scale(100%) translateY(0%)",
            "scale(100%) translateY(0%)",
          ]
        : hDT
        ? [
            "scale(140%) translateY(62%)",
            "scale(100%) translateY(0%)",
            "scale(100%) translateY(0%)",
          ]
        : [
            "scale(160%) translateY(50%)",
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
