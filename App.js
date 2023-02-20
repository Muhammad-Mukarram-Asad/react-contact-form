// import logo from './logo.svg';
import "./App.css";
// import ContactForm from './components/contactForm';
import Login from "./AnotherComponent/Login";
import Signup from "./AnotherComponent/Signup";
import Home from "./AnotherComponent/Home";
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRouteFunction from "./AnotherComponent/ProtectedRoute";
import Phone_SignIn from "./AnotherComponent/Phone_SignIn";
function App() {
  return (
    <div className="App">
          {/* <ContactForm /> */}
      <Container style={{width: "500"}}>
        <Row>
          <Col>
            <UserAuthContextProvider>
                <Routes>
                  <Route
                    path="/home"
                    element={
                      <ProtectedRouteFunction>
                        {" "}
                        <Home />{" "}
                      </ProtectedRouteFunction>
                    }
                  />
                  <Route path="/" element={<Login />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/phone_signin" element={<Phone_SignIn />} />
                </Routes>
             
            </UserAuthContextProvider>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
