import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    console.log("constructor");
  }

  //call back function
  buttonClickHandler() {
    this.setState({ renderBall: true });
    console.log("clickhandler");
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
    }
  }
  //bind ArrowRight keydown event
  componentDidMount(e) {
    document.addEventListener("keyDown", this.componentDidMount);
    if (e.keyCode === 39) {
      this.setState({
        ballPosition: {
          left: +this.state.ballPosition.left.split("px")[0] + 5 + "px"
        }
      });
    }
    console.log("right");
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
