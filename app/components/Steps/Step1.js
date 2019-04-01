import React from "react";
import PropTypes from "prop-types";
import AutosizeInput from "react-input-autosize";

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    }
    return (
      <div className="form-group step1">
        <AutosizeInput
          className={`form-control`}
          id="username"
          name="username"
          type="text"
          autoComplete="off"
          autoFocus={true}
          placeholder="First & last name "
          value={this.props.username}
          onChange={this.props.handleChange}
        />
      </div>
    );
  }
}

export default Step1;
