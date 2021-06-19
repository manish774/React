import React, { Component } from "react";
import User from "./User";
import { Provider } from "./Context";
export default class App extends Component {
  state = {
    name: "Manish",
  };
  handleClickFunc = (args) => {
    this.setState({
      name: args,
    });
  };
  render() {
    const data = {
      data: this.state,
      handleClick: this.handleClickFunc,
    };
    return (
      <div>
        <Provider value={data}>
          <User />
        </Provider>
      </div>
    );
  }
}
