import * as React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as QRcode } from "./QRcode.svg";

function Header() {
  return (
    <header className="container sticky-top">
      <div className="row">
        <div className="col text-center text-md-start">
          <a href="/">
            <Logo fill="" />
          </a>
        </div>
        <div className="col text-end d-none d-md-block">
          <QRcode className="qr-code" />
        </div>
      </div>
    </header>
  );
}
export default Header;
