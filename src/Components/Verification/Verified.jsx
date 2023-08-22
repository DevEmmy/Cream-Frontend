import React, { useEffect } from "react";
import axios from "axios";
import { Check } from "heroicons-react";
import { useNavigate } from "react-router-dom";

const Verified = (props) => {
  let { scrollToRef, position } = props;

  const navigate = useNavigate();

  return (
    <>
      <h4>Identity Verification</h4>

      <div className="formField">
        <div className="preF">
          <div className="verifyLogo">
            <div className="logo">
              <Check size="50px" color="white" />
            </div>
            <div className="text">
              <p>
                Your verification application has been submitted. We will review
                the information submitted and send the result to your email
                adress within 1 - 3 business days. Thank you for your patience
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className={"enable"}
        id="button"
        onClick={() => {
          navigate("/profile")
        }}
      >
        Go back to Profile
      </div>
    </>
  );
};

export default Verified;
