import React from "react";
import Reflux from "reflux";
import { Button, ButtonGroup } from "reactstrap";
import RawTextStore from "./../Stores/RawTextStore.js";
import Paragraph from "./Paragraph.js";
import Actions from "./../action.js";

class NewPoemPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = { blackout_var: "" };
    this.store = RawTextStore;
    this.mouseup = this.mouseup.bind(this);
  }

  blackout = () => {
    console.log(window.getSelection().getRangeAt(0));
    console.log(window.getSelection().getRangeAt(0).startOffset);
    console.log(window.getSelection().getRangeAt(0).endOffset);
  };

  mouseup = () => {
    console.log("Calling mouse up");
    console.log(window.getSelection().getRangeAt(0));
    console.log(window.getSelection().getRangeAt(0).startOffset);
    console.log(window.getSelection().getRangeAt(0).endOffset);

    var startOffset = window.getSelection().getRangeAt(0).startOffset;
    var endOffset = window.getSelection().getRangeAt(0).endOffset;
    Actions.saveRange(startOffset, endOffset);
  };
  //take text, paragraph #(object key index), blackout_index as 3 props
  render() {
    var display_text = this.state.poem.map(function(item, i) {
      return (
        <p>{item.text}</p>
        // <Paragraph text={item.text} number={i} blackout={item.blackout_index} />
      );
    });
    return (
      <div>
        <ButtonGroup>
          <Button onClick={this.blackout}>Select</Button>
          <Button>Erase</Button>
        </ButtonGroup>
        <p onMouseUp={this.mouseup}>{display_text}</p>
      </div>
    );
  }
}

export default NewPoemPage;

//I can use surroundContents(element) to blacken the selected text
// <p id="temp">{display_text}</p>
