import React from "react";
import Reflux from "reflux";
import { Button, ButtonGroup } from "reactstrap";
import RawTextStore from "./../Stores/RawTextStore.js";
import Paragraph from "./Paragraph.js";
import Actions from "./../action.js";
import Highlightable from "highlightable";

class NewPoemPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RawTextStore;
  }

  onTextHighlightedCallback = range => {
    Actions.saveRange(range.start, range.end, range.text, range.data);
  };

  onMouseOverHighlightedWordCallback = range => {};
  //take text, paragraph #(object key index), blackout_index as 3 props
  render() {
    console.log("Rendering");
    var self = this;
    // ranges = this.state.poem[0].blackout_index;

    var display_text = this.state.poem.map(function(item, i) {
      console.log("Printing ranges here");
      console.log(item.blackout_index);
      return (
        <Highlightable
          ranges={item.blackout_index}
          key={i}
          enabled={true}
          onTextHighlighted={self.onTextHighlightedCallback}
          highlightStyle={{
            backgroundColor: "#000000"
          }}
          text={item.text}
        />
      );
    });
    return (
      <div>
        <ButtonGroup>
          <Button>Select</Button>
          <Button>Erase</Button>
        </ButtonGroup>
        <div>{display_text}</div>
      </div>
    );
  }
}

export default NewPoemPage;
