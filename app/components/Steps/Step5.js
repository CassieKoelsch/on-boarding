import React from "react";
import PropTypes from "prop-types";

class Step5 extends React.Component {
  state = {
    softwareList: []
  };
  componentWillReceiveProps(props) {
    if (props.path === "Engineer") {
      this.setState({
        softwareList: [
          "Slack",
          "Notion",
          "Postman",
          "Xcode",
          "Figma"
        ]
      });
    } else if (props.path === "Developer") {
      this.setState({
        softwareList: [
          "Slack",
          "Notion",
          "Postman",
          "Xcode",
          "Figma"
        ]
      });
    } else if (props.path === "Designer") {
      this.setState({
        softwareList: [
          "Slack",
          "Notion",
          "Figma",
          "Adobe CC"
        ]
      });
    } else if (props.path === "PM") {
      this.setState({
        softwareList: [
          "Slack",
          "Notion"
        ]
      });
    }
  }

  render() {
    const software = this.state.softwareList.map((item, key) => {
      return (
        <li key={key} className="software-item">
          {item}
        </li>
      );
    });

    if (this.props.currentStep !== 5) {
      return null;
    }

    return (
      <div className="step5">
        <h3>Software</h3>
        <div className="software-details">
          <p>
            We got you covered. Here’s what software you can expect installed on
            day one.
          </p>
          <ul className="software-list">{software}</ul>
        </div>
        <div className="form-group">
          <label htmlFor="software" className="meta">
            Other software you’d like for us to consider?
          </label>
          <textarea
            className="form-control"
            id="software"
            name="software"
            value={this.props.software}
            onChange={this.props.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Step5;
