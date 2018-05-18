import React from "react";
import Reflux from "reflux";
import { Button, ButtonGroup } from "reactstrap";
import RawTextStore from "./../Stores/RawTextStore.js";
// import Actions from "./../action.js";

class NewPoemPage extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = RawTextStore;
  }
  blackout = () => {
    console.log("Blacking out");
    this.state.poem.map(function(item, i) {});
  };
  render() {
    return (
      <div>
        <ButtonGroup>
          <Button onClick={this.blackout}>Select</Button>
          <Button>Erase</Button>
        </ButtonGroup>
        <p className="blackout_text">
          {this.state.poem[0].text} Reality continues to ruin my life
        </p>
      </div>
    );
  }
}

export default NewPoemPage;
