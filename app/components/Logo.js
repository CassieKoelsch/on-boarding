import React from "react";
import LogoSVG from "../assets/images/logo.svg";
import MobileLogoSVG from "../assets/images/mobile-logo.svg"

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <LogoSVG className="desktop" />
        <MobileLogoSVG className="mobile" />
      </div>
    );
  }
}

export default Logo;
