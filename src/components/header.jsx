import * as React from "react";
// import Logo from "./logo.svg";

function Header() {
  return (
    <div className="row">
      <div className="logo">
        {/* <Logo fill="yellow" /> */}
        logo
      </div>
      <div className="qrcode">QR code</div>
    </div>
  );
}
export default Header;
