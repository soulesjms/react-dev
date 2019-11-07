import React, { Component } from "react";

class Item extends Component {
  state = {
    value: this.props.value
  };

  handleIncrement = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.state.value}</span>
        <button
          className="btn btn-secondary btn-small"
          onClick={this.handleIncrement}
        >
          +
        </button>
        <button className="btn btn-secondary btn-small">-</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
}

export default Item;
