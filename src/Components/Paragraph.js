import React from "react";
import Reflux from "reflux";

class Paragraph extends Reflux.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var { text, number, blackout } = this.props;
    var string_arr = [],
      prev = 0;
    var indices = [];

    blackout.forEach(function(position, j) {
      indices.push(position.st);
      indices.push(position.ed);
    });

    indices.forEach(function(index, k) {
      if (index !== 0) {
        string_arr.push(text.slice(prev, index));
        if (k === indices.length - 1) {
          string_arr.push(text.slice(index));
        }
        prev = index;
      } else if (index === 0) {
        return;
      }
    });

    var temp = string_arr.map(function(sliced_text, l) {
      if (blackout[0].st === 0) {
        //black out alternative starting from 0
        if (l === 0 || l % 2 === 0) {
          return <span className="blackout_text">{sliced_text}</span>;
        }
      } else {
        //blackout alternative starting from 1
        if (l === 1 || l % 2 !== 0) {
          return <span className="blackout_text">{sliced_text}</span>;
        }
      }
      return <span>{sliced_text}</span>;
    });
    return <p>{temp}</p>;
  }
}

export default Paragraph;
