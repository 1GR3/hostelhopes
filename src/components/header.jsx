import * as React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as QRcode } from "./QRcode.svg";

const Header = ({ sticky, light = false }) => {
  console.log("header is loaded");
  console.log("light");
  console.log(light);
  return (
    <header className={"container" + (sticky ? " sticky-top" : "")}>
      <div className="row">
        <div className="col text-center text-md-start">
          <a href="/">
            <Logo fill={light ? "#2e2e51" : "white"} />
          </a>
        </div>
        <div className="col text-end d-none d-md-block">
          <QRcode className="qr-code" />
        </div>
      </div>
    </header>
  );
};

export default Header;
