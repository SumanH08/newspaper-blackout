import React from "react";
import Reflux from "reflux";

class Paragraph extends Reflux.Component {
  render() {
    var { text, blackout } = this.props;
    var string_arr = [],
      prev = 0;
    var indices = [];
    // handle empty and default behavior at the top - to avoid else and keep it simple
    if (blackout.length === 0) {
      return <p>{text}</p>;
    }

    // converting the position object into a single dimensional array
    blackout.forEach(function(position, j) {
      indices.push(position.st);
      indices.push(position.ed);
    });

    indices.sort((a, b) => a - b);
    console.log(indices);

    //creating an array of sub_texts by splitting the raw text - using st and ed
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

    console.log(string_arr);

    var temp = string_arr.map(function(sliced_text, l) {
      if (indices[0] === 0) {
        if (l % 2 === 0) {
          return (
            <em key={l} className="blackout_text">
              {sliced_text}
            </em>
          );
        }
      } else if (l % 2 !== 0) {
        return (
          <em key={l} className="blackout_text">
            {sliced_text}
          </em>
        );
      }
      return <em key={l}>{sliced_text}</em>;
    });
    // return { temp };  syntax to return an obj with value "temp" AND key also "temp"
    return <p>{temp}</p>;
  }
}

export default Paragraph;

//1. No more temps
//2. Clean up code that you dont need before committing
