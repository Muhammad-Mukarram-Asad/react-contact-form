import React from "react";

// For Phone Number Sign_In, we have to import PhoneInput and its CSS:
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

export default function Phone_SignIn() {
  const [number, setNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmOtp, setConfirmOtp] = useState("");
  const [flag, setFlag] = useState(true);

  const { setupRecaptcha } = useUserAuth();
  const navigate = useNavigate();

  // Handle OTP Function Below:
  const handleOTP = async (e) => {
    e.preventDefault();
    setError("");

    if (number === "" || number === undefined) {
      return setError("Plz enter the phone number correctly.");
    }
    try {
      const response = await setupRecaptcha(number);
      setConfirmOtp(response);
      setFlag(false);
      console.log(confirmOtp);
    } catch (error) {
      setError(error.message);
    }
    console.log(number);
  };

  // Verify OTP Function Below:
  const verifyOTP = async (e) => {
    e.preventDefault();
    setError("");

    console.log(otp);
    if (otp == "" || otp == null) return;

    try {
      await confirmOtp.confirm(otp);
      navigate("/home");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="p-4 box">
      <h2 className="mb-3">Firebase Phone Auth Login</h2>

      {/* For the displaying of an error message. */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* This below form is for handling an OTP request */}
      <Form onSubmit={handleOTP} style={{ display: flag ? "block" : "none" }}>
        <Form.Group className="mb-3" controlId="formBasicPhoneNumber">
          {/* Here below, I used a npm package for taking phone-input */}

          <PhoneInput
            defaultCountry="PK"
            value={number}
            onChange={(newNumber) => {
              setNumber(newNumber);
            }}
            placeholder="Enter your contact number"
          />
        </Form.Group>

        {/* Very important for re-captcha verifier */}
        <div id="recaptcha-container" />

        <div className="d-grid gap-2 mt-3">
          <Button variant="success" style={{ marginLeft: 50 }} type="submit">
            {" "}
            Send OTP{" "}
          </Button>

          <Link to="/">
            {" "}
            <Button variant="secondary" type="button">
              {" "}
              Cancel Phone_SignIn{" "}
            </Button>{" "}
          </Link>
        </div>
      </Form>

      <Form onSubmit={verifyOTP} style={{ display: !flag ? "block" : "none" }}>
        <Form.Group className="mb-3" controlId="formBasicOtp">
          <Form.Control
            type="number"
            placeholder="Enter Your Verification Code Here:"
            onChange={(e) => setOtp(e.target.value)}
          />

          <div className="d-grid gap-2 mt-3">
            <Button variant="success" style={{ marginLeft: 30 }} type="submit">
              {" "}
              Verify OTP{" "}
            </Button>

            <Link to="/">
              {" "}
              <Button variant="secondary" type="button">
                {" "}
                Cancel Phone_SignIn{" "}
              </Button>{" "}
            </Link>
            
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}
