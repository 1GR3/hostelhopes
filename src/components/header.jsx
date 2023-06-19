import * as React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import { ReactComponent as QRcode } from "./QRcode.svg";

function Header() {
  return (
    <header className="container sticky-top">
      <div className="row">
        <div className="col text-start">
          <Logo fill="red" />
        </div>
        <div className="col text-end ">
          <QRcode className="qr-code" />
        </div>
      </div>
    </header>
  );
}
export default Header;
