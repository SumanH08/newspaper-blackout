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
    Actions.saveRange(range);
  };

  onMouseOverHighlightedWordCallback = range => {};
  //take text, paragraph #(object key index), blackout_index as 3 props
  render() {
    console.log("Rendering");
    var self = this;
    var display_text = this.state.poem.map(function(item, i) {
      const indexStr = JSON.stringify(item.blackout_index);
      console.log("Printing ranges here");
      console.log(item.blackout_index);
      return (
        <Highlightable
          ranges={JSON.parse(indexStr)}
          key={i}
          id={i.toString()}
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
