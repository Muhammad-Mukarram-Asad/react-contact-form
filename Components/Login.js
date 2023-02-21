import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {Form,Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
import Alert from 'react-bootstrap/Alert';


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();

  const navigate = useNavigate();

  // Email & Password function imported from firebase based functions:
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  // Google signin function:
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  /*
  One basic difference between usage of <Link> and useNavigate is that Link is used in JSX
  means use inside the return() method.
  while the UseNavigate is use in function means before return().
  */
 let variable = "Hello Guys...."

// function BasicExample() {
//   return (
//     <>
//       {[
//         'primary',
//         'secondary',
//         'success',
//         'danger',
//         'warning',
//         'info',
//         'light',
//         'dark',
//       ].map((variant) => (
//         <Alert key={variant} variant={variant}>
//           This is a {variant} alert—check it out!
//         </Alert>
//       ))}
//     </>
//   );
// }

  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>

        {/* For the displaying of an error message. */}
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Enter Your Email Here"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Enter Your Password Here"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>

        
        <div className="d-grid gap-2 mt-3">
        <Link  to="phone_signin">
            <Button variant="success" size={20} type="button">
              Sign In with Phone Number
            </Button>
        </Link>
          </div>
      </div>
      <div className="p-4 box mt-6 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </>
  );
}
