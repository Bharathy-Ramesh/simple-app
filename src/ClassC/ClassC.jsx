import React, { Component } from "react";

class ClassC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Class Component",
    };
    console.log("ClassC Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log(" ClassC props:", props, "state:", state);
    return { name: "Class Components" };
  }

  shouldComponentUpdate() {
    console.log("ClassC Should Component Update");
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log(
      "ClassC getSnapshotBeforeUpdate: ",
      prevProp,
      "next: ",
      prevState
    );
    return null;
  }

  componentDidMount() {
    console.log("ClassC componentDidMount");
  }

  componentDidUpdate() {
    console.log("ClassC componentDidUpdate");
  }

  componentWillUnmount(){
    console.log("ClassC Unmounted");
  }

  changeName = () => {
    this.setState({ name: "Functional Component" });
  };

  render() {
    const {showProps} = this.props;
    console.log(showProps);
    return (
      <>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Click me</button>
      </>
    );
  }
}

export default ClassC;
