import * as React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as QRcode } from "../images/QRcode.svg";
import { ReactComponent as AppleO } from "../images/apple-o.svg";
import { ReactComponent as PlayO } from "../images/play-o.svg";
import { useSpring, animated, config } from "@react-spring/web";

const AnimatedLogo = animated(Logo);

const Header = ({ landingpage, light = false, scrollYProgress }) => {
  const gradientDefinition = [
    { color: "#ffffff", position: 0 },
    { color: "#ffffff", position: 0.2 },
    { color: "#2e2e51", position: 0.21 },
    { color: "#2e2e51", position: 0.65 },
    { color: "#ffffff", position: 0.66 },
    { color: "#ffffff", position: 1 },
  ];
  const interpolateGradient = (gradientDefinition) => {
    return scrollYProgress.to(
      gradientDefinition.map((stop) => stop.position),
      gradientDefinition.map((stop) => stop.color)
    );
  };
  return (
    <header
      className={"" + (landingpage ? "container" : "position-relative mb-0")}
    >
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
          <div className="qr-code">
            <QRcode className="qr" />
            <div className="details">
              <div className="scan">
                Scan with your phone
                <br /> to download
              </div>
              <a href="" className="btn btn-outline-success d-block mb-2">
                <div className="row mx-auto">
                  <div className="col-4 p-0 justify-content-center">
                    <AppleO />
                  </div>
                  <div className="col p-0 text-start">
                    <small>Download on the</small>
                    <br />
                    App Store
                  </div>
                </div>
              </a>
              <a href="" className="btn btn-outline-success d-block mb-2">
                <div className="row mx-auto">
                  <div className="col-4 p-0 justify-content-center">
                    <PlayO />
                  </div>
                  <div className="col p-0 text-start">
                    <small>Get it on</small>
                    <br />
                    Google Play
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
