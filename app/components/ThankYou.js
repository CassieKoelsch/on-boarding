import React, { Component } from "react";
import Logo from "./Logo";

class ThankYou extends Component {
  render() {
    return (
      <div className="container thankyou">
        <Logo />
        <div className="main-content">
          <div className="contact">
            <h3>Fantastico!</h3>
            <p className="meta">
              If you have any questions, don’t hesitate to reach out.
            </p>
            <p className="meta">
              <a href="#">
                <strong>example email here</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default ThankYou;
