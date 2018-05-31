import React from "react";
import Reflux from "reflux";
import { Button, ButtonGroup } from "reactstrap";
import RawTextStore from "./../Stores/RawTextStore.js";
import Paragraph from "./Paragraph.js";
import Actions from "./../action.js";

class NewPoemPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RawTextStore;
    this.mouseup = this.mouseup.bind(this);
  }

  mouseup = () => {
    console.log("Calling mouse up");
    // var userSelection = window.getSelection();
    // var start = [],
    //   end = [];
    // for (let i = 0; i < userSelection.rangeCount; ++i) {
    //   start.push(userSelection.getRangeAt(i).startOffset);
    //   end.push(userSelection.getRangeAt(i).endOffset);
    // }
    // console.log(window.getSelection().getRangeAt(0));
    // console.log(window.getSelection().rangeCount);
    var startOffset = window.getSelection().getRangeAt(0).startOffset;
    var endOffset = window.getSelection().getRangeAt(0).endOffset;
    console.log(startOffset, endOffset);
    Actions.saveRange(startOffset, endOffset);
  };
  //take text, paragraph #(object key index), blackout_index as 3 props
  render() {
    console.log("Rendering");
    console.log(this.state.poem);
    var display_text = this.state.poem.map(function(item, i) {
      return (
        <Paragraph
          key={i}
          text={item.text}
          number={i}
          blackout={item.blackout_index}
        />
      );
    });
    return (
      <div>
        <ButtonGroup>
          <Button>Select</Button>
          <Button>Erase</Button>
        </ButtonGroup>
        <div onMouseUp={this.mouseup}>{display_text}</div>
      </div>
    );
  }
}

export default NewPoemPage;
