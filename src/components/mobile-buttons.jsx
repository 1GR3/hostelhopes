import React from "react";
import { ReactComponent as Apple } from "../images/apple.svg";
import { ReactComponent as Play } from "../images/play.svg";
import { useSpring, animated, config } from "@react-spring/web";

const MobileButtons = ({ scrollYProgress }) => {
  const getOS = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log("User Agent:", userAgent);

    if (/android/i.test(userAgent)) {
      console.log("Detected OS: Android");
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
      console.log("Detected OS: iOS");
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

    console.log("Detected OS: Unknown");
    return { os: "unknown", button: null };
  };

  const { os, button } = getOS();

  const isInverted = true;

  return (
    <animated.div
      id="mobile-buttons"
      className={"d-flex d-md-none container " + (isInverted ? "inverted" : "")}
    >
      <div className="d-block justify-content-center w-100 align-content-end">
        <div className="d-grid gap-3">
          <a className="btn btn-light" href="/hostels-connect">
            Own a hostel? We can help you grow.
          </a>
          <a className="btn btn-success" href="/influencers-connect">
            Make passive income sharing your travels
          </a>
          <a className="btn btn-danger" href="/hostels-connect">
            Own a hostel? We can help you grow!
          </a>
          {button}
        </div>
      </div>
    </animated.div>
  );
};

export default MobileButtons;
