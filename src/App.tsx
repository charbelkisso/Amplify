import { string } from "prop-types";
import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { getEnvironmentData } from "worker_threads";
export default class App extends Component {
  onButtonClick() {
    alert("hello");
  }
  /* Render */
  render() {
    return (
      <div>
        <p>Hello World Charbel you are learning react</p>
        <Button variant="primary" onClick={this.onButtonClick}>
          Good Button
        </Button>
      </div>
    );
  }
}
