import React, { Component } from "react";
import Item from "./Item";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counters: [
        { id: 0, value: 0, name: "Xbox One" },
        { id: 1, value: 0, name: "Playstation 4" },
        { id: 2, value: 0, name: "Nintendo Switch" },
        { id: 3, value: 0, name: "Occulus Rift" }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Item key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Store;
