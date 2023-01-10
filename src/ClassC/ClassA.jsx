import React, { Component } from "react";
import ClassC from "./ClassC";

class ClassA extends Component {
  constructor() {
    super();
    this.state = {
      name: "LifeCycle Hooks",
      show: true
    };
    console.log("ClassA Component");
  }
  static getDerivedStateFromProps(props, state) {
    console.log(" ClassA props:", props, "state:", state);
    return { name: "LifeCycle Components" };
  }

  shouldComponentUpdate() {
    console.log("ClassA Should Component Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log(
      "ClassA getSnapshotBeforeUpdate: ",
      prevProp,
      "next: ",
      prevState
    );
    return null;
  }

  componentDidMount() {
    console.log("ClassA componentDidMount");
  }

  componentDidUpdate() {
    console.log("ClassA componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("ClassA Unmounted");
  }

  delete = () => {
    this.setState({show: !this.state.show})
  }
  render() {
    let classC;
    if (this.state.show) {
      classC = <ClassC showProps={"show Property"}/>;
    }
      return (
        <>
          {classC}
          <button onClick={this.delete}>Switch</button>
        </>
      );
  }
}

export default ClassA;
