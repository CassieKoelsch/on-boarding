import React from "react";
import { render } from "react-dom";
import Favicon from "react-favicon";
import MasterForm from "./MasterForm";
import ThankYou from "./ThankYou";
import favicon from "../assets/images/favicon.ico";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Favicon url={favicon} />
          <Route exact path="/" component={MasterForm} />
          <Route path="/thankyou" component={ThankYou} />
        </div>
      </Router>
    );
  }
}

export default App;
