import React from "react";
import PropTypes from "prop-types";
import EngineerIcon from "../../assets/images/engineer.svg";
import DeveloperIcon from "../../assets/images/developer.svg";
import DesignerIcon from "../../assets/images/designer.svg";
import PMIcon from "../../assets/images/pm.svg";

class Step2 extends React.Component {
  state = {
    pathTypes: [
      {
        name: "Engineer",
      },
      {
        name: "Developer",
      },
      {
        name: "Designer",
      },
      {
        name: "PM",
      }
    ]
  };
  render() {
    const path = this.props.path;
    const options = this.state.pathTypes.map((loan, key) => {
      const isCurrent = this.props.path === loan.name;
      return (
        <div key={key} className="radioPad">
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
              name="path"
              id={loan.name}
              value={loan.name}
              onChange={this.props.handleChange}
            />
            <h4>{loan.name}</h4>
            {loan.name === "Engineer" &&
            <EngineerIcon />}
            {loan.name === "Developer" &&
            <DeveloperIcon />}
            {loan.name === "Designer" &&
            <DesignerIcon />}
            {loan.name === "PM" &&
            <PMIcon />}
          </label>
        </div>
      );
    });
    if (this.props.currentStep !== 2) {
      return null;
    }
    return (
      <div className="step2">
        <h3>Choose your path</h3>
        <div className="options">{options}</div>
      </div>
    );
  }
}

export default Step2;
