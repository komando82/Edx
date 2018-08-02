import React from "react";
import { Prompt } from "react-router-dom";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit() {
    this.setState({ value: "" });
  }
  render() {
    var style = {
      width: 300,
      height: 60,
      margin: 10
    };
    return (
      <div>
        <input
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          style={style}
        />
        <div>
          <button onClick={this.handleSubmit.bind(this)}>Send</button>
        </div>
        <Prompt
          when={this.state.value !== ""}
          message="are you sure you want to leave without sending a message?"
        />
      </div>
    );
  }
}

export default Contact;