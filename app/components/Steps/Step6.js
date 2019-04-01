import React from "react";
import PropTypes from "prop-types";

class Step6 extends React.Component {
  render() {
    if (this.props.currentStep !== 6) {
      return null;
    }
    return (
      <div className="step6">
        <h3>Put your mind at ease</h3>
        <div className="resource-details">
          <p>Helpful Resources</p>
          <ul className="resource-list">
            <li className="resource-item">Where should I park?</li>
            <li className="resource-item">What is the dress code?</li>
            <li className="resource-item">Vision and Misson</li>
            <li className="resource-item">Our tech stack</li>
            <li className="resource-item">Design Details</li>
            <li className="resource-item">Development Procedures</li>
            <li className="resource-item">Helpful link</li>
            <li className="resource-item">Helpful link</li>
            <li className="resource-item">Helpful link</li>
          </ul>
        </div>
        <div className="form-group">
          <label htmlFor="accomodations" className="meta">
            Other accomodations we should be aware of?
          </label>
          <textarea
            className="form-control"
            id="accomodations"
            name="accomodations"
            value={this.props.accomodations}
            onChange={this.props.handleChange}
          />
        </div>
        <button className="btn btn-success btn-block">Finish</button>
      </div>
    );
  }
}

export default Step6;
