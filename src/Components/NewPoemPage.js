import React from "react";
import Reflux from "reflux";
import { Button, ButtonGroup } from "reactstrap";
import RawTextStore from "./../Stores/RawTextStore.js";
import Paragraph from "./Paragraph.js";
// import Actions from "./../action.js";

class NewPoemPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = { blackout_var: "" };
    this.store = RawTextStore;
  }

  blackout = () => {
    this.setState({ blackout_var: "blackout_text" });
  };

  //take text, paragraph #(object key index), blackout_index as 3 props
  render() {
    var display_text = this.state.poem.map(function(item, i) {
      return (
        <Paragraph text={item.text} number={i} blackout={item.blackout_index} />
      );
    });
    return (
      <div>
        <ButtonGroup>
          <Button onClick={this.blackout}>Select</Button>
          <Button>Erase</Button>
        </ButtonGroup>
        {display_text}
      </div>
    );
  }
}

export default NewPoemPage;
