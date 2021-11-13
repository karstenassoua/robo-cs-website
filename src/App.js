import React from "react";
import GlobalStyle from "./globalStyles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import About from "./pages/About/About";

import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import { Navbar, Footer } from "./components";

import Login from "./components/authcomponents/Login/Login"
import Signup from "./components/authcomponents/Signup/Signup"
import Dashboard from "./components/Dashboard"

import UpdateProfile from "./components/UpdateProfile"
// import { Container } from "react-bootstrap";
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/authcomponents/ForgotPassword/ForgotPassword"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/events" exact component={Events}></Route>
        <Route path="/about" exact component={About}></Route>
      </Switch>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;
