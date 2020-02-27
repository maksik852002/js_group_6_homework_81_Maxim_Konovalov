import React from "react";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const Modal = ({ error, close }) => {
  return (
    <>
      <div className="continer">
        <Backdrop show={error} onClick={close} />
        <div
          className="modal"
          style={{
            display: error ? "block" : "none",
            width: "45%",
            height: "24%",
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)"
          }}
        >
          <div style={{ margin: "auto" }} className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  {error.response ? `Error: ${error.response.status} (${error.response.statusText})` : error.toString()}
                </h5>
                <Button addClass="close" label="x" click={close} />
              </div>
              <div className="modal-body">
                <p>{error.response ? error.response.data.message : 'Cannot connect to database'}</p>
              </div>
              <div className="modal-footer">
                <Button addClass="secondary" label="Close" click={close} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
