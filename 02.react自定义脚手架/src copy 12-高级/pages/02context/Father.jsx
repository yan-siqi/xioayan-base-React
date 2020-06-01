import React, { Component } from "react";
import Son from "./Son";
import personContext from "./context";
export default class Father extends Component {
  static contextType = personContext;
  render() {
    return (
      <>
        Father
        <Son />
      </>
    );
  }
}
