import * as React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as QRcode } from "./QRcode.svg";
import { useSpring, animated, config } from "@react-spring/web";

const AnimatedLogo = animated(Logo);

const Header = ({ landingpage, light = false, scrollYProgress }) => {
  const gradientDefinition = [
    { color: "#ffffff", position: 0 },
    { color: "#ffffff", position: 0.2 },
    { color: "#2e2e51", position: 0.21 },
    { color: "#2e2e51", position: 0.73 },
    { color: "#ffffff", position: 0.74 },
    { color: "#ffffff", position: 1 },
  ];
  const interpolateGradient = (gradientDefinition) => {
    return scrollYProgress.to(
      gradientDefinition.map((stop) => stop.position),
      gradientDefinition.map((stop) => stop.color)
    );
  };
  return (
    <header className={"container" + (landingpage ? " sticky-lg-top" : "")}>
      <div className="row">
        <div className="col text-center text-lg-start">
          <a href="/">
            {landingpage ? (
              <AnimatedLogo fill={interpolateGradient(gradientDefinition)} />
            ) : (
              <Logo fill={light ? "#2e2e51" : "white"} />
            )}
          </a>
        </div>
        <div className="col text-end d-none d-lg-block">
          <QRcode className="qr-code" />
        </div>
      </div>
    </header>
  );
};

export default Header;
