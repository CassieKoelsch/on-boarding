import React from "react";
import { createPortal } from "react-dom";

class Modal extends React.Component {
  state = { isOpen: false };

  toggleScrollLock = () =>
    document.querySelector("html").classList.toggle("u-lock-scroll");

  onOpen = () => {
    this.setState({ isOpen: true }, () => {
      this.closeButtonNode.focus();
    });
    this.toggleScrollLock();
  };

  onClose = () => {
    this.setState({ isOpen: false });
    this.openButtonNode.focus();
    this.toggleScrollLock();
  };

  onKeyDown = ({ keyCode }) => keyCode === 27 && this.onClose();

  onClickAway = e => {
    if (this.modalNode && this.modalNode.contains(e.target)) return;
    this.onClose();
  };

  render() {
    const { isOpen } = this.state;
    const { ariaLabel, children, triggerText, role } = this.props;

    const ModalTrigger = ({ buttonRef, onOpen, text }) => (
      <button className="c-btn" onClick={onOpen} ref={buttonRef}>
        {text}
      </button>
    );

    const ModalContent = ({
      ariaLabel,
      buttonRef,
      content,
      modalRef,
      onClickAway,
      onClose,
      onKeyDown,
      role = "dialog"
    }) => {
      return createPortal(
        <aside
          aria-modal="true"
          className="c-modal-cover"
          tabIndex="-1"
          role={role}
          aria-label={ariaLabel}
          onKeyDown={onKeyDown}
          onClick={onClickAway}
        >
          <div className="c-modal" ref={modalRef}>
            <button
              className="c-modal__close"
              aria-labelledby="close-modal"
              onClick={onClose}
              ref={buttonRef}
            >
              <span id="close-modal" className="u-hide-visually">
                Close Modal
              </span>
              <svg
                className="c-modal__close-icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 0C4.02975 0 0 4.02975 0 9C0 13.9703 4.02975 18 9 18C13.9703 18 18 13.9703 18 9C18 4.02975 13.9703 0 9 0ZM12.1132 13.4573L9.006 10.3807L5.91825 13.5L4.5435 12.1252L7.6215 9.0075L4.5 5.91825L5.87475 4.5435L8.991 7.62L12.0705 4.5L13.4573 5.88675L10.3822 8.9925L13.5 12.0705L12.1132 13.4573Z"
                  fill="#EBEBEB"
                />
              </svg>
            </button>

            <div className="c-modal__body">{content}</div>
          </div>
        </aside>,
        document.body
      );
    };

    return (
      <React.Fragment>
        <ModalTrigger
          onOpen={this.onOpen}
          buttonRef={n => (this.openButtonNode = n)}
          text={triggerText}
        />
        {isOpen && (
          <ModalContent
            ariaLabel={ariaLabel}
            buttonRef={n => (this.closeButtonNode = n)}
            modalRef={n => (this.modalNode = n)}
            content={children}
            onClickAway={this.onClickAway}
            onClose={this.onClose}
            onKeyDown={this.onKeyDown}
            role={role}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Modal;
