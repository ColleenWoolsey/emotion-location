import React, { Component } from "react";
import NavBar from "./nav/NavBar";
import AppViews from "./AppViews";
import "./Emoloco.css";

// import "bootstrap/dist/css/bootstrap.min.css";

class Emoloco extends Component {
  render() {
    return (
      <React.Fragment>
        <AppViews />
        <NavBar />
      </React.Fragment>
    );
  }
}

export default Emoloco;