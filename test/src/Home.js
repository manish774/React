import React, { Component } from "react";
import Functional from "./FunctionalCompopnent";
import State from "./State";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "Manihs",
      email: "manish@mm.com",
    };
  }
  onChangeInput = (that) => {
    this.setState({
      [that.target.name]: that.target.value,
    });
  };

  render() {
    return (
      <div>
        <input type="text" name="name" onKeyUp={this.onChangeInput} />
        <input type="text" name="email" onKeyUp={this.onChangeInput} />
        <h1>{this.state.name}</h1>
        <h1>{this.state.email}</h1>
        {/* <Functional name="manish Kumar" />
        <Functional name="Priya" />
        <Functional name="Hello" /> */}
        <State />
      </div>
    );
  }
}

export default Home;
