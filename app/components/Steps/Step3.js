import React from "react";
import PropTypes from "prop-types";
import MacIcon from "../../assets/images/apple-big-logo.svg";
import PcIcon from "../../assets/images/windows-8.svg";
import Modal from "../Modal";

function MacModalContent() {
  return (
    <div>
      <h4>15-inch MacBook Pro</h4>
      <ul>
        <li>
          2.7 GHz Intel QuadCore i7 64-bit processor / Retina 2880x1800 Display / Authentic 85W
        </li>
        <li>MagSafe Power adapter</li>
        <li>16GB DDR3 Brand New fully tested memory / 512GB Solid State Drive / Fresh Installation of MacOS 10.12 Sierra</li>
        <li>15.4 inch LED-backlit display , Two USB 3.0 ports , Two ThunderBolt 2 Ports</li>
        <li>HDMI port , An audio in, out port , SDXC card slot.</li>
      </ul>
    </div>
  );
}

function PCModalContent() {
  return (
    <div>
      <h4>Dell XPS 15</h4>
      <ul>
        <li>
          The world’s only 15.6-inch InfinityEdge display*: The virtually borderless display maximizes screen space by accommodating a 15.6-inch display inside a laptop closer to the size of a 14-inch, thanks to a bezel measuring just 5.7mm.
        </li>
        <li>Operating System: Windows 10 Pro.</li>
        <li> 11-17mm and starting at just 4 pounds (1.8 kg) with a solid state drive, the XPS 15 is one of the world’s lightest 15-inch performance-class laptop.</li>
      </ul>
    </div>
  );
}

class Step3 extends React.Component {
  state = {
    machineTypes: [
      {
        name: "Mac",
      },
      {
        name: "PC",
      }
    ]
  };
  render() {
    const modalProps = {
      ariaLabel: "Computer spec details",
      triggerText: "Specs"
    };

    const machine = this.props.machine;
    const options = this.state.machineTypes.map((loan, key) => {
      const isCurrent = this.props.machine === loan.name;
      const isMac = loan.name === "Mac";
      const isPC = loan.name === "PC";

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
                name="machine"
                id={loan.name}
                value={loan.name}
                onChange={this.props.handleChange}
              />
              <h4>{loan.name}</h4>
              {isMac && <MacIcon />}
              {isPC && <PcIcon />}
            </label>
            <Modal {...modalProps}>
              {isMac && <MacModalContent />}
              {isPC && <PCModalContent />}
            </Modal>
          </div>
        </div>
      );
    });
    if (this.props.currentStep !== 3) {
      return null;
    }
    return (
      <div className="step3">
        <h3>Pick your side</h3>
        <div className="options">{options}</div>
      </div>
    );
  }
}

export default Step3;
