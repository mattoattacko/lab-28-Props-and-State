import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  render() {
    return <Message />;
  }
}

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "Hello World" };
  }
  render() {
    //this keeps moving when I save it. No clue why.
    return <div>{this.state.text}</div>;
  }
}

export default Message;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
