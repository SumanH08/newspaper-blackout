import React from "react";
import Reflux from "reflux";
import { Button, ButtonGroup, Tooltip } from "reactstrap";
import RawTextStore from "./../Stores/RawTextStore.js";
import Paragraph from "./Paragraph.js";
import Actions from "./../action.js";
import Highlightable from "highlightable";
import TooltipA from "rc-tooltip";
import "rc-tooltip/assets/bootstrap.css";

class NewPoemPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RawTextStore;
  }

  onTextHighlightedCallback = range => {
    Actions.saveRange(range);
  };

  resetHightlight = range => {
    Actions.removeRange(range);
  };

  tooltipRenderer = (
    lettersNode,
    range,
    rangeIndex,
    onMouseOverHighlightedWord
  ) => {
    // return (
    //   <span key={`${range.data.id}-${rangeIndex}`}>
    //     <span id="hello">{lettersNode}</span>
    //     <Tooltip placement="right" isOpen={true} target="hello">
    //       Hello world
    //     </Tooltip>
    //   </span>
    // );

    return (
      <TooltipA
        key={`${range.data.id}-${rangeIndex}`}
        onVisibleChange={this.onMouseOverHighlightedWordCallback.bind(
          this,
          range
        )}
        placement="top"
        overlay={
          <div>
            <span onClick={this.resetHightlight.bind(this, range)}>Hello</span>
          </div>
        }
        defaultVisible={true}
        animation="zoom"
      >
        <span>{lettersNode}</span>
      </TooltipA>
    );
  };

  // // TODO: rename to appropriate
  renderRange = (
    currentRenderedNodes,
    currentRenderedRange,
    currentRenderedIndex,
    onMouseOverHighlightedWord
  ) => {
    return this.tooltipRenderer(
      currentRenderedNodes,
      currentRenderedRange,
      currentRenderedIndex,
      onMouseOverHighlightedWord
    );
  };

  render() {
    var self = this;
    var display_text = this.state.poem.map(function(item, i) {
      const indexStr = JSON.stringify(item.blackout_index);
      console.log(indexStr);
      return (
        <Highlightable
          ranges={JSON.parse(indexStr)}
          key={i}
          id={i.toString()}
          enabled={true}
          onMouseOverHighlightedWord={self.onMouseOverHighlightedWordCallback}
          onTextHighlighted={self.onTextHighlightedCallback}
          highlightStyle={{
            backgroundColor: "#000000"
          }}
          rangeRenderer={self.renderRange}
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
