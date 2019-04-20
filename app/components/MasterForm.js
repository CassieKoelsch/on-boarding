import React from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "./Logo";
import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import Step5 from "./Steps/Step5";
import Step6 from "./Steps/Step6";
import Progress from "./Steps/Progress";

class MasterForm extends React.Component {
  static propTypes = {
    totalSteps: PropTypes.number.isRequired
  };
  static defaultProps = {
    totalSteps: 6
  };
  state = {
    currentStep: 1,
    username: "",
    path: "",
    machine: "",
    monitor: "",
    mouse: "",
    mouseType: "",
    keyboard: "",
    keyboardComment: "",
    software: "",
    accomodations: "",
    canContinue: false,
    formValidity: {
      username: false,
      path: false,
      machine: false,
      monitor: false,
      mouse: false,
      keyboard: false
    },
    toThankYou: false
  };

  _next = () => {
    const validity = this.state.formValidity;
    let currentStep = this.state.currentStep;
    let totalSteps = this.state.totalSteps;
    currentStep = currentStep >= totalSteps - 1 ? totalSteps : currentStep + 1;

    if (currentStep === 2) {
      this.setState({
        currentStep: currentStep,
        canContinue: validity.path
      });
    } else if (currentStep === 3) {
      this.setState({
        currentStep: currentStep,
        canContinue: validity.machine
      });
    } else if (currentStep === 4) {
      this.setState({
        currentStep: currentStep,
        canContinue: validity.monitor && validity.mouse && validity.keyboard
      });
    } else if (currentStep === 5) {
      this.setState({
        currentStep: currentStep,
        canContinue: true
      });
    } else {
      this.setState({
        currentStep: currentStep,
        canContinue: false
      });
    }
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
      canContinue: true
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState(
      {
        [name]: value
      },
      function() {
        this.validateField(name, value);
      }
    );
  };

  validateField(name, value) {
    if (Object.keys(this.state.formValidity).includes(name)) {
      const validity = this.state.formValidity;

      validity[name] = value.length > 0;

      this.setState(
        {
          formValidity: validity
        },
        () => this.canContinue(name)
      );
    }
  }

  canContinue(name) {
    const validity = this.state.formValidity;
    const isUsername = name === "username";
    const isPath = name === "path";
    const isMachine = name === "machine";
    const isMonitor = name === "monitor";
    const isMouse = name === "mouse";
    const isKeyboard = name === "keyboard";

    if (validity[name]) {
      if (isMonitor || isMouse || isKeyboard) {
        this.setState({
          canContinue: validity.monitor && validity.mouse && validity.keyboard
        });
      } else if (isUsername) {
        this.setState({
          canContinue: validity.username
        });
      } else if (isPath) {
        this.setState({
          canContinue: validity.path
        });
      } else if (isMachine) {
        this.setState({
          canContinue: validity.machine
        });
      }
    }
  }
  enterPressed = event => {
    let code = event.keyCode || event.which;
    if (code === 13) {
      event.preventDefault();

      if (this.state.currentStep === 1 && this.state.username.length > 0) {
        this._next();
      } else if (this.state.currentStep === 2 && this.state.path.length > 0) {
        this._next();
      } else if (
        this.state.currentStep === 3 &&
        this.state.machine.length > 0
      ) {
        this._next();
      } else if (
        this.state.currentStep === 4 &&
        this.state.monitor.length > 0 &&
        this.state.mouse.length > 0 &&
        this.state.keyboard.length > 0
      ) {
        this._next();
      } else if (this.state.currentStep === 5) {
        this._next();
      } else if (this.state.currentStep === 6) {
        this.handleSubmit(event);
      }
    }
  };
  componentDidMount() {
    document.addEventListener("keydown", this.enterPressed, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.enterPressed, false);
  }
  handleSubmit = event => {
    event.preventDefault();
    const {
      username,
      path,
      machine,
      monitor,
      mouse,
      mouseType,
      keyboard,
      keyboardComment,
      software,
      accomodations
    } = this.state;

    const templateParams = {
      name: username,
      path: path,
      machine: machine,
      monitor: monitor,
      mouse: mouse,
      mouseType: mouseType,
      keyboard: keyboard,
      keyboardComment: keyboardComment,
      software: software,
      accomodations: accomodations
    };

    const service_id = "default_service";
    const template_id = "template_yZ48xKOb";
    emailjs.send(service_id, template_id, templateParams).then(
      response => {
        console.log("SUCCESS!", response.status, response.text);

        this.setState({
          toThankYou: true
        });
      },
      error => {
        console.log("FAILED...", error);
      }
    );
  };

  get previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="btn-back" type="button" onClick={this._prev}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
      );
    }
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    let totalSteps = this.props.totalSteps;
    if (currentStep < totalSteps) {
      return (
        <button
          className="btn"
          type="button"
          onClick={this._next}
          disabled={!this.state.canContinue}
        >
          Continue
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      );
    }
    return null;
  }

  render() {
    const {
      currentStep,
      username,
      path,
      machine,
      monitor,
      mouse,
      mouseType,
      keyboard,
      keyboardComment,
      software,
      accomodations,
      canContinue
    } = this.state;
    const { totalSteps } = this.props;

    if (this.state.toThankYou === true) {
      return <Redirect to="/thankyou" />;
    }

    return (
      <div className="container main">
        <p className="step-counter">
          {currentStep} of {totalSteps}
        </p>
        <Progress currentStep={currentStep} totalSteps={totalSteps} />
        <Logo />
        <form onSubmit={this.handleSubmit} className="steps">
          <div className="step-container">
            <Step1
              currentStep={currentStep}
              handleChange={this.handleChange}
              username={username}
            />
            <Step2
              currentStep={currentStep}
              handleChange={this.handleChange}
              path={path}
            />
            <Step3
              currentStep={currentStep}
              handleChange={this.handleChange}
              machine={machine}
            />
            <Step4
              currentStep={currentStep}
              handleChange={this.handleChange}
              monitor={monitor}
              mouse={mouse}
              mouseType={mouseType}
              keyboard={keyboard}
              keyboardComment={keyboardComment}
            />
            <Step5
              currentStep={currentStep}
              handleChange={this.handleChange}
              software={software}
              path={path}
            />
            <Step6
              currentStep={currentStep}
              handleChange={this.handleChange}
              accomodations={accomodations}
            />
          </div>
        </form>
        {this.previousButton}
        {this.nextButton}
      </div>
    );
  }
}

export default MasterForm;
