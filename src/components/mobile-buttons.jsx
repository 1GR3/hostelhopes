import React, { useState, useEffect } from "react";
import { ReactComponent as Apple } from "../images/apple.svg";
import { ReactComponent as Play } from "../images/play.svg";
import { useSpring, animated, config } from "@react-spring/web";

const MobileButtons = ({ scrollYProgress }) => {
  const getOS = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent)) {
      return {
        os: "android",
        button: (
          <a
            className="btn btn-light btn-store"
            href="https://play.google.com/store/apps/details?id=your-android-app-id"
          >
            <Play className="googlePlay" />
            Download on Google Play
          </a>
        ),
      };
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return {
        os: "ios",
        button: (
          <a
            className="btn btn-light btn-store"
            href="https://itunes.apple.com/app/your-ios-app-id"
          >
            <Apple className="appleLogo" />
            Download on the App Store
          </a>
        ),
      };
    }

    return { os: "unknown", button: null };
  };

  const { os, button } = getOS();

  const [isInverted, setIsInverted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY / window.innerHeight;
      const bottomHalfReached = scrollPosition >= 1.15;

      setIsInverted(!bottomHalfReached);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const positionValues = ["0px", "75px", "75px", "130px"];
  const opacityValues = [0, 1, 1, 0];

  const hostel1props = useSpring({
    bottom: scrollYProgress.to([0, 0.29, 0.3], ["75px", "75px", "130px"]),
    opacity: scrollYProgress.to([0, 0.29, 0.3], [1, 1, 0]),
    config: config.slow,
  });

  const influProps = useSpring({
    bottom: scrollYProgress.to([0.7, 0.71, 0.86, 0.87], positionValues),
    opacity: scrollYProgress.to([0.7, 0.71, 0.86, 0.87], opacityValues),
    config: config.slow,
  });

  const hostel2props = useSpring({
    bottom: scrollYProgress.to([0.89, 0.9, 1, 1], positionValues),
    opacity: scrollYProgress.to([0.89, 0.9, 1, 1], opacityValues),
    config: config.slow,
  });

  return (
    <animated.div
      id="mobile-buttons"
      className={"d-flex d-md-none container " + (isInverted ? "inverted" : "")}
    >
      <div className="d-block justify-content-center w-100 align-content-end">
        <div className="d-grid gap-3 position-relative">
          <animated.a
            className="btn btn-light btn-slide"
            href="/hostels-connect"
            style={hostel1props}
          >
            Own a hostel? We can help you grow.
          </animated.a>
          <animated.a
            className="btn btn-success btn-slide"
            href="/influencers-connect"
            style={influProps}
          >
            Make passive income sharing your travels
          </animated.a>
          <animated.a
            className="btn btn-danger btn-slide"
            href="/hostels-connect"
            style={hostel2props}
          >
            Own a hostel? We can help you grow!
          </animated.a>
          {button}
        </div>
      </div>
    </animated.div>
  );
};

export default MobileButtons;
