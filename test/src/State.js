import React, { Component } from "react";

export default class State extends Component {
  constructor() {
    super();
    this.state = {
      pass: "password",
    };
  }
  onPasswordChange = (that) => {
    this.setState({
      [that.target.name]: that.target.value,
    });
  };
  render() {
    return (
      <div>
        <input type="text" name="pass" onKeyUp={this.onPasswordChange} />
        <h3>{this.state.pass}</h3>
      </div>
    );
  }
}
