import React, { Component } from "react";
import { Consumer } from "./Context";
import { MyContext } from "./App";
export default class Guest extends Component {
  state = {
    username: "",
  };
  inputHandler = (e) => {
    this.setState({
      username: e.target.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Guest Component</h1>
        <Consumer>
          {({ data, handleClick }) => (
            <>
              <h3>{data.name}</h3>
              <input name="username" type="text" onKeyUp={this.inputHandler} />
              <button onClick={() => handleClick(this.state.username)}>
                Click
              </button>
            </>
          )}
        </Consumer>
      </div>
    );
  }
}
