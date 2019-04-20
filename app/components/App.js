import React from "react";
import { render } from "react-dom";
import MasterForm from "./MasterForm";
import ThankYou from "./ThankYou";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={MasterForm} />
          <Route path="/thankyou" component={ThankYou} />
        </div>
      </Router>
    );
  }
}

export default App;
