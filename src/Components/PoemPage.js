import React, { Component } from "react";

class PoemPage extends Component {
  render() {
    console.log(this.props.match);
    return <div>Read each poem here {this.props.match.params.poem_id}</div>;
  }
}

export default PoemPage;
