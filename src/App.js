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

// Defining the core app component, which will be rendered when the website is opened.

function App() {
  return (
    <Router> {/* Including React Router to manage navigation and linking later on. */}
      <GlobalStyle /> {/* We include the global design information stored in globalStyles.js. */}
      <ScrollToTop /> {/* Including the ScrollToTop component at the top level, which needs to have app-wide functionality. */}
      <AuthProvider>  {/* Including the AuthProvider to inform subcomponents of important authentication updates and details. */}
        <Navbar /> {/* Placing the navigation bar component at the top of all rendered pages. */}
        <Switch>
          {/* Creating routes for the home page, updates page, events page, and about page. */}
          <Route path="/" exact component={Home}></Route>
          <Route path="/updates"
            render={() => {
              window.location = "https://medium.com/@robocompsci" 
              return (
                <h1 style={{ color: "#fdc500", display: "flex", justifyContent: "center", margin: "20%"}}>
                  Redirecting...
                </h1>
              );
            }} />
          <Route path="/events" exact component={Events}></Route>
          <Route path="/about" exact component={About}></Route>
        </Switch>
          <Switch>
            {/* Creating routes for authentication pages. */}
            <PrivateRoute exact path="/profile" component={Dashboard} />
            <PrivateRoute exact path="/admin" component={AdminDash} />
            <PrivateRoute exact path="/update-profile" component={UpdateProfile} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
            {/* Redirecting all other paths to the home page. */}
            <Route path='*'><Redirect to='/' /></Route>
          </Switch>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
