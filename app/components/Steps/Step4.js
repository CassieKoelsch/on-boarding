import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";
import MonitorIcon from "../../assets/images/monitor.svg";
import DualMonitorIcon from "../../assets/images/dual-monitor.svg";
import MouseIcon from "../../assets/images/mouse.svg";
import TrackpadIcon from "../../assets/images/trackpad.svg";
import MacIcon from "../../assets/images/apple-logo.svg";
import PcIcon from "../../assets/images/windows.svg";

class Step4 extends React.Component {
  state = {
    monitorChoices: [
      {
        name: "one"
      },
      {
        name: "two"
      }
    ],
    mouseChoices: [
      {
        name: "mouse"
      },
      {
        name: "trackpad"
      }
    ],
    keyboardChoices: [
      {
        name: "mac"
      },
      {
        name: "windows"
      }
    ],
    displayTextbox: false
  };

  handleChange = selectedOption => {
    this.props.handleChange({
      target: { name: "mouseType", value: selectedOption.value }
    });
  };

  displayTextbox = () => {
    this.setState({
      displayTextbox: !this.state.displayTextbox
    });
  };

  render() {
    const mouseSelectOptions = [
      { value: "Apple Magic Mouse", label: "Apple Magic Mouse" },
      { value: "Trackball Mouse", label: "Trackball Mouse" },
      { value: "Anker Wireless Vertical Ergonomic Optical Mouse", label: "Anker Wireless Vertical Ergonomic Optical Mouse" },
      { value: "USB Wireless Mouse ", label: "USB Wireless Mouse " }
    ];

    const monitor = this.props.monitor;
    const monitorOptions = this.state.monitorChoices.map((loan, key) => {
      const isCurrent = this.props.monitor === loan.name;
      return (
        <div key={key} className="radioPad">
          <div>
            <label
              className={
                isCurrent
                  ? "radioPad__wrapper radioPad__wrapper--selected"
                  : "radioPad__wrapper"
              }
            >
              <input
                className="radioPad__radio"
                type="radio"
                name="monitor"
                id={loan.name}
                value={loan.name}
                onChange={this.props.handleChange}
              />
              {loan.name === "one" &&
                <MonitorIcon />}
              {loan.name === "two" &&
                <DualMonitorIcon />}
            </label>
          </div>
        </div>
      );
    });

    const mouse = this.props.mouse;
    const mouseOptions = this.state.mouseChoices.map((loan, key) => {
      const isCurrent = this.props.mouse === loan.name;
      return (
        <div key={key} className="radioPad">
          <div>
            <label
              className={
                isCurrent
                  ? "radioPad__wrapper radioPad__wrapper--selected"
                  : "radioPad__wrapper"
              }
            >
              <input
                className="radioPad__radio"
                type="radio"
                name="mouse"
                id={loan.name}
                value={loan.name}
                onChange={this.props.handleChange}
              />
              {loan.name === "mouse" &&
                <MouseIcon />}
              {loan.name === "trackpad" &&
                <TrackpadIcon />}
            </label>
          </div>
        </div>
      );
    });

    const keyboard = this.props.keyboard;
    const keyboardOptions = this.state.keyboardChoices.map((loan, key) => {
      const isCurrent = this.props.keyboard === loan.name;
      return (
        <div key={key} className="radioPad">
          <div>
            <label
              className={
                isCurrent
                  ? "radioPad__wrapper radioPad__wrapper--selected"
                  : "radioPad__wrapper"
              }
            >
              <input
                className="radioPad__radio"
                type="radio"
                name="keyboard"
                id={loan.name}
                value={loan.name}
                onChange={this.props.handleChange}
              />
              {loan.name === "mac" &&
                <MacIcon />}
              {loan.name === "windows" &&
                <PcIcon />}
            </label>
          </div>
        </div>
      );
    });
    if (this.props.currentStep !== 4) {
      return null;
    }
    return (
      <div className="step4">
        <h3>Let’s Accessorize...</h3>
        <div className="accessory">
          <div className="accessory-section">
            <h4>Monitors</h4>
            <p className="meta">Dell UltraSharp 27” (U2717D)</p>
            <div className="options">{monitorOptions}</div>
          </div>
          <div className="accessory-section">
            <h4>Mouse or Trackpad</h4>
            <p className="meta">Select your preference</p>
            <div className="options">{mouseOptions}</div>
            {this.props.mouse === "mouse" && (
              <Select
                name="mouseType"
                classNamePrefix="mouse-select"
                isClearable={false}
                isSearchable={false}
                onChange={this.handleChange}
                options={mouseSelectOptions}
              />
            )}
          </div>
          <div className="accessory-section">
            <h4>Keyboard</h4>
            <p className="meta">Apple Magic or Microsoft Wireless 3050</p>
            <div className="options">{keyboardOptions}</div>
            <div className="form-group">
              <label
                className="keyboard-comment"
                htmlFor="keyboardComment"
                onClick={this.displayTextbox}
              >
                Prefer something else?
              </label>
              {this.state.displayTextbox && (
                <input
                  className="form-control"
                  id="keyboardComment"
                  name="keyboardComment"
                  placeholder="What would you prefer?"
                  value={this.props.keyboardComment}
                  onChange={this.props.handleChange}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Step4;
