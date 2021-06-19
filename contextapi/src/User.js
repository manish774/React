import React, { Component } from "react";
import Guest from "./Guest";
import { Consumer } from "./Context";
export default class User extends Component {
  render() {
    return (
      <div>
        <h1>User Components</h1>
        <Consumer>
          {({ data, handleClick }) => (
            <>
              <h3>{data.name}</h3>
            </>
          )}
        </Consumer>
        <h1>-------------</h1>
        <Guest />
      </div>
    );
  }
}
