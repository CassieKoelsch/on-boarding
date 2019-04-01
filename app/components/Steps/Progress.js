import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default class Progress extends React.Component {
  createDots = props => {
    let list = [];
    const { totalSteps, currentStep } = this.props;

    for (let i = 0; i < totalSteps; i++) {
      let active = false;
      if (i === currentStep - 1) {
        active = true;
      }

      list.push(
        <li key={i}>
          <div className={active ? "active" : ""}>
            <FontAwesomeIcon icon={faCircle} />
          </div>
        </li>
      );
    }

    return list;
  };
  render() {
    return (
      <div className="progress">
        <ul className="progress-bar">{this.createDots()}</ul>
      </div>
    );
  }
}
