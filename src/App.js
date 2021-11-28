import React from "react";
import GlobalStyle from "./globalStyles";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import Events from "./pages/Events/Events";
import About from "./pages/About/About";

import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./contexts/AuthContext";
import { Navbar, Footer } from "./components";

import Login from "./components/authcomponents/Login/Login"
import Signup from "./components/authcomponents/Signup/Signup"
import Dashboard from "./components/authcomponents/Dashboard/Dashboard"
import AdminDash from "./components/authcomponents/AdminDash/AdminDash"

import UpdateProfile from "./components/authcomponents/UpdateProfile/UpdateProfile"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./components/authcomponents/ForgotPassword/ForgotPassword"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <AuthProvider>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/events" exact component={Events}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
          <Switch>
            <PrivateRoute exact path="/profile" component={Dashboard} />
            <PrivateRoute exact path="/admin" component={AdminDash} />
            <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path='*'><Redirect to='/' /></Route>
          </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
